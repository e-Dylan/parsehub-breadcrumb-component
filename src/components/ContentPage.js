import React, { useEffect, useState } from 'react';

import './styles/ContentPage.scss';
import './styles/Breadcrumb.scss';

import * as api from '../api';

function Separator() {
	return (<span style={{margin: 40 + 'px'}}>/</span>)
}

export default function ContentsPage(props) {

	var [contents, setContents] = useState([]);
	var [activeFile, setActiveFile] = useState(null);
	var [loading, setLoading] = useState(null); 
	// Initialize path with root.
	var [currentPath, setCurrentPath] = useState("root");
	var [crumbs, setCrumbs] = useState([currentPath]);

	// Await for backend data before rendering component.
	async function awaitContents(path) {
		try {
			setLoading(true);
			const contents = await api.getContents(path);
			setContents(contents);
		} finally {
			setLoading(false);
		}
	}

	// Inititalize directory at the root, and
	// update current contents whenever the current path changes.
	// update crumbs with new current path.
	useEffect(() => {
		setContents(awaitContents(currentPath));
		setCrumbs(currentPath.split('/'));
	}, [currentPath]);

	// Initialize crumbs with the starting path ("root").
	useEffect(() => {
		setCrumbs(currentPath.split('/'));
	}, [])

	// Await the loading flag until we have data to render.
	return loading ? "loading..." : (
		<div>
			<nav className="breadcrumb-nav">
				<ol className="breadcrumb">
					{ crumbs.map((crumb, index) => 
						<li className="crumb" key={index}>
							<Separator />
							<a 
							style={{
								color: (index === crumbs.length-1) ? `gray` : `#0099ff`
							}}
							onClick={() => {
								// clicked on file in breadcrumb, change to that file.
								// Find the new path to the index of the crumb clicked on, using the current path.
								var newPath = "";
								var curPath = currentPath.split('/');
								for (var i = 0; i < index+1; i++) {
									// avoid adding a / to the end of the path.
									if (i == index)
										newPath += `${curPath[i]}`
									else
										newPath += `${curPath[i]}/`
								}
								setCurrentPath(newPath);
							}}>{crumb}</a>
						</li>
					) }
				</ol>
			
			</nav>

			<div className="contents-container">
				<div className="content-bars">
					<ul className="file-bar">
						<li>File Name</li>
						<li>Type</li>
						<li>Created</li>
						<li>Modified</li>
					</ul>
					
					{ contents.map((item, index) =>
						// each item is a content object: {
						//		fileName: ,
						//		fileType: ,
						// }
						<ul className="file-bar" key={index}>
								<li className="file-name" key={item.fileName} onClick={() => {
										// Update crumbs before we change dir, store reference to current dir (next dir's parent).
										// setCrumbs(props.addCrumb(crumbs, currentPath, item))
										// console.log(crumbs);
										setCurrentPath(currentPath+"/"+item.fileName)

										if (item.fileType === "file") 
											setActiveFile(item.fileName);
										else
											setActiveFile(null);
										
									}
								}>
									{item.fileName}
								</li>

								<li>{item.fileType}</li>
								<li>0:00 PM</li>
								<li>0:00 PM</li>
						</ul>
					) }

					{/* Show active filename only if current path is a file. */}
					{ activeFile &&
						<div className="active-file">
							<span>Current open file: </span>
							<a>{activeFile}</a>
						</div>
					}
				</div>
			</div>
		</div>
	)
}