export const modal = () => {
	const MODAL_ELS = document.querySelectorAll("[data-tb-modal]");
	let isOpened = false;

	// Toggle modal function with animation
	const toggleModal = (window, dialog) => {
		if (isOpened) {
			window.classList.add("flex");
			window.setAttribute("aria-hidden", false);
			window.setAttribute("aria-modal", true);
			window.setAttribute("role", "dialog");

			setTimeout(() => {
				window.classList.add("opacity-100");
				dialog.classList.add("scale-100");
			}, 30);
		} else {
			window.classList.remove("opacity-100");
			dialog.classList.remove("scale-100");
			window.setAttribute("aria-hidden", true);
			window.removeAttribute("aria-modal");
			window.removeAttribute("role");

			setTimeout(() => {
				window.classList.remove("flex");
			}, 300);
		}
	};

	// Close function
	const closeModal = () => {
		const WINDOW = document.querySelector("[data-tb-modal-window].flex");
		const DIALOG = document.querySelector("[data-tb-modal-window].flex [data-tb-modal-dialog]");

		isOpened = false;
		toggleModal(WINDOW, DIALOG);
	};

	if (MODAL_ELS.length) {
		// Open modal
		document.addEventListener("click", (e) => {
			let target = e.target.dataset.qaModal ? e.target : e.target.closest("[data-tb-modal]");

			// Toggle modals
			if (target) {
				e.preventDefault();

				setTimeout(() => {
					isOpened = true;
					let window = document.querySelector(target.attributes["data-tb-modal"].value);
					let dialog = window.querySelector("[data-tb-modal-dialog]");
					toggleModal(window, dialog);
				});
			}

			// Close modal on dismiss icon click
			const CLOSE = document.querySelectorAll("[data-tb-modal-window].flex [data-tb-modal-dismiss]");

			if (CLOSE.length) {
				CLOSE.forEach((item) => {
					if (item.contains(e.target)) {
						closeModal();
					}
				});
			}

			// Close modal on outside click
			const ACTIVE_WINDOW = document.querySelector("[data-tb-modal-window].flex");
			if (ACTIVE_WINDOW && e.target === ACTIVE_WINDOW) {
				closeModal();
			}
		});

		// Close modal on escape
		document.addEventListener("keydown", (e) => {
			const ACTIVE_WINDOW = document.querySelector("[data-tb-modal-window].flex");
			const KEYBBOARD_DISABLED = document.querySelector("[data-tb-modal-window].flex[data-tb-modal-keyboard]");

			if (ACTIVE_WINDOW && !KEYBBOARD_DISABLED) {
				if (e.key === "Escape") {
					closeModal();
				}
			}
		});
	}
};
