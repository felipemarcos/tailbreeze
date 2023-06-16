import { MESSAGE_DATA } from "./data";
import images from "../../../../img/contacts/*.jpg";

export const message = () => {
	const WRAPPER = document.getElementById("top-nav-message");
	const UNREAD_INDICATOR = `<i class="w-1.5 h-1.5 bg-blue-500 rounded-full self-start mt-2 flex-shrink-0"></i>`;
	let list = "";

	if (WRAPPER) {
		MESSAGE_DATA.map((data) => {
			const UNREAD_CLASS = data.status === "unread" ? "font-bold" : "";
			const AVATAR = `<img class="w-9 h-9 rounded-full mr-4" src="${images[data.image]}" alt="" />`;
			const CHAR = `<div class="w-9 h-9 rounded-full text-white font-bold flex items-center justify-center mr-3 ${data.color}">${data.cap}</div>`;

			list += `<a href="" class="flex items-center py-3 px-4 hover:bg-light-100 dark:hover:bg-dark-300 rounded overflow-hidden">
                        <div class="avatar">
                            ${data.image ? AVATAR : CHAR}    
                        </div>
                        <div class="flex-1 pr-3 overflow-hidden">
                            <div class="${UNREAD_CLASS} text-heading truncate">${data.content}</div>
                            <div class="text-muted text-sm">${data.time}</div>
                        </div>
                        ${data.status === "unread" ? UNREAD_INDICATOR : ""}
                    </a>`;

			WRAPPER.innerHTML = list;
		});
	}
};
