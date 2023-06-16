export const pageLoader = () => {
	const LOADER_EL = document.getElementById("page-loader");

	addEventListener("load", (event) => {
		if (LOADER_EL) {
			LOADER_EL.classList.add("opacity-0");
			setTimeout(() => {
				LOADER_EL.remove();
			}, 300);
		}
	});
};
