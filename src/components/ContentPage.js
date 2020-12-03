import React, { useState } from 'react';

import './styles/ContentPage.scss';
import './styles/Breadcrumb.scss';

function Separator() {
	return (<span style={{margin: 40 + 'px'}}>/</span>)
}

export default function ContentsPage(props) {

	// Initialize directory at the root.
	var [contents, setContents] = useState(props.getContents(props.root));
	var [currentDir, setCurrentDir] = useState(props.changeDir(props.root));
	
	// Initialize breadcrumb with root.
	var root = {
		name: 'root',
		path: props.root,
		parent: undefined,
	}
	var [crumbs, setCrumbs] = useState([root]);

	return (
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
								// clicked on file in contents, change to that file.
								// All files store references to their child's path.
								setCurrentDir(props.changeDir(crumb.path));
								setContents(props.getContents(crumb.path));

								// Clear breadcrumbs after this crumb.
								setCrumbs(props.updatePreviousCrumbs(crumbs, index));


							}}>{crumb.name}</a>
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
				
						<ul className="file-bar" key={index}>
								<li className="file-name" key={item.children} onClick={() => {
										// Update crumbs before we change dir, store reference to current dir (next dir's parent).
										setCrumbs(props.addCrumb(crumbs, currentDir, item))
										// console.log(crumbs);
										setCurrentDir(props.changeDir(item.ref));
										setContents(props.getContents(item.ref));
									}
								}>{item.fileName}
								</li>

								<li>{item.fileType}</li>
								<li>0:00 PM</li>
								<li>0:00 PM</li>
						</ul>
					
					) }
				</div>

				{/* Show active filename only if current path is a file. */}
				{crumbs.length > 0 && crumbs[crumbs.length-1].path.type === "file" &&
					<div className="active-file" onClick={console.log(crumbs)}>
						<span>Current open file: </span>
						<a>{crumbs[crumbs.length-1].name}</a>
					</div>
				}
				
			</div>
		</div>
	)
}