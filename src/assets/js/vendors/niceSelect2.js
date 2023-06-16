import NiceSelect from "nice-select2/src/js/nice-select2.js";
global.NiceSelect = NiceSelect;

export const niceSelect2 = () => {
	const SELECTS = [
		{
			id: "custom-select-basic",
			options: {},
		},
		{
			id: "custom-select-searchable",
			options: {
				searchable: true,
			},
		},
		{
			id: "custom-select-multiple",
			options: {},
		},
	];

	SELECTS.forEach((select) => {
		const element = document.getElementById(select.id);
		if (element) {
			new NiceSelect(element, select.options);
		}
	});
};
