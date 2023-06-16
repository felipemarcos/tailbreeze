export const alert = () => {
	const ALERT_ELS = document.querySelectorAll("[data-tb-alert-dismiss]");

	if (ALERT_ELS) {
		ALERT_ELS.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				item.closest("[data-tb-alert]").remove();
			});
		});
	}
};
