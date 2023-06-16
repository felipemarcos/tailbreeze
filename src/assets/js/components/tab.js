export const tab = () => {
	const TAB_ELS = document.querySelectorAll("[data-tb-tab-nav] [role=tab]");

	// Set active tab
	const setTab = (el) => {
		let tabItemsParent = document.querySelector("[aria-labelledby=" + el.id + "]").closest("[data-tb-tab-content]");
		let tabItems = [...tabItemsParent.querySelectorAll("[role=tabpanel]")];
		let tabNavItems = [...el.closest("[data-tb-tab-nav]").querySelectorAll("[role=tab]")];

		tabNavItems.forEach((item) => {
			item.setAttribute("aria-selected", false);

			if (item.id === el.id) {
				item.setAttribute("aria-selected", true);
			}
		});

		tabItems.forEach((item) => {
			item.classList.add("hidden");

			if (item.attributes["aria-labelledby"].value === el.id) {
				item.classList.remove("hidden");
			}
		});
	};

	// Intialize tabs
	if (TAB_ELS.length) {
		TAB_ELS.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();

				if (item.getAttribute("aria-selected") === "true" || item.getAttribute("aria-disabled") === "true") {
					return;
				}

				setTab(item);
			});
		});
	}
};
