import { DATA, DETAILS } from "./data";
import { FILES_DATA } from "../files/data";
import galleryImages from "../../../img/gallery/thumbs/*.jpg";

export const todoList = () => {
	const WRAPPER = document.getElementById("todo-lists");

	if (WRAPPER) {
		// Main list
		(() => {
			WRAPPER.innerHTML = "";
			DATA.map((item, index) => {
				let attachement = `<div class="text-muted ml-4 items-center hidden lg:flex">
                                        <i class="icon text-lg mr-1">attachment</i>
                                        <span class="text-muted">
                                            ${item.files.length}
                                            ${item.files.length > 1 ? " Attachements" : " Attachement"}
                                        </span>
                                    </div>`;

				let dueDate = `<div class="text-muted flex items-center">
                                    <i class="icon text-lg mr-1">schedule</i>
                                    ${item.due.date}
                                </div>`;

				let listItem = document.createElement("div");
				listItem.className =
					"mb-1 flex items-center leading-none rounded-md bg-white border hover:bg-light-100/75 dark:border-none border-light-200 hover:border-light-300 dark:bg-dark-100 dark:hover:bg-dark-200";

				let checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.classList.add("peer", "checkbox", "rounded-full", "mr-3");
				checkbox.checked = item.completed;

				let listTag = document.createElement("i");
				listTag.classList.add("w-1", "rounded", "h-5", "mx-3", "-my-2", item.color);

				listItem.innerHTML = `<div class="flex-1 truncate flex items-center py-3 dark:hover:text-heading pr-4 cursor-pointer peer-checked:line-through" data-tb-modal="#modal-todo-list">
                                            <div class="truncate flex-1 leading-normal">${item.title}</div>
                                            ${item.due.date ? dueDate : ""}
                                            ${item.files.length > 0 ? attachement : ""}
                                        </div>`;
				listItem.prepend(checkbox);
				listItem.prepend(listTag);

				WRAPPER.appendChild(listItem);
			});
		})();

		// Sub tasks
		(() => {
			const SUB_TASK_WRAPPER = document.getElementById("todo-sub-tasks");
			let list = "";

			DETAILS.subTasks.map((item, index) => {
				list += `<div class="flex items-start py-3 border-t border-light-200 dark:border-dark-200">
                            <input type="checkbox" class="peer checkbox rounded-full mr-3 mt-px">
                            <div class="peer-checked:line-through">${item.task}</div>
                        </div>`;
			});

			SUB_TASK_WRAPPER.innerHTML = list;
		})();

		// Sub tasks
		(() => {
			const ATTACHEMENT_WRAPPER = document.getElementById("todo-attachements");
			let list = "";
			let icon = "";

			FILES_DATA.slice(0, 5).map((item, index) => {
				if (item.type === "image") {
					icon = `<img class="w-8 h-8 rounded-full mr-3" src="${galleryImages[item.img]}" alt="">`;
				} else {
					icon = `<i class="icon rounded-full w-8 h-8 mr-3 flex-shrink-0 grid place-content-center bg-light-200 dark:bg-dark-300/50">${item.icon}</i>`;
				}

				list += `<a href="#" class="flex items-center rounded py-3 px-3 hover:bg-light-100 dark:hover:bg-dark-200">
                            ${icon}
                            <div class="flex-1 leading-none">
                                <div class="font-bold text-heading mb-2">${item.name}</div>
                                <div class="text-muted text-sm">
                                    Added on ${item.date}
                                    <div class="float-right">${item.size}</div>
                                </div>
                            </div>
                        </a>`;
			});

			ATTACHEMENT_WRAPPER.innerHTML = list;
		})();
	}
};
