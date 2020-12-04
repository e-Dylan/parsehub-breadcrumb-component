import './App.css';

import { useEffect, useState } from 'react';

// Components
import ContentPage from './components/ContentPage';

// loop through entire object, at every children dir:
// set children.parent = currentPath, give each child of object the children object.
// in getContents - for files: use fileName: path

/**
 * Clicked on a file or directory in contents, add it to breadcrumbs.
 *  
 * @param crumbs: array of current crumb items in breadcrumb at current path.
 * @param currentDir: object to current path, tracks the parent to next crumb.
 * @param item: new file that is added as the next crumb.
 */
function addCrumb(crumbs, currentDir, item) {
	crumbs.push({
		name: item.fileName,
		path: item.ref,
		parent: currentDir, // parent cannot be found from the object itself. Store parent as directory which we came from.
	});
	return crumbs;
}

/**
 * Clicked a previous directory in breadcrumb
 * 
 * @param crumbs: array of current breadcrumb path items. 
 * @param index: index of new path location being sent to.
 */
function updatePreviousCrumbs(crumbs, index) {
	crumbs = crumbs.slice(0, index+1);
	return crumbs;
}

function changeDir(path) {
	var currentDir = path;
	return currentDir;
}

function App() {

	return (
		<div className="App">
			<ContentPage 
				addCrumb={addCrumb}
				updatePreviousCrumbs={updatePreviousCrumbs}
				changeDir={changeDir}
			/>			
		</div>
	);
}

export default App;
