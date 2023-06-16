import "vanilla-colorful/hex-color-picker";
import "vanilla-colorful/hsl-string-color-picker.js";
import "vanilla-colorful/rgba-string-color-picker.js";

export const colorPicker = () => {
	const HEX_EL = document.querySelector("hex-color-picker");
	const HEX_INPUT_EL = document.getElementById("hex-input");

	const HSL_EL = document.querySelector("hsl-string-color-picker");
	const HSL_INPUT_EL = document.getElementById("hsl-input");

	const RGBA_EL = document.querySelector("rgba-string-color-picker");
	const RGBA_INPUT_EL = document.getElementById("rgba-input");

	if (HEX_EL) {
		HEX_EL.addEventListener("color-changed", (event) => {
			const newColor = event.detail.value;
			HEX_INPUT_EL.value = newColor;
		});
	}

	if (HSL_EL) {
		HSL_EL.addEventListener("color-changed", (event) => {
			const newColor = event.detail.value;
			HSL_INPUT_EL.value = newColor;
		});
	}

	if (RGBA_EL) {
		RGBA_EL.addEventListener("color-changed", (event) => {
			const newColor = event.detail.value;
			RGBA_INPUT_EL.value = newColor;
		});
	}
};
