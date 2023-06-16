import { SHORTCUTS_DATA } from "./data";

export const shortcut = () => {
	const SHORTCUTS_WRAPPER = document.querySelector("#top-nav-shortcut");
	let list = "";

	if (SHORTCUTS_WRAPPER) {
		SHORTCUTS_DATA.map((data) => {
			list += `<a href="" class="rounded-lg p-3 text-center text-heading transition-colors duration-300 border border-light-200 bg-light-100/50 hover:bg-light-100 dark:border-dark-300 dark:bg-dark-300/50 dark:hover:bg-dark-300">
						<i class="icon text-2xl -mt-0.5 inline-block font-light">${data.icon}</i>
						<div class="font-bold text-sm leading-tight">
							${data.shortcut}
						</div>
                  	</a>`;

			SHORTCUTS_WRAPPER.innerHTML = list;
		});
	}
};
