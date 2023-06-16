// Get Date/Time to display in
// content header
export const dateTime = () => {
	const DATE_WRAPPER = document.getElementById("date");
	const DATE_OBJ = new Date();
	const formatter = new Intl.DateTimeFormat("en", {
		dateStyle: "full",
	});

	if (DATE_WRAPPER) {
		DATE_WRAPPER.innerHTML = `<span>${formatter.format(DATE_OBJ)}</span>`;
	}
};
