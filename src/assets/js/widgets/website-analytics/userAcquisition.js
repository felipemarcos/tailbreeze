import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle, reloadChart, CHART_GRID } from "../../vendors/chart";
import { cssVar } from "../../utils";
import { COLORS } from "../../constants";

const CHART_WRAPPER = document.getElementById("chart-user-acquisition");
let userAcquisitionChart;

export const userAcquisition = () => {
	// Chart
	const CHART_DATA = {
		labels: ["10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10"],
		datasets: [
			{
				label: "Organic Search",
				data: [13, 23, 30, 8, 13, 27, 54],
				backgroundColor: "#127f74",
				borderWidth: 0,
				borderRadius: 3,
				hoverOffset: 0,
			},
			{
				label: "Paid Search",
				data: [25, 20, 20, 40, 32, 10, 20],
				backgroundColor: "#26a69a",
				borderWidth: 0,
				borderRadius: 3,
				hoverOffset: 0,
			},
			{
				label: "Direct",
				data: [20, 45, 20, 28, 10, 50, 45],
				backgroundColor: "#5bbbb2",
				borderWidth: 0,
				borderRadius: 3,
				hoverOffset: 0,
			},
			{
				label: "Others",
				data: [10, 20, 35, 40, 12, 30, 18],
				backgroundColor: "#92d2cc",
				borderWidth: 0,
				borderRadius: 3,
				hoverOffset: 0,
			},
		],
	};

	const CHART_CONFIG = {
		type: "bar",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			indexAxis: "x",
			elements: {
				bar: {
					borderWidth: 0,
				},
			},
			responsive: true,
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
						display: true,
						drawBorder: true,
						drawOnChartArea: false,
						drawTicks: false,
						borderColor: cssVar("--chart-pie-border"),
					},
					stacked: true,
					ticks: {
						...CHART_TICKS,
						color: COLORS.MUTED,
						padding: 10,
					},
				},
				y: {
					border: {
						display: false,
					},
					grid: {
						...CHART_GRID,
					},
					ticks: {
						padding: 10,
						color: COLORS.MUTED,
						...CHART_TICKS,
					},
					stacked: true,
				},
			},
		},
	};

	if (CHART_WRAPPER) {
		userAcquisitionChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload Map and chart to match dark/light mode when switched
// This function will be used in `settings.js`
export const userAcquisitionUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(userAcquisitionChart);
		});
	}
};
