import { DATA } from "./data";

export const faq = () => {
	const WRAPPER = document.getElementById("faq");
	let list = "";

	if (WRAPPER) {
		DATA.map((item) => {
			let faqLinks = document.createElement("div");

			let faqCategory = document.createElement("h3");
			faqCategory.innerText = item.category;

			item.links.map((link) => {
				let faqLinkItem = document.createElement("a");
				faqLinkItem.href = "#";
				faqLinkItem.innerText = link;
				faqLinkItem.classList.add(
					"block",
					"border-b",
					"border-dashed",
					"border-light-200",
					"dark:border-dark-200",
					"py-2",
					"hover:text-link",
					"dark:hover:text-heading"
				);
				faqLinkItem.setAttribute("data-tb-modal", "#modal-faq-details");
				faqLinks.appendChild(faqLinkItem);
			});

			list += `<div class="card px-7 py-5">
                        <h3 class="flex items-center font-bold text-heading mb-3">
                            <div class="flex-1 text-lg">${item.category}</div> 
                            <i class="icon ml-auto font-light text-2xl">${item.icon}</i>
                        </h3>
                        ${faqLinks.outerHTML}
                        <a href="#" class="flex items-center text-sm text-muted hover:text-link dark:hover:text-body mt-4">
                            Browse all questions
                            <i class="icon ml-auto font-light">east</i>
                        </a>
                    </div>`;
		});

		WRAPPER.innerHTML = list;
	}
};
