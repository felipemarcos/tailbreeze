import { Datepicker, DateRangePicker } from "vanillajs-datepicker";

export const vanillajsDatepicker = () => {
	// Datepicker
	const DATEPICKER_ELS = document.querySelectorAll(".date-picker");

	DATEPICKER_ELS.forEach((el) => {
		const DATEPICKER = new Datepicker(el, {
			todayHighlight: true,
			prevArrow: "west",
			nextArrow: "east",
		});
	});

	// Date Range Picker
	const RANGEPICKER_ELS = document.querySelectorAll(".date-range-picker");

	RANGEPICKER_ELS.forEach((el) => {
		const RANGEPICKER = new DateRangePicker(el);
	});
};
