import { ICONS_DATA } from "./data";

export const icons = () => {
	const WRAPPER = document.getElementById("icons");
	let list = "";

	if (WRAPPER) {
		ICONS_DATA.map((item) => {
			list += `<div class="rounded py-2 px-3 hover:bg-light-100 dark:hover:bg-dark-200">
                        <span class="icon text-3xl text-heading font-light">${item}</span>
                        <span class="hidden text-sm text-muted sm:block px-0.5">${item}</span>
                    </div>`;
		});

		WRAPPER.innerHTML = list;
	}
};
