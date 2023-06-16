import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

export const quillEditor = () => {
	const QUILL_EL = document.querySelectorAll(".quill");

	if (QUILL_EL.length > 0) {
		QUILL_EL.forEach((item) => {
			let placeholder = item.getAttribute("data-placeholder");

			new Quill(item, {
				modules: {
					toolbar: [
						["bold", "italic", "underline"],
						[{ list: "ordered" }, { list: "bullet" }],
						["link", "image"],
					],
				},
				placeholder: placeholder,
				theme: "snow"
			});
		});
	}
};
