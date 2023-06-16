import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle, CHART_LEGEND_LABEL, CHART_GRID } from "../../vendors/chart";
import { COLORS } from "../../constants";

export const scatter = () => {
	const WRAPPER = document.getElementById("chart-scatter");

	// Chart data
	const SCATTER_DATA_1 = [
		{
			x: 16.4,
			y: 5.4,
		},
		{
			x: 21.7,
			y: 2,
		},
		{
			x: 25.4,
			y: 3,
		},
		{
			x: 19,
			y: 2,
		},
		{
			x: 10.9,
			y: 1,
		},
		{
			x: 13.6,
			y: 3.2,
		},
		{
			x: 10.9,
			y: 7.4,
		},
		{
			x: 10.9,
			y: 0,
		},
		{
			x: 10.9,
			y: 8.2,
		},
		{
			x: 16.4,
			y: 0,
		},
		{
			x: 16.4,
			y: 1.8,
		},
		{
			x: 13.6,
			y: 0.3,
		},
		{
			x: 13.6,
			y: 0,
		},
		{
			x: 29.9,
			y: 0,
		},
		{
			x: 27.1,
			y: 2.3,
		},
		{
			x: 16.4,
			y: 0,
		},
		{
			x: 13.6,
			y: 3.7,
		},
		{
			x: 10.9,
			y: 5.2,
		},
		{
			x: 16.4,
			y: 6.5,
		},
		{
			x: 10.9,
			y: 0,
		},
		{
			x: 24.5,
			y: 7.1,
		},
		{
			x: 10.9,
			y: 0,
		},
		{
			x: 8.1,
			y: 4.7,
		},
		{
			x: 19,
			y: 0,
		},
		{
			x: 21.7,
			y: 1.8,
		},
		{
			x: 27.1,
			y: 0,
		},
		{
			x: 24.5,
			y: 0,
		},
		{
			x: 27.1,
			y: 0,
		},
		{
			x: 29.9,
			y: 1.5,
		},
		{
			x: 27.1,
			y: 0.8,
		},
		{
			x: 22.1,
			y: 2,
		},
	];

	const SCATTER_DATA_2 = [
		{
			x: 36.4,
			y: 13.4,
		},
		{
			x: 1.7,
			y: 11,
		},
		{
			x: 5.4,
			y: 8,
		},
		{
			x: 9,
			y: 17,
		},
		{
			x: 1.9,
			y: 4,
		},
		{
			x: 3.6,
			y: 12.2,
		},
		{
			x: 1.9,
			y: 14.4,
		},
		{
			x: 1.9,
			y: 9,
		},
		{
			x: 1.9,
			y: 13.2,
		},
		{
			x: 1.4,
			y: 7,
		},
		{
			x: 6.4,
			y: 8.8,
		},
		{
			x: 3.6,
			y: 4.3,
		},
		{
			x: 1.6,
			y: 10,
		},
		{
			x: 9.9,
			y: 2,
		},
		{
			x: 7.1,
			y: 15,
		},
		{
			x: 1.4,
			y: 0,
		},
		{
			x: 3.6,
			y: 13.7,
		},
		{
			x: 1.9,
			y: 15.2,
		},
		{
			x: 6.4,
			y: 16.5,
		},
		{
			x: 0.9,
			y: 10,
		},
		{
			x: 4.5,
			y: 17.1,
		},
		{
			x: 10.9,
			y: 10,
		},
		{
			x: 0.1,
			y: 14.7,
		},
		{
			x: 9,
			y: 10,
		},
		{
			x: 12.7,
			y: 11.8,
		},
		{
			x: 2.1,
			y: 10,
		},
		{
			x: 2.5,
			y: 10,
		},
		{
			x: 27.1,
			y: 10,
		},
		{
			x: 2.9,
			y: 11.5,
		},
		{
			x: 7.1,
			y: 10.8,
		},
		{
			x: 2.1,
			y: 12,
		},
	];

	const DATA = {
		labels: ["100", "200", "300", "400", "500", "600", "700"],
		datasets: [
			{
				label: "January",
				data: SCATTER_DATA_1,
				pointRadius: 5,
				pointHoverRadius: 6,
				pointBorderColor: "transparent",
				pointHoverBorderColor: "transparent",
				pointBackgroundColor: "rgba(245, 158, 11, 0.3)",
				pointHoverBackgroundColor: "rgba(245, 158, 11, 0.3)",
			},
			{
				label: "February",
				data: SCATTER_DATA_2,
				pointRadius: 5,
				pointHoverRadius: 6,
				pointBorderColor: "transparent",
				pointHoverBorderColor: "transparent",
				pointBackgroundColor: "#f59e0b",
				pointHoverBackgroundColor: "#f59e0b",
			},
		],
	};

	// Chart config
	const CONFIG = {
		type: "scatter",
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
