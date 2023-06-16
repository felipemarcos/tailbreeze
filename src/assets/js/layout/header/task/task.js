import { TASKS_DATA } from "./data";

export const tasks = () => {
	const TASK_WRAPPER = document.getElementById("top-nav-task");
	const LIMIT = 10;
	let list = "";

	// View
	if (TASK_WRAPPER) {
		TASKS_DATA.slice(0, LIMIT).map((data, index) => {
			list += `<div class="px-4 mb-4 flex items-start group">
                        <input class="peer checkbox mt-0.5 mr-3" type="checkbox" id="top-nav-task-${data.id}">
                        <label class="truncate cursor-pointer peer-checked:line-through" for="top-nav-task-${data.id}">
                            <span class="font-bold text-heading">${data.title}</span>
                            <span class="flex items-center mb-1 text-muted text-sm">
                                <span class="mr-2 rounded-sm text-xs font-bold py-0.5 px-1 text-white ${data.color}">${data.label}</span>-
                                ${data.due.date !== "" ? `<span class="mx-2">${data.due.date}</span>-` : ""}
                                <span class="mx-2">${data.priority}</span>
                            </span>
                        </label>
                    </div>`;

			TASK_WRAPPER.innerHTML = list;
		});
	}
};
