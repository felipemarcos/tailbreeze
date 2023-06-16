import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle, CHART_LEGEND_LABEL, CHART_GRID } from "../../vendors/chart";
import { COLORS } from "../../constants";

export const bar = () => {
	const WRAPPER = document.getElementById("chart-bar");

	// Chart data
	const DATA = {
		labels: ["100", "200", "300", "400", "500", "600", "700"],
		datasets: [
			{
				label: "January",
				data: [44, 55, 41, 37, 22, 43, 21],
				barThickness: 8,
				backgroundColor: "rgba(9, 182, 234, 0.30)",
				hoverBackgroundColor: "rgba(9, 182, 234, 0.30)",
			},
			{
				label: "February",
				data: [53, 32, 33, 52, 13, 43, 32],
				barThickness: 8,
				backgroundColor: "#09b7ea",
				hoverBackgroundColor: "#09b7ea",
			},
		],
	};

	// Chart config
	const CONFIG = {
		type: "bar",
		data: DATA,
		options: {
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: -8,
					right: 15,
				},
			},
			elements: {
				bar: {
					borderWidth: 0,
				},
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
						...CHART_TICKS,
						padding: 15,
						color: COLORS.MUTED,
					},
				},
			},
		},
	};

	// Init chart
	if (WRAPPER) {
		new Chart(WRAPPER, CONFIG);
	}
};
