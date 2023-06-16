import { DATA } from "./data";
import contactImages from "../../../img/contacts/*.jpg";

export const issuesTracker = () => {
	const WRAPPER = document.getElementById("issues-tracker");
	let list = "";
	let avatar;

	if (WRAPPER) {
		DATA.map((item, index) => {
			if (item.op.img) {
				avatar = `<img class="w-9 h-9 rounded-full mr-3" src="${contactImages[item.op.img]}" alt="${item.op.name}">`;
			} else {
				avatar = `<div class="w-9 h-9 grid place-content-center mr-3 rounded-full text-white font-bold ${item.op.color}">${item.op.cap}</div>`;
			}

			list += `<a href="" class="mb-1 flex items-center rounded-md py-3 px-4 bg-white hover:bg-light-100/75 border dark:border-none border-light-200 hover:border-light-300 dark:bg-dark-100 dark:hover:bg-dark-200">
                        ${avatar}
                        <div class="flex-1 truncate">
                            <div class="font-bold text-heading truncate mb-1">${item.title}</div>
                            <div class="text-muted text-sm truncate">#${item.id} Opened ${item.timeSince} ago by ${item.op.name}</div>
                        </div>
                    </a>`;
		});

		WRAPPER.innerHTML = list;
	}
};
