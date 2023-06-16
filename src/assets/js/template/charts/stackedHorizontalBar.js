import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle, CHART_LEGEND_LABEL, reloadChart, CHART_GRID } from "../../vendors/chart";
import { COLORS } from "../../constants";

export const stackedHorizontalBar = () => {
	const WRAPPER = document.getElementById("chart-stacked-horizontal-bar");

	// Chart data
	const DATA = {
		labels: ["100", "200", "300", "400", "500", "600", "700"],
		datasets: [
			{
				label: "January",
				data: [44, 55, 41, 37, 22, 43, 21],
				barThickness: 8,
				backgroundColor: "#4ade80",
				hoverBackgroundColor: "#4ade80",
			},
			{
				label: "February",
				data: [53, 32, 33, 52, 13, 43, 32],
				barThickness: 8,
				backgroundColor: "rgba(74, 222, 128, 0.3)",
				hoverBackgroundColor: "rgba(74, 222, 128, 0.3)",
			},
		],
	};

	// Chart config
	const CONFIG = {
		type: "bar",
		data: DATA,
		options: {
			maintainAspectRatio: false,
			indexAxis: "y",
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
						usePointStyle: true,
						color: COLORS.MUTED,
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
					stacked: true,
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
					stacked: true,
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
