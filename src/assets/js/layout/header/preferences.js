import Swal from "sweetalert2";

export const preferences = () => {
	const ROOT = document.querySelector("html");

	const RENDER_TILE = (elem, icon, title, activeState, pro) => {
		const TILE_CLASSES = activeState ? "bg-light-200 text-heading" : "border hover:bg-light-100 bg-light-100/50 text-heading";

		const PRO_BADGE = pro
			? `<span class="absolute -top-2 right-0 left-0 mx-auto w-9 bg-theme rounded-full leading-none text-sm font-bold py-0.5 text-white">Pro</span>`
			: "";

		elem.setAttribute("class", `relative flex flex-col border-light-200 items-center rounded-lg p-3 transition-colors duration-300 ${TILE_CLASSES}`);
		elem.innerHTML = `${PRO_BADGE}
						<i class="icon -mt-0.5 mb-1 inline-block text-2xl font-light">${icon}</i>
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
