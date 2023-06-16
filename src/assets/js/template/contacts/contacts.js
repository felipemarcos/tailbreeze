import { DATA } from "./data";
import contactImages from "../../../img/contacts/*.jpg";

export const contacts = () => {
	const WRAPPER = document.getElementById("contacts-list");

	if (WRAPPER) {
		DATA.map((item, index) => {
			let listItems = "";
			let avatar = "";
			let active = "";
			let group = document.createElement("div");
			group.id = `contacts-list-${item.group}`;
			WRAPPER.appendChild(group);

			const GROUP_TITLE = `<div class="border-b border-light-200 dark:border-dark-100 mb-3 h-3">
									<div class="bg-body relative px-3 font-bold inline-block uppercase text-muted text-sm">${item.group}</div>
								</div>`;

			item.items.map((contact, contactIndex) => {
				// Set avatar
				if (contact.img) {
					avatar = `<img class="w-9 h-9 rounded-full mr-3" src="${contactImages[contact.img]}" alt="${contact.name}" />`;
				} else {
					avatar = `<div class="w-9 h-9 rounded-full mr-3 text-white font-bold flex items-center justify-center uppercase ${contact.color}">${contact.cap}</div>`;
				}

				// Set active class
				index === 0 && contactIndex === 0 ? (active = "bg-light-200 dark:bg-dark-100") : (active = "hover:bg-light-200/60 dark:hover:bg-dark-100/50");

				listItems += `<a data-toggle="body" href="" class="${active} flex items-center py-3 px-3 rounded relative mb-px">
                                    ${avatar}
                                    <div class="flex-1 overflow-hidden">
                                        <div class="font-bold text-heading truncate">${contact.name}</div>
                                        <div class="text-muted text-sm">${contact.email}</div>
                                    </div>
                                </a>`;
			});

			document.getElementById(`contacts-list-${item.group}`).innerHTML = GROUP_TITLE + listItems;
		});
	}
};
