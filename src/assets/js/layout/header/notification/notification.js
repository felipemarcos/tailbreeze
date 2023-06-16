import { NOTIFICATION_DATA } from "./data";

export const notification = () => {
	const WRAPPER = document.getElementById("top-nav-notification");

	if (WRAPPER) {
		const UNREAD_INDICATOR = `<i class="w-1.5 h-1.5 bg-blue-500 rounded-full self-start mt-2 flex-shrink-0"></i>`;
		let list = "";

		NOTIFICATION_DATA.map((data) => {
			const UNREAD_CLASS = data.status === "unread" ? "font-bold" : "";

			list += `<a href="" class="flex items-center py-3 px-4 rounded overflow-hidden hover:bg-light-100 dark:hover:bg-dark-300">
                        <div class=" ${
							data.color
						} w-9 h-9 rounded-full flex-shrink-0 icon text-white flex items-center justify-center mr-3 text-2xl font-light">${data.icon}</div>
                        <div class="flex-1 pr-3 overflow-hidden">
                            <div class="${UNREAD_CLASS} text-heading truncate">${data.id} ${data.title}</div>
                            <div class="text-muted text-sm">${data.time}</div>
                        </div>
                        ${data.status === "unread" ? UNREAD_INDICATOR : ""}
                    </a>`;

			WRAPPER.innerHTML = list;
		});
	}
};
