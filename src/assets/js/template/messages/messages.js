import { DIRECT_MESSAGE_DATA, CONVERSATION_DATA, CHANNEL_MEMBERS, CHANNEL_FILES } from "./data";
import contactImages from "../../../img/contacts/*.jpg";
import galleryImages from "../../../img/gallery/thumbs/*.jpg";

export const messages = () => {
	// Direct messages
	(() => {
		const DM_WRAPPER = document.getElementById("direct-messages");
		let dMlist = "";
		let dMavatar = "";
		let dMunread = false;

		if (DM_WRAPPER) {
			DIRECT_MESSAGE_DATA.map((item, index) => {
				// Set avatar
				if (item.img) {
					dMavatar = `<img class="w-6 h-6 rounded-full mr-3" src="${contactImages[item.img]}" alt="" />`;
				} else {
					dMavatar = `<div class="w-6 h-6 rounded-full mr-3 text-sm text-white font-bold flex items-center justify-center uppercase ${item.color}">${item.cap}</div>`;
				}

				// Unread
				item.unread ? (dMunread = "font-bold text-heading") : (dMunread = "");

				// List
				dMlist += `<li>
								<a data-toggle="body" href="" class="${dMunread} flex items-center">
									${dMavatar}
									<div class="flex-1 truncate overflow-hidden">${item.name}</div>
								</a>
							</li>`;
			});

			DM_WRAPPER.innerHTML = `<ul class="nav-hover">
										${dMlist}
									</ul>`;
		}
	})();

	// Conversation
	(() => {
		const WRAPPER = document.getElementById("conversation");

		if (WRAPPER) {
			CONVERSATION_DATA.map((group) => {
				let messageGroup = document.createElement("div");
				messageGroup.id = `day-${group.id}`;
				WRAPPER.appendChild(messageGroup);

				// Set title date
				let date = `<div class="border-b border-light-200 dark:border-dark-100 flex justify-center h-8 mb-8 -mt-3 ml-14">
                                <div class="h-8 px-4 border border-light-200 dark:border-dark-100 bg-body relative -bottom-4 rounded-full flex items-center text-sm font-bold">${group.day}</div>
                            </div>`;

				messageGroup.innerHTML = date;

				// Set messages
				group.chat.map((message) => {
					// Avatar
					let avatar = "";
					if (message.op.img) {
						avatar = `<img class="w-9 h-9 rounded-full mr-3" src="${contactImages[message.op.img]}" alt="" />`;
					} else {
						avatar = `<div class="w-9 h-9 rounded-full mr-3 text-lg text-white font-bold flex items-center justify-center uppercase ${message.op.color}">${message.op.cap}</div>`;
					}

					// List
					let list = "";
					message.text.map((item) => {
						list += `<div id="message-${item.id}" class="message-item group relative py-[0.15rem] px-[0.35rem] rounded hover:bg-light-200 dark:hover:bg-dark-100">
                                    ${item.text}
                                </div>`;
					});

					let messageItemGroup = document.createElement("div");
					messageItemGroup.id = `message-${message.id}`;
					messageItemGroup.classList.add("flex", "items-start", "mb-3");
					messageGroup.appendChild(messageItemGroup);

					messageItemGroup.innerHTML = `${avatar}
                                    <div class="flex-1">
                                        <div class="font-bold text-heading pl-[0.35rem]">${message.op.name}</div>
                                        ${list}
                                    </div>`;
				});
			});

			// Message actions and backdrop

			// Action dropdown
			let actions = document.createElement("div");
			actions.classList.add("message-actions");
			const MESSAGE_ACTION_WRAPPER = document.querySelectorAll(".message-item");
			const MESSAGE_ACTIONS = `<div class="rounded-md border border-light-300 dark:border-dark-200 p-[1.5px] absolute bg-body -top-8 right-3 text-heading flex z-[7]">
										<a href="" class="btn icon hover:bg-light-200 dark:hover:bg-dark-200">sentiment_satisfied</a>
										<a href="" class="btn icon hover:bg-light-200 dark:hover:bg-dark-100">shortcut</a>
										<a href="" class="btn icon hover:bg-light-200 dark:hover:bg-dark-100">push_pin</a>
										<div class="relative" data-tb-dropdown>
											<button type="button" class="btn icon hover:bg-light-200 dark:hover:bg-dark-100 aria-expanded:bg-light-200 dark:aria-expanded:bg-dark-100" data-tb-dropdown-toggle aria-expanded="false">more_horiz</button>
											<div class="p-1" data-tb-dropdown-menu>
												<a class="flex items-center" href="#" data-tb-dropdown-item>
													<i class="icon text-lg mr-2">content_copy</i>
													Copy Message
												</a>
												<a class="flex items-center" href="#" data-tb-dropdown-item>
													<i class="icon text-lg mr-2">radar</i>
													Follow Message
												</a>
												<a class="flex items-center" href="#" data-tb-dropdown-item>
													<i class="icon text-lg mr-2">share</i>
													Share
												</a>
												<a class="flex items-center" href="#" data-tb-dropdown-item>
													<i class="icon text-lg mr-2">delete</i>
													Delete
												</a>
											</div>
										</div>
									</div>`;

			// Backdrop
			let backdrop = document.createElement("div");
			backdrop.classList.add("fixed", "top-0", "left-0", "w-full", "h-full", "z-[6]");

			// Toggle the action dropdown on hover
			MESSAGE_ACTION_WRAPPER.forEach((item) => {
				item.addEventListener("mouseenter", (e) => {
					actions.innerHTML = MESSAGE_ACTIONS;
					item.appendChild(actions);
				});

				item.addEventListener("mouseleave", (e) => {
					actions.remove();
					backdrop.remove();
				});
			});

			// Toggle the backdrop on hover and click
			const MESSAGE_ACTION_DROPDOWN = document.querySelectorAll(".message-item");
			MESSAGE_ACTION_DROPDOWN.forEach((item) => {
				item.addEventListener("show.bs.dropdown", (e) => {
					item.appendChild(backdrop);
				});

				item.addEventListener("hidden.bs.dropdown", (e) => {
					backdrop.remove();
					actions.remove();
				});
			});
		}
	})();

	// Channel members
	(() => {
		const MEMBERS_WRAPPER = document.getElementById("channel-members");
		let membersList = "";

		if (MEMBERS_WRAPPER) {
			CHANNEL_MEMBERS.map((item) => {
				let online;
				item.online === true ? (online = "border-light-300 dark:border-dark-300") : (online = "border-green-500");

				membersList += `<a href="#" class="flex items-center py-2 px-3 rounded hover:bg-light-100 dark:hover:bg-dark-200">
									<img src="${contactImages[item.id]}" class="rounded-full w-7 h-7 mr-2 flex-shrink-0" />
									<div class="flex-1 flex items-center leading-none">
										<div class="font-bold text-heading">${item.display}</div>
										<i class="w-3 h-3 mx-2 rounded-full border-2 ${online}"></i>
										<div class="text-muted text-sm hidden sm:block">${item.name}</div>
									</div>
								</a>`;
			});

			MEMBERS_WRAPPER.innerHTML = membersList;
		}
	})();

	// Channel files
	(() => {
		const FILES_WRAPPER = document.getElementById("channel-files");
		let filesList = "";

		if (FILES_WRAPPER) {
			CHANNEL_FILES.map((item) => {
				let icon;
				item.type === "image" ? (icon = galleryImages[item.img]) : (icon = item.ico);

				if (item.type === "image") {
					icon = `<img src="${galleryImages[item.img]}" class="w-8 h-8 mr-3 rounded-full" />`;
				} else {
					icon = `<i class="icon rounded-full w-8 h-8 mr-3 flex-shrink-0 grid place-content-center bg-light-200 dark:bg-dark-300/50">${item.icon}</i>`;
				}

				filesList += `<div class="group hover:bg-light-100 dark:hover:bg-dark-200 rounded relative">
								<a href="#" class="flex items-center py-3 px-3">
									${icon}
									<div class="flex-1 leading-none">
										<div class="font-bold text-heading mb-2">${item.name}</div>
										<div class="text-muted text-sm">by ${item.owner} on ${item.date}</div>
									</div>
								</a>
								<a href="#" class="icon hidden group-hover:flex absolute top-4 right-3">shortcut</a>
							 </div>`;
			});

			FILES_WRAPPER.innerHTML = filesList;
		}
	})();
};
