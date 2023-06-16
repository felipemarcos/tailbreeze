import "chartjs-adapter-moment";
import { Chart } from "chart.js";
import { cssVar } from "../../utils";
import { COLORS } from "../../constants";
import { chartTooltipStyle, reloadChart } from "../../vendors/chart";

const CHART_WRAPPER = document.getElementById("chart-sessions-by-referrer");
let sessionsByReferrerChart;

export const sessionsByReferrer = () => {
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
		sessionsByReferrerChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}

	//---------------------------------------------------------
	// Data
	//---------------------------------------------------------
	let list = "";
	const WRAPPER = document.getElementById("list-sessions-by-referrer");
	const DATA = [
		{
			source: "Direct visitors",
			visits: 433565,
			percentage: 85.4,
			className: "bg-purple-400",
			up: true,
		},
		{
			source: "Search engines",
			visits: 213657,
			percentage: 70.3,
			className: "bg-cyan-400",
			up: false,
		},
		{
			source: "Social media networks",
			visits: 138593,
			percentage: 59.4,
			className: "bg-lime-400",
			up: false,
		},
		{
			source: "Online advertisements",
			visits: 85654,
			percentage: 35.8,
			className: "bg-amber-400",
			up: true,
		},
	];

	if (WRAPPER) {
		DATA.forEach((item) => {
			list += `<div class="flex flex-wrap items-center text-heading">
						<i class="w-3 h-3 rounded-full mr-3 ${item.className}"></i>
						<div class="flex-1">${item.source}</div>
						<div class="ml-3 w-10 text-right font-bold">${item.visits}</div>
						<div class="w-16 justify-end flex items-center ${item.up ? "text-green-500" : "text-red-500"}">
							${item.percentage}
							<i class="icon ml-1 font-light">${item.up ? "arrow_circle_up" : "arrow_circle_down"}</i>
						</div>
						<div class="h-0.5 my-3 bg-light-200 dark:bg-dark-200 w-full">
							<div class="h-0.5 rounded ${item.className}" style="width: ${item.percentage}%"></div>
						</div>
					</div>`;

			WRAPPER.innerHTML = list;
		});
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `settings.js`
export const sessionsByReferrerChartUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(sessionsByReferrerChart, (sessionsByReferrerChart.data.datasets[0].borderColor = cssVar("--chart-pie-border")));
		});
	}
};
