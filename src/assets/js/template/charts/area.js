import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle, CHART_LEGEND_LABEL, CHART_GRID } from "../../vendors/chart";
import { COLORS } from "../../constants";

export const area = () => {
	const WRAPPER = document.getElementById("chart-area");

	// Chart data
	const DATA = {
		labels: ["100", "200", "300", "400", "500", "600", "700"],
		datasets: [
			{
				label: "January",
				data: [15, 3, 10, 9, 29, 5, 22],
				fill: true,
				borderColor: "#22d3ee",
				backgroundColor: "rgba(34, 211, 238, 0.1)",
				hoverBackgroundColor: "rgba(34, 211, 238, 0.1)",
				borderWidth: 1.25,
				pointRadius: 0,
				tension: 0.4,
				pointBackgroundColor: "#22d3ee",
				pointBorderColor: "#22d3ee",
				pointHoverBorderColor: "#22d3ee",
				pointHoverBorderWidth: 1.75,
				pointHoverBackgroundColor: "#22d3ee",
			},
		],
	};

	// Chart config
	const CONFIG = {
		type: "line",
		data: DATA,
		options: {
			maintainAspectRatio: false,
			interaction: {
				mode: "index",
				intersect: false,
			},
			layout: {
				padding: {
					left: -8,
					right: 15,
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
