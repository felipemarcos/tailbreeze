import "chartjs-adapter-moment";
import { Chart } from "chart.js";
import { cssVar } from "../../utils";
import { COLORS } from "../../constants";
import { chartTooltipStyle, reloadChart } from "../../vendors/chart";

const CHART_WRAPPER = document.getElementById("chart-visits-by-source");
let visitsBySourceChart;

export const visitsBySource = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	// Chart data
	const CHART_DATA = {
		labels: ["Google", "Direct", "Bing", "Others"],
		datasets: [
			{
				data: [23981, 16342, 9736, 7632],
				backgroundColor: [COLORS.PURPLE, COLORS.CYAN, COLORS.LIME, COLORS.AMBER],
				borderWidth: 3,
				borderColor: cssVar("--chart-pie-border"),
				hoverOffset: 1,
				hoverBorderWidth: 0,
				borderRadius: 5,
			},
		],
	};

	// Chart config
	const CHART_CONFIG = {
		type: "doughnut",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
			cutout: 75,
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					...chartTooltipStyle,
				},
			},
		},
	};

	// Init chart
	if (CHART_WRAPPER) {
		visitsBySourceChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}

	//---------------------------------------------------------
	// Data
	//---------------------------------------------------------
	let list = "";
	const WRAPPER = document.getElementById("visit-by-source");
	const DATA = [
		{
			source: "Google",
			visits: 23981,
			percentage: 52.6,
			className: "text-purple-500",
			up: true,
		},
		{
			source: "Direct",
			visits: 16342,
			percentage: 31.3,
			className: "text-cyan-500",
			up: true,
		},
		{
			source: "Bing",
			visits: 9736,
			percentage: 10.5,
			className: "text-lime-500",
			up: false,
		},
		{
			source: "Others",
			visits: 7632,
			percentage: 17.2,
			className: "text-amber-500",
			up: false,
		},
	];

	if (WRAPPER) {
		DATA.forEach((item) => {
			list += `<div class="${item.className} flex flex-wrap items-center">
							<i class="w-2 h-2 rounded-full mr-3 bg-current"></i>
							<div class="flex-1 font-bold">${item.source}</div>
							<div class="w-10 text-right font-bold text-heading">${item.visits}</div>
							<div class="w-16 justify-end flex items-center ${item.up ? "text-green-500" : "text-red-500"}">
								${item.percentage}
								<i class="icon ml-1 font-light">${item.up ? "arrow_circle_up" : "arrow_circle_down"}</i>
							</div>
							<div class="h-0.5 my-3 bg-light-200 dark:bg-dark-200 w-full">
								<div class="h-0.5 bg-current rounded" style="width: ${item.percentage}%"></div>
							</div>
						</div>`;

			WRAPPER.innerHTML = list;
		});
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `settings.js`
export const visitsBySourceUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(visitsBySourceChart, (visitsBySourceChart.data.datasets[0].borderColor = cssVar("--chart-pie-border")));
		});
	}
};
