import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export const inputSlider = () => {
	const SLIDER_BASIC = document.getElementById("slider-basic");
	const SLIDER_RANGE = document.getElementById("slider-range");

	if (SLIDER_BASIC) {
		noUiSlider.create(SLIDER_BASIC, {
			start: [20],
			connect: "lower",
			range: {
				min: 0,
				max: 100,
			},
		});

		SLIDER_BASIC.noUiSlider.on("update", function (values, handle) {
			document.getElementById("slider-basic-input").value = values[handle];
		});
	}

	if (SLIDER_RANGE) {
		const SLIDER_RANGER_UPPER = document.getElementById("slider-range-upper-input");
		const SLIDER_RANGER_LOWER = document.getElementById("slider-range-lower-input");
		const SLIDER_RANGER_INPUTS = [SLIDER_RANGER_UPPER, SLIDER_RANGER_LOWER];

		noUiSlider.create(SLIDER_RANGE, {
			start: [30, 70],
			connect: true,
			range: {
				min: 0,
				max: 100,
			},
		});

		SLIDER_RANGE.noUiSlider.on("update", function (values, handle) {
			SLIDER_RANGER_INPUTS[handle].value = values[handle];
		});
	}
};
