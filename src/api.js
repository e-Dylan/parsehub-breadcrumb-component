
// Root exists only on the server (api.js)
let root = {
	type: "dir",
	children: {
		home: {
			type: "dir",
			children: {
				myname: {
					type: "dir",
					children: {
						"filea.txt": {
							type: "file",
						},
						"fileb.txt": {
							type: "file",
						},
						"projects": {
							type: "dir",
							children: {
								mysupersecretproject: {
									type: "dir",
									children: {
										mysupersecretfile: {
											type: "file",
										},
									},
								}
							},
						},
					}
				},
			},
		}
	},
};

// Get contents of current directory, fill contents to render.
export async function getContents(path) {

	var dir = root;
	var contents = [];
	
	path = path.split('/');
	// path initializes at the root, splice root from path.
	path = path.slice(1, path.length);

	// go to current directory in root object:
	for (var i = 0; i < path.length; i++) {
		dir = dir["children"][path[i]];
	}
	// Reached directory specified by path.
	if (dir.type === "dir") {
		// current directory is a directory, contains children. return the children in contents.
		Object.keys(dir.children).map((key, index) => {
			var content = {
				fileName: Object.keys(dir.children)[index], // string name of child object
				fileType: dir.children[key].type, // .type property of child object
			};

			contents.push(content);
		});
	} else if (dir.type === "file") {
		// Nothing is added to the contents array, so nothing renders as
		// a content item in a file.
		// Metadata of file is displayed on frontend.
	}
	return contents;
}