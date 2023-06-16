import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import Chart from "chart.js/auto";
import { cssVar } from "../../utils";
import { chartTooltipStyle, CHART_TICKS, reloadChart } from "../../vendors/chart";
import { resizeMap } from "../../vendors/jsVectorMap";
import { COLORS } from "../../constants";

const CHART_WRAPPER = document.getElementById("chart-sessions-country");
let sessionChart;

export const sessionsByCountry = () => {
	// Map
	(() => {
		const MAP_WRAPPER = document.getElementById("map-sessions-country");

		if (MAP_WRAPPER) {
			// Resize map on load
			resizeMap(MAP_WRAPPER);

			// Initiate map
			new jsVectorMap({
				selector: "#map-sessions-country",
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
	})();

	const CHART_DATA = {
		labels: ["USA", "China", "England", "Japan", "Canada", "France"],
		datasets: [
			{
				label: "Sessions",
				data: [80, 40, 30, 50, 60, 20],
				backgroundColor: cssVar("--widget-session-country-active-fill"),
				barThickness: 4,
				borderWidth: 0,
				borderRadius: 10,
			},
		],
	};
	const CHART_CONFIG = {
		type: "bar",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: -20,
					bottom: -20,
				},
			},
			responsive: true,
			indexAxis: "y",
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
				},
				tooltip: {
					...chartTooltipStyle,
					callbacks: {
						label: (tooltipItem, data) => {
							return tooltipItem.formattedValue + "K";
						},
					},
				},
			},
			scales: {
				x: {
					border: {
						display: false,
					},
					grid: {
						display: false,
						drawBorder: false,
						drawOnChartArea: false,
						drawTicks: false,
					},
					ticks: {
						...CHART_TICKS,
						color: COLORS.MUTED,
						padding: 10,
						callback: (label, index, labels) => {
							return label + "K";
						},
					},
				},
				y: {
					border: {
						display: false,
					},
					grid: {
						display: false,
						drawBorder: false,
						drawOnChartArea: false,
						drawTicks: false,
						lineWidth: 0,
					},
					ticks: {
						...CHART_TICKS,
						padding: 25,
						color: COLORS.MUTED,
					},
				},
			},
		},
	};

	if (CHART_WRAPPER) {
		sessionChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `preferences.js`
export const sessionsByCountryUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(sessionChart, "scales", (sessionChart.data.datasets[0].backgroundColor = cssVar("--widget-session-country-active-fill")));
		});
	}
};
