// Get contents of current directory, fill contents to render.
export async function getContents(path) {

	var contents = [];

	if (path != null) {
		if (path.type === "dir") {
			Object.keys(path.children).map((key, index) => {
				// Map through all children (contents)
					contents.push({
						fileName: Object.keys(path.children)[index],
						fileType: path.children[key].type,
						path: path,
						ref: path.children[key],
					});
			});

		}
	}
	// console.log(contents);
	return contents;
}