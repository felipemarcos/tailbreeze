import { DATA } from "./data";
import galleryImages from "../../../img/gallery/thumbs/*.jpg";

export const photos = () => {
	const WRAPPER = document.getElementById("photos");
	const HEADER = document.getElementById("photos-header");
	const ACTION = document.getElementById("photos-actions");
	const AMOUNT = document.getElementById("photos-amount");
	const CLEAR = document.getElementById("photos-clear");
	let selectedPhotos = [];

	// Select function to select individual and group photos
	const SELECT = (elem, arr) => {
		if (elem.checked) {
			selectedPhotos = selectedPhotos.filter((x) => !arr.includes(x));
			selectedPhotos.push(...arr);
		} else {
			selectedPhotos = selectedPhotos.filter((x) => !arr.includes(x));
		}
		RENDER_PHOTOS();
	};

	// Highlight class for selected items
	const HIGHLIGHT_CLASS = [
		"before:content-['']", // before:content-['']
		"before:absolute", // before:absolute
		"before:top-0", // before:top-0
		"before:left-0", // before:left-0
		"before:w-full", // before:w-full
		"before:h-2/4", // before:h-2/4
		"before:rounded", // before:rounded
		"before:bg-gradient-to-b", // before:bg-gradient-to-b
		"before:from-black/90", // before:from-black/90
		"before:to-black/0", // before:to-black/0
	];

	// Clear selected photos on back icon click
	CLEAR &&
		CLEAR.addEventListener("click", () => {
			selectedPhotos = [];
			RENDER_PHOTOS();
		});

	// Main render function
	const RENDER_PHOTOS = () => {
		WRAPPER.innerHTML = "";

		// Toggle photos action header
		if (selectedPhotos.length > 0) {
			HEADER.classList.add("hidden");
			ACTION.classList.remove("hidden");

			// Update amount of selected photos
			AMOUNT.innerHTML = selectedPhotos.length;
		} else {
			HEADER.classList.remove("hidden");
			ACTION.classList.add("hidden");
		}

		// Loop through the data
		DATA.map((group) => {
			// Conditional class to toggle the visibility of the photo select checkbox
			const CHECKBOX_TOGGLE_CLASS = selectedPhotos.length > 0 ? "block" : "hidden";

			// Create wrapper element for the photo group
			let photoGroup = document.createElement("div");
			photoGroup.classList.add("mb-10");

			// Photo group header
			let photoGroupHeader = document.createElement("div");
			let photoGroupHeaderContent = `<div class="flex items-center">
                                                <div class="font-bold text-heading">${group.time}</div>
                                                <div class="text-sm text-muted ml-2 hidden sm:block">
                                                    ${group.location}
                                                    -
                                                    ${DATA.find((x) => x.id === group.id).items.length} Photos
                                                </div>
                                            </div>`;
			photoGroupHeader.classList.add("mb-2", "flex", "items-center");
			photoGroupHeader.innerHTML = photoGroupHeaderContent;

			// To select all the photos in the group, we need to send
			// a list of IDs as an array to the select function
			let groupPhotos = [];
			let groupPhotosArr = DATA.find((x) => x.id === group.id).items;
			groupPhotosArr.map((x) => groupPhotos.push(x.id));

			// Create and append the checkbox to select all photos
			let selectAll = document.createElement("input");
			selectAll.type = "checkbox";
			selectAll.classList.add("checkbox", "rounded-full", "mx-3", "mb-px", CHECKBOX_TOGGLE_CLASS);
			selectAll.checked = groupPhotos.every((v) => selectedPhotos.includes(v));
			selectAll.onclick = () => SELECT(selectAll, groupPhotos);
			photoGroupHeader.prepend(selectAll);
			photoGroup.appendChild(photoGroupHeader);

			// Create and append the wrapper for the individiual photo items
			// Append this inside the photo group created above.
			let photoGallery = document.createElement("div");
			photoGallery.classList.add("grid", "gap-1", "grid-cols-5", "lg:grid-cols-8");
			photoGroup.appendChild(photoGallery);

			// Loop through the photo items and create/append the individual photo items and checkboxes
			group.items.map((photo) => {
				// Create and append the checkbox to select indivisual photo items
				let selectItem = document.createElement("input");
				selectItem.type = "checkbox";
				selectItem.checked = selectedPhotos.includes(photo.id);
				selectItem.classList.add(
					CHECKBOX_TOGGLE_CLASS,
					"checkbox",
					"border-white",
					"rounded-full",
					"group-hover:block",
					"absolute",
					"left-3",
					"top-3",
					"!ring-white/20",
					"z-[1]"
				);
				selectItem.onclick = () => SELECT(selectItem, [photo.id]);

				// Create photo item
				let photoItem = document.createElement("div");
				let activeClass = selectedPhotos.length > 0 ? [...HIGHLIGHT_CLASS] : ["group"];
				photoItem.classList.add(...activeClass, "group", "relative");
				photoItem.innerHTML = `<img class="rounded" src="${galleryImages[photo.photo]}" alt="" />`;
				photoItem.appendChild(selectItem);

				// Append the photo item to the photo gallery
				photoGallery.appendChild(photoItem);
			});

			// Append the photo group to the main photos wrapper
			WRAPPER.appendChild(photoGroup);
		});
	};

	// Render photos
	WRAPPER && RENDER_PHOTOS();
};
