export const search = () => {
	const SEARCH = document.getElementById("search");
	const SEARCH_INPUT = document.getElementById("search-input");
	const SEARCH_TOGGLE = document.getElementById("search-toggle");

	if (SEARCH) {
		SEARCH_INPUT.addEventListener("blur", (e) => {
			SEARCH.classList.remove("search-toggled");
			SEARCH_INPUT.value = "";
		});

		// Mobile search
		SEARCH_TOGGLE.addEventListener("click", (e) => {
			e.preventDefault();
			SEARCH_INPUT.focus();
			SEARCH.classList.add("search-toggled");
		});
	}
};
