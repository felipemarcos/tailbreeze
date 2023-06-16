export const collapse = () => {
	const COLLAPSE_ELS = document.querySelectorAll("[data-tb-collapse-toggle]");

	if (COLLAPSE_ELS) {
		COLLAPSE_ELS.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();

				let target = document.querySelector(item.attributes["data-tb-collapse-toggle"].value);
				let mode = target.closest("[data-tb-collapse]").attributes["data-tb-collapse"].value;

				// Show function
				let show = (el) => {
					el.classList.remove("hidden");
					el.style.height = "0px";
					item.setAttribute("aria-expanded", true);

					setTimeout(() => {
						el.style.height = el.scrollHeight + "px";

						setTimeout(() => {
							el.style.height = "";
						}, 300);
					});
				};

				// Hide function
				let hide = (el) => {
					el.style.height = el.scrollHeight + "px";
					item.setAttribute("aria-expanded", false);

					setTimeout(() => {
						el.style.height = "0px";

						setTimeout(() => {
							el.classList.add("hidden");
							el.style.height = "";
						}, 300);
					});
				};

				// Configure collapse mode
				if (mode !== "always") {
					let activeTarget = e.target.closest("[data-tb-collapse]").querySelector("[data-tb-collapse-item]:not(.hidden)");

					if (activeTarget) {
						hide(activeTarget);
					}
				}

				// Toggle collapse
				target.classList.contains("hidden") ? show(target) : hide(target);
			});
		});
	}
};
