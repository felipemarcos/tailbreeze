import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle, CHART_LEGEND_LABEL, CHART_GRID } from "../../vendors/chart";
import { COLORS } from "../../constants";

export const line = () => {
	const WRAPPER = document.getElementById("chart-line");

	// Chart data
	const DATA = {
		labels: ["100", "200", "300", "400", "500", "600", "700"],
		datasets: [
			{
				label: "January",
				data: [15, 3, 10, 9, 29, 5, 22],
				borderColor: "rgba(9, 182, 234, 0.30)",
				backgroundColor: "transparent",
				hoverBackgroundColor: "rgba(9, 182, 234, 0.30)",
				borderWidth: 1.25,
				pointRadius: 0,
				pointBackgroundColor: "transparent",
				pointBorderColor: "rgba(9, 182, 234, 0.30)",
				pointHoverBorderColor: "rgba(9, 182, 234, 0.30)",
				pointHoverBorderWidth: 1.75,
				pointHoverBackgroundColor: "rgba(9, 182, 234, 0.30)",
			},
			{
				label: "February",
				data: [5, 19, 15, 24, 12, 30, 9],
				borderColor: "#09b7ea",
				backgroundColor: "transparent",
				hoverBackgroundColor: "#09b7ea",
				borderWidth: 1.25,
				pointRadius: 0,
				pointBackgroundColor: "transparent",
				pointBorderColor: "#09b7ea",
				pointHoverBorderColor: "#09b7ea",
				pointHoverBorderWidth: 1.75,
				pointHoverBackgroundColor: "#09b7ea",
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
