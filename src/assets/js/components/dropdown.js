export const dropdown = () => {
	const DROPDOWN_ELS = document.querySelectorAll("[data-tb-dropdown]");
	if (DROPDOWN_ELS) {
		document.addEventListener("click", (e) => {
			let target = e.target;

			// Toggle dropdowns
			if (target.attributes && target.attributes["data-tb-dropdown-toggle"]) {
				e.preventDefault();

				let dropdown = target.closest("[data-tb-dropdown]");
				let menu = dropdown.querySelector("[data-tb-dropdown-menu]");

				setTimeout(() => {
					// Toggle dropdown
					dropdown.classList.toggle("active");
					target.setAttribute("aria-expanded", dropdown.classList.contains("active"));

					// Check if menu is overflowing
					if (menu.getBoundingClientRect().right > window.innerWidth) {
						menu.classList.add("right-0");
					}
				});
			}

			// Close dropdowns on outside click
			const CURRENT = document.querySelector("[data-tb-dropdown].active");
			const CURRENT_TOGGLE = document.querySelector("[data-tb-dropdown].active [data-tb-dropdown-toggle]");

			if (CURRENT) {
				if (!target.closest("[data-tb-dropdown-menu]")) {
					setTimeout(() => {
						CURRENT.classList.remove("active");
						CURRENT_TOGGLE.setAttribute("aria-expanded", false);
					});
				}
			}
		});
	}
};
