import IMask from "imask";

export const inputMask = () => {
	const MASKS = [
		{
			selector: "mask-date",
			options: {
				mask: Date,
				lazy: true,
				min: new Date(1990, 0, 1),
				max: new Date(2100, 0, 1),
			},
		},
		{
			selector: "mask-time",
			options: {
				mask: "HH:MM",
				blocks: {
					HH: {
						mask: IMask.MaskedRange,
						placeholderChar: "HH",
						from: 0,
						to: 23,
						maxLength: 2,
					},
					MM: {
						mask: IMask.MaskedRange,
						placeholderChar: "MM",
						from: 0,
						to: 59,
						maxLength: 2,
					},
				},
			},
		},
		{
			selector: "mask-number",
			options: {
				mask: Number,
				min: -10000,
				max: 10000,
				thousandsSeparator: ",",
			},
		},
		{
			selector: "mask-us-phone",
			options: {
				mask: "+{1} (000) 000-0000",
			},
		},
		{
			selector: "mask-money",
			options: {
				mask: "$num",
				blocks: {
					num: {
						mask: Number,
						thousandsSeparator: ",",
					},
				},
			},
		},
		,
		{
			selector: "mask-ip",
			options: {
				mask: "000.000.0.000",
			},
		},
	];

	MASKS.forEach((item) => {
		let element = document.getElementById(item.selector);

		if (element) {
			IMask(element, item.options);
		}
	});
};
