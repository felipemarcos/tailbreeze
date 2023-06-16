import { DATA } from "./data";

export const searchResults = () => {
	const WRAPPER = document.getElementById("search-results");
	let list = "";

	if (WRAPPER) {
		DATA.map((item) => {
			list += `<a href="" class="mb-1 block rounded-md py-3 px-4 bg-white hover:bg-light-100/75 border dark:border-none border-light-200 hover:border-light-300 dark:bg-dark-100 dark:hover:bg-dark-200">
                        <div class="font-bold text-heading truncate mb-1">${item.title}</div>
                        <div class="text-muted text-sm truncate">${item.page}</div>
                    </a>`;
		});

		WRAPPER.innerHTML = list;
	}
};
