import contactImages from "../../../img/contacts/*.jpg";
import teamImages from "../../../img/team/*.jpg";
import { DATA } from "./data";

export const teams = () => {
	const WRAPPER = document.getElementById("teams");
	let list = "";

	if (WRAPPER) {
		DATA.map((item) => {
			let members = "";

			item.members.map((member) => {
				members += `<img class="w-9 h-9 rounded-full ring-2 ring-white dark:ring-dark-100 -ml-2" src="${contactImages[member.img]}">`;
			});

			list += `<div class="card p-1">
                        <img class="w-full rounded-tl rounded-tr mb-3" src="${teamImages[item.img]}" alt="">
                        
                        <div class="p-5 text-center">
                            <h3 class="text-heading font-bold mb-1">${item.title}</h3>
                            <div class="mb-5 text-muted">${item.description}</div>
    
                            <div class="flex items-center justify-center mb-4">
                                ${members}
                            </div>
                            
                            <div class="text-muted text-sm">${item.count} Members</div>
                        </div>
                    </div>`;
		});

		WRAPPER.innerHTML = list;
	}
};
