import Swal from "sweetalert2";
import { chartsUpdate } from "../../template/charts/charts";
import { returningRateChartUpdate } from "../../widgets/e-commerce/returningRate";
import { sessionsByReferrerChartUpdate } from "../../widgets/e-commerce/sessionsByReferrer";
import { topSalesChartUpdate } from "../../widgets/e-commerce/top-sales/topSales";
import { totalOrdersChartUpdate } from "../../widgets/e-commerce/totalOrders";
import { averageVisitDurationUpdate } from "../../widgets/website-analytics/averageVisitDuration";
import { sessionsByCountryUpdate } from "../../widgets/website-analytics/sessionsByCountry";
import { userAcquisitionUpdate } from "../../widgets/website-analytics/userAcquisition";
import { visitsBySourceUpdate } from "../../widgets/website-analytics/visitsBySource";

export const preferences = () => {
	const ROOT = document.querySelector("html");

	const RENDER_TILE = (elem, icon, title, activeState) => {
		const TILE_CLASSES = activeState
			? "bg-light-200 dark:bg-dark-500 text-heading dark:text-black"
			: "border hover:bg-light-100 bg-light-100/50 dark:hover:bg-dark-300 dark:bg-dark-300/50 text-heading";

		elem.setAttribute(
			"class",
			`flex flex-col border-light-200 dark:border-dark-300 items-center rounded-lg p-3 transition-colors duration-300 ${TILE_CLASSES}`
		);
		elem.innerHTML = `<i class="icon -mt-0.5 mb-1 inline-block text-2xl font-light">${icon}</i>
								<div class="text-sm font-bold leading-tight currentColor">${title}</div>`;

		return elem.innerHTML;
	};

	//----------------------------------------
	// Fullscreen mode
	//-----------------------------------------
	const FULLSCREEN_TOGGLE = document.getElementById("pref-fullscreen");
	let isFullscreen = false;

	if (FULLSCREEN_TOGGLE) {
		const RENDER_FULLSCREEN_TILE = () => {
			FULLSCREEN_TOGGLE.innerHTML = RENDER_TILE(FULLSCREEN_TOGGLE, "aspect_ratio", "Toggle Fullscreen", isFullscreen);
		};

		const SET_FULLSCREEN = (state = !isFullscreen) => {
			isFullscreen = state;
			RENDER_FULLSCREEN_TILE();
		};

		FULLSCREEN_TOGGLE.addEventListener("click", (e) => {
			e.stopPropagation();
			SET_FULLSCREEN();
			isFullscreen ? document.documentElement.requestFullscreen() : document.exitFullscreen();
		});

		document.addEventListener(
			"fullscreenchange",
			() => {
				if (!document.fullscreenElement) {
					SET_FULLSCREEN(false);
				}
			},
			false
		);

		RENDER_FULLSCREEN_TILE();
	}

	//----------------------------------------
	// Dark mode and theme colors
	//-----------------------------------------

	const DM_TOGGLE_EL = document.getElementById("pref-dark-mode");
	const CURRENT_THEME = localStorage.getItem("theme");
	const THEME_COLORS_WRAPPER = document.getElementById("pref-theme-colors");
	const THEME_COLORS_PICKER = document.getElementById("theme-color-picker");
	let currentThemeColor = localStorage.getItem("theme-color") || "blue";
	const COLORS = [
		// Following comments related to the color classes are important. DO NOT REMOVE THEM.
		"blue", // text-blue-500 bg-blue-100
		"green", // text-green-500 bg-green-100
		"indigo", // text-indigo-500 bg-indigo-100
		"orange", // text-orange-500 bg-orange-100
		"purple", // text-purple-500 bg-purple-100
		"red", // text-red-500 bg-red-100
		"cyan", // text-cyan-500 bg-cyan-100
		"teal", // text-teal-500 bg-teal-100
	];

	let isDarkMode = CURRENT_THEME === "dark" ? true : false;

	const RENDER_DM_TILE = () => {
		ROOT.setAttribute("data-theme", isDarkMode ? "dark" : "light");
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");

		isDarkMode ? THEME_COLORS_WRAPPER.classList.add("hidden") : THEME_COLORS_WRAPPER.classList.remove("hidden");

		DM_TOGGLE_EL.innerHTML = RENDER_TILE(DM_TOGGLE_EL, "brightness_4", "Toggle Dark Mode", isDarkMode);

		// Update widgets
		sessionsByCountryUpdate();
		visitsBySourceUpdate();
		averageVisitDurationUpdate();
		userAcquisitionUpdate();
		topSalesChartUpdate();
		sessionsByReferrerChartUpdate();
		returningRateChartUpdate();
		totalOrdersChartUpdate();

		// Update charts
		chartsUpdate();
	};

	const SET_THEME = (state = !isDarkMode) => {
		isDarkMode = state;
		RENDER_DM_TILE();
	};

	const RENDER_THEME_COLORS = () => {
		THEME_COLORS_PICKER.innerHTML = "";

		COLORS.map((color) => {
			const DOT = document.createElement("button");
			const ACTIVE = color === currentThemeColor ? "text-current" : "text-transparent";
			const DOT_HELPER = `<i class="icon w-full h-full bg-${color}-100 text-base grid place-content-center ${ACTIVE}">done</i>`;

			DOT.classList.add("w-6", "h-6", "rounded-full", "border", `text-${color}-500`, "border-current", "overflow-hidden");
			DOT.onclick = (e) => {
				e.stopPropagation();
				SET_THEME_COLOR(color);
			};

			DOT.innerHTML = DOT_HELPER;
			THEME_COLORS_PICKER.appendChild(DOT);
		});
	};

	const SET_THEME_COLOR = (color = "blue") => {
		currentThemeColor = color;
		ROOT.setAttribute("data-theme-color", color);
		localStorage.setItem("theme-color", color);
		RENDER_THEME_COLORS();
	};

	if (DM_TOGGLE_EL) {
		DM_TOGGLE_EL.addEventListener("click", (e) => {
			e.stopPropagation();
			SET_THEME();
		});

		RENDER_DM_TILE();
	}

	if (THEME_COLORS_PICKER) {
		SET_THEME_COLOR(currentThemeColor);
	}

	//----------------------------------------
	// ZOOM
	//----------------------------------------

	const ZOOM_EL = document.getElementById("pref-zoom");
	const ZOOM_LEVELS = [14, 15, 16, 17, 18];

	let currentZoom = 16;
	let isZoomed = false;

	const RENDER_ZOOM_TILE = (icon = "exposure") => {
		ZOOM_EL.innerHTML = RENDER_TILE(ZOOM_EL, icon, "Adjust Page Zoom", isZoomed);
	};

	const SET_ZOOM = (level = 16) => {
		currentZoom = level;
		const ZOOM_ICON = ["exposure_neg_2", "exposure_neg_1", "exposure", "exposure_plus_1", "exposure_plus_2"];
		ROOT.style.fontSize = `${currentZoom}px`;
		isZoomed = currentZoom === 16 ? false : true;
		RENDER_ZOOM_TILE(ZOOM_ICON[ZOOM_LEVELS.indexOf(currentZoom)]);
	};

	if (ZOOM_EL) {
		ZOOM_EL.addEventListener("click", (e) => {
			e.stopPropagation();
			const nextLevel = ZOOM_LEVELS.indexOf(currentZoom) + 1;
			const nextZoom = ZOOM_LEVELS[nextLevel] || ZOOM_LEVELS[0];

			SET_ZOOM(nextZoom);
		});

		RENDER_ZOOM_TILE();
	}

	//----------------------------------------
	// LocalStorage data
	//----------------------------------------

	const LS_DATA_WRAPPER = document.getElementById("pref-localstorage-data");
	const LS_DATA = JSON.stringify(localStorage, null, 4);

	if (LS_DATA_WRAPPER) {
		LS_DATA_WRAPPER.innerHTML = LS_DATA;
	}

	//----------------------------------------
	// Reset
	//----------------------------------------

	const SETTINGS_RESET_EL = document.getElementById("pref-reset");

	if (SETTINGS_RESET_EL) {
		SETTINGS_RESET_EL.addEventListener("click", (event) => {
			event.preventDefault();
			Swal.fire({
				title: "Are you sure?",
				text: "This'll reset your theme settings to the initial. You won't be able to undo this.",
				icon: "warning",
				showDenyButton: true,
				showConfirmButton: false,
				denyButtonText: "Reset Settings",
				showCancelButton: true,
				reverseButtons: true,
			}).then((result) => {
				if (result.isDenied) {
					SET_THEME(false);
					SET_THEME_COLOR();
					SET_ZOOM();
					// Fire the success message
					Swal.fire({
						title: "Done!",
						text: "Settings have been reset. Please use the preferences panel to update the UI settings.",
						icon: "success",
						confirmButtonText: "Okay",
						showCancelButton: false,
					});
				}
			});
		});
	}
};
