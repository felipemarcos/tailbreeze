import Chart from "chart.js/auto";
import { chartTooltipStyle, CHART_LEGEND_LABEL, reloadChart } from "../../vendors/chart";
import { cssVar } from "../../utils";
import { COLORS } from "../../constants";

const WRAPPER = document.getElementById("chart-doughnut");
let chart;

export const doughnut = () => {
	const DATA = {
		labels: ["Jan", "Feb", "Mar", "Apr"],
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
	const CONFIG = {
		type: "pie",
		data: DATA,
		options: {
			maintainAspectRatio: false,
			cutout: 75,
			interaction: {
				mode: "index",
				intersect: false,
			},
			responsive: true,
			plugins: {
				legend: {
					position: "bottom",
					labels: {
						color: COLORS.MUTED,
						usePointStyle: true,
						...CHART_LEGEND_LABEL,
					},
				},
				title: {
					display: false,
				},
				tooltip: {
					...chartTooltipStyle,
				},
			},
		},
	};

	// Init chart
	if (WRAPPER) {
		chart = new Chart(WRAPPER, CONFIG);
	}
};

// Reload chart to match dark/light mode when switched
export const doughnutChartUpdate = () => {
	if (WRAPPER) {
		setTimeout(() => {
			reloadChart(chart, (chart.data.datasets[0].borderColor = cssVar("--chart-pie-border")));
		});
	}
};
