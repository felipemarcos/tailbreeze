import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import { resizeMap } from "../../vendors/jsVectorMap";

export const activeVisitors = () => {
	//---------------------------------------------------------
	// Map
	//---------------------------------------------------------
	const MAP_WRAPPER = document.getElementById("map-active-visitors");

	if (MAP_WRAPPER) {
		// Resize map on load
		resizeMap(MAP_WRAPPER);

		new jsVectorMap({
			selector: "#map-active-visitors",
			map: "world",
			draggable: false,
			zoomButtons: false,
			zoomOnScroll: false,
			regionStyle: {
				initial: {
					fill: "INITIAL_FILL",
					"fill-opacity": 1,
					stroke: "none",
				},
			},
			visualizeData: {
				scale: ["ACTIVE_FILL", "ACTIVE_FILL"],
				values: {
					US: 500,
					BR: 450,
					ZA: 400,
					IN: 350,
					AE: 300,
					RU: 280,
					AU: 260,
					SG: 250,
					FR: 200,
					ES: 190,
					PL: 150,
					SE: 120,
					ID: 110,
					JP: 90,
					EG: 45,
				},
			},
			onLoaded(map) {
				window.addEventListener("resize", () => {
					// Set map size on window resize
					resizeMap(MAP_WRAPPER);

					setTimeout(() => {
						map.updateSize();
					});
				});
			},
		});
	}

	//---------------------------------------------------------
	// Data
	//---------------------------------------------------------
	const WRAPPER = document.getElementById("list-active-visitors");
	const DATA = [
		{
			page: "/phones/galaxy-s20-ultra-black-512gb-5g/N38205577A",
			visitors: 324,
			percentage: 37.8,
		},
		{
			page: "/storage/sandisk-cruzer-blade-flash-drive-64gb-multicolour/N11412247A",
			visitors: 256,
			percentage: 29.8,
		},
		{
			page: "/network/tp-link-450mbps-wireless-n-router-450-mbps-black/N12923478A",
			visitors: 102,
			percentage: 11.9,
		},
		{
			page: "/sound/jbl-water-resistant-portable-bluetooth-speaker",
			visitors: 86,
			percentage: 10.1,
		},
		{
			page: "/gaming/sony-dualshock-4-wireless-controller-for-playstation-4-black/N13035683A",
			visitors: 54,
			percentage: 6.3,
		},
	];

	if (WRAPPER) {
		let list = "";
		DATA.forEach((item, i) => {
			let border = i !== DATA.length - 1 && "border-b";
			list += `<div class="flex items-start border-light-200 dark:border-dark-200 py-3 text-heading ${border}">
                        <i class="icon mr-2">language</i>
						<div class="flex-1 text-truncate">${item.page}</div>
						<div class="font-bold ml-10">${item.visitors}</div>
					</div>`;
		});
		WRAPPER.innerHTML = list;
	}
};
