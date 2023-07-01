import Dropzone from "dropzone";

export const dropzoneJs = () => {
	const DRAG_DROP_EL = document.getElementById("drag-drop-upload");

	if (DRAG_DROP_EL) {
		Dropzone.autoDiscover = false;

		setTimeout(() => {
			let myDropzone = new Dropzone("#drag-drop-upload");
			myDropzone.on("addedfile", (file) => {
				console.log(`File added: ${file.name}`);
			});
		});
	}
};
