import filesImages from "../../../img/gallery/thumbs/*.jpg";
import { FOLDERS_DATA, FILES_DATA } from "./data";

export const fileManager = () => {
	const FOLDERS_WRAPPER = document.getElementById("folders");
	const FILES_WRAPPER = document.getElementById("files");
	let foldersList = "";
	let filesList = "";

	// Folders
	if (FOLDERS_WRAPPER) {
		FOLDERS_DATA.forEach((item) => {
			foldersList += `<a href="" class="card px-4 py-3 flex text-body group hover:text-link border">
                                <i class="icon text-xl mt-px mr-2">tab</i>
                                <div class="flex-1 overflow-hidden">
                                    <div class="truncate font-bold">${item.name}</div>
                                    <div class="text-muted group-hover:text-link text-sm">${item.files} Files</div>
                                </div>
                            </a>`;
		});

		FOLDERS_WRAPPER.innerHTML = foldersList;
	}

	// Files
	if (FILES_WRAPPER) {
		let filePreview = "";
		FILES_DATA.forEach((item) => {
			if (item.type === "image") {
				filePreview = `<div class="h-20 relative">
                                    <img class="h-20 w-full object-cover rounded" src="${filesImages[item.img]}" alt="">
                                </div>`;
			} else {
				filePreview = `<div class="h-20 relative">
                                    <i class="block group h-20 bg-current rounded opacity-30"></i>
                                    <span class="icon w-9 h-9 rounded-full bg-current absolute inset-0 m-auto flex items-center justify-center opacity-70 group-hover:opacity-100">
                                        <span class="text-white">${item.icon}</span>
                                    </span>
                                </div> `;
			}

			filesList += `<a href="" class="card group p-1 ${item.color}">
                                ${filePreview}
                                <div class="flex-1 p-2 overflow-hidden">
                                    <div class="text-body truncate group-hover:text-link">${item.name}</div>
                                    <div class="text-muted text-sm group-hover:text-link">${item.size}</div>
                                </div>
                            </a>`;
		});

		FILES_WRAPPER.innerHTML = filesList;
	}
};
