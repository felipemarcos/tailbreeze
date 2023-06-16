import { DATA } from "./data";
import contactImages from "../../../img/contacts/*.jpg";

export const mail = () => {
	const WRAPPER = document.getElementById("mail-list");
	let list = "";
	let avatar = "";
	let active = "";
	let unread = "";

	if (WRAPPER) {
		DATA.map((item, index) => {
			// Set avatar
			if (item.img) {
				avatar = `<img class="w-9 h-9 rounded-full mr-3" src="${contactImages[item.img]}" alt="" />`;
			} else {
				avatar = `<div class="w-9 h-9 rounded-full mr-3 text-white font-bold flex items-center justify-center uppercase ${item.color}">${item.cap}</div>`;
			}

			// Set active class
			index === 0 && index === 0 ? (active = "bg-light-200 dark:bg-dark-100") : (active = "hover:bg-light-200/60 dark:hover:bg-dark-100/50");

			// Set unread indiciator
			item.unread ? (unread = `<i class="w-1 h-1 rounded-full absolute inset-y-0 left-1 bg-theme my-auto"></i>`) : (unread = "");

			list += `<a data-toggle="body" href="" class="${active} flex items-center py-3 px-3 rounded relative mb-px">
                        ${unread}
                        ${avatar}   
                        <div class="flex-1 overflow-hidden">
                            <div class="font-bold truncate flex items-center">
                                <div class="flex-1 text-heading truncate pr-5">${item.from}</div>
                                <div class="text-xs text-muted flex-shrink-0">${item.time.short}</div>
                            </div>
                            <div class="text-muted text-sm truncate">${item.subject}</div>
                        </div>
                    </a>`;
		});

		WRAPPER.innerHTML = list;
	}
};
