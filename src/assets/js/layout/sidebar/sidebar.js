import { SIDEBAR_LINKS } from "./data.js";

export const sidebar = () => {
	//------------------------------------------------------------------
	// Sidebar links
	//------------------------------------------------------------------
	const SIDEBAR_EL = document.getElementById("sidebar-menu");
	const ACTIVE_PAGE = document.documentElement.dataset.page;

	if (SIDEBAR_EL) {
		SIDEBAR_LINKS.forEach((item) => {
			// Create parent group (ul), append the group title (li)
			const GROUP_EL = document.createElement("ul");
			GROUP_EL.className = "mb-5 relative";
			GROUP_EL.innerHTML = `<li class="menu-title text-sm text-muted mb-1 px-3 whitespace-nowrap">${item.group}</div>`;

			// Append group to sidebar
			SIDEBAR_EL.appendChild(GROUP_EL);

			// Create list and link for each sidebar link
			item.links.forEach((link) => {
				// List (ul > li)
				const LIST = document.createElement("li");
				LIST.className = "overflow-hidden";

				// Create link (ul > li > a)
				const LINK = document.createElement("a");
				LINK.className = "bg-body relative block cursor-pointer";

				// Create span tag to wrap link text and icon (if any)
				// ul > li > a > span
				const LINK_SPAN = document.createElement("span");
				LINK_SPAN.className = `flex items-center h-9 rounded whitespace-nowrap px-3 font-bold relative mb-px`;
				LINK_SPAN.innerHTML = `<i class="icon mr-3 -ml-0.5">${link.icon}</i> ${link.name}`;

				// Append span to link
				LINK.appendChild(LINK_SPAN);

				// Check if link is active and add active class
				const IS_LINK_ACTIVE = ACTIVE_PAGE === link.name.toLowerCase().replace(/\s/g, "-");
				IS_LINK_ACTIVE
					? (LINK_SPAN.classList.add("bg-theme/10", "text-theme"), LIST.classList.add("active"))
					: LINK_SPAN.classList.add("hover:bg-light-200/60", "dark:hover:bg-dark-100/60");

				// If link has url, set href.
				// If link has no url, add onclick event to toggle the sub-menus.
				if (link.url) {
					LINK.href = link.url;
				} else {
					// Create arrow icon for sub-menu toggle indicator
					const ARROW_ICON = document.createElement("i");
					ARROW_ICON.className = "icon ml-auto font-light transform transition-transform duration-300 origin-center";
					ARROW_ICON.innerText = "expand_more";

					// Append arrow icon
					LINK_SPAN.appendChild(ARROW_ICON);

					// Create sub ul element to contain the sub links
					const SUB_UL = document.createElement("ul");
					SUB_UL.className = "ml-10 text-md font-bold py-1.5";

					// Toggle the sub ul element on click
					setTimeout(() => {
						SUB_UL.style.marginTop = -SUB_UL.offsetHeight + "px";

						LINK_SPAN.onclick = (e) => {
							SUB_UL.classList.add("transition-[margin-top]", "duration-300");

							if (SUB_UL.style.marginTop === "0px") {
								SUB_UL.style.marginTop = -SUB_UL.offsetHeight + "px";
								SUB_UL.classList.remove("sub-menu-active");
								ARROW_ICON.classList.remove("rotate-180");
							} else {
								SUB_UL.style.marginTop = 0;
								SUB_UL.classList.add("sub-menu-active");
								ARROW_ICON.classList.add("rotate-180");
							}
						};
					});

					// Sub menu links
					link.sub?.forEach((sub) => {
						// Create sub list (ul > li)
						const SUB_LIST = document.createElement("li");

						// Create sub link (ul > li > a)
						const SUB_LINK = document.createElement("a");
						SUB_LINK.innerText = sub.name;
						SUB_LINK.href = sub.url;
						SUB_LINK.className = "whitespace-nowrap mb-2 block";

						// Check if sub link is active and add active class
						const IS_SUB_ACTIVE = ACTIVE_PAGE === (link.name + "-" + sub.name).toLowerCase().replace(/\s/g, "-");
						if (IS_SUB_ACTIVE) {
							LIST.classList.add("active");
							SUB_LINK.classList.add("text-theme");
							LINK_SPAN.classList.add("bg-theme/10", "text-theme");
							LINK_SPAN.classList.remove("hover:bg-light-200/60");
							setTimeout(() => {
								SUB_UL.style.marginTop = 0;
								SUB_UL.classList.add("sub-menu-active");
								ARROW_ICON.classList.add("rotate-180");
							});
						} else {
							SUB_LINK.classList.add("hover:opacity-80");
						}

						// Append sub link to sub list
						LIST.appendChild(SUB_UL);
						SUB_LIST.appendChild(SUB_LINK);
						SUB_UL.appendChild(SUB_LIST);
						LIST.prepend(SUB_UL);
					});
				}

				// Append link to list
				LIST.prepend(LINK);
				GROUP_EL.appendChild(LIST);
			});
		});
	}

	//------------------------------------------------------------------
	// Toggle sidebar
	//------------------------------------------------------------------
	(() => {
		const SIDEBAR_TOGGLE = document.getElementById("sidebar-toggle");
		const BODY = document.body;
		const SIDEBAR = document.getElementById("sidebar");

		const BACKDROP_ELEM = document.createElement("div");
		BACKDROP_ELEM.id = "sidebar-backdrop";
		BACKDROP_ELEM.className = "cursor-pointer fixed left-0 top-0 w-full h-full z-[18] xl:hidden";

		const hideSidebar = () => {
			BODY.classList.remove("sidebar-toggled");
			document.getElementById("sidebar-backdrop").remove();
			SIDEBAR_TOGGLE.classList.remove("bg-white/10", "dark:bg-dark-100/60");
		};

		// Toggle sidebar on header toggle icon click
		if (SIDEBAR_TOGGLE) {
			SIDEBAR_TOGGLE.addEventListener("click", (e) => {
				e.preventDefault();

				if (BODY.classList.contains("sidebar-toggled")) {
					SIDEBAR_TOGGLE.classList.remove("bg-white/10", "dark:bg-dark-100/60");
					hideSidebar();
				} else {
					SIDEBAR_TOGGLE.classList.add("bg-white/10", "dark:bg-dark-100/60");
					BODY.classList.add("sidebar-toggled");
					SIDEBAR.parentNode.insertBefore(BACKDROP_ELEM, SIDEBAR.nextSibling);
				}
			});

			// Hide sidebar on backdrop click on mobile
			document.addEventListener("click", (event) => {
				if (event.target && event.target.id === "sidebar-backdrop") {
					hideSidebar();
				}
			});
		}
	})();
};
