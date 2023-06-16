import "chartjs-adapter-moment";
import Chart from "chart.js/auto";
import { COLORS } from "../../constants";
import { chartGradient, generateTimeSeriesData, chartTooltipStyle, CHART_TICKS, CHART_GRID } from "../../vendors/chart";

const CHART_WRAPPER = document.getElementById("chart-average-visit-duration");

export const averageVisitDuration = () => {
	// Helper function for chart gradient fill
	const gradientBg = (context, colorStart, colorEnd) => {
		const chart = context.chart;
		const { ctx, chartArea } = chart;
		return chartArea ? chartGradient(ctx, chartArea, 0.5, colorStart, colorEnd) : null;
	};

	// Chart data
	const LAST_MONTH_DATA = generateTimeSeriesData(new Date("12 Dec 2021").getTime(), 20, {
		min: 105,
		max: 113,
	});

	const CURRENT_MONTH_DATA = generateTimeSeriesData(new Date("12 Dec 2021").getTime(), 20, {
		min: 100,
		max: 110,
	});

	const CHART_DATA = {
		datasets: [
			{
				label: "Current Month",
				data: CURRENT_MONTH_DATA,
				fill: true,
				backgroundColor: (context) => gradientBg(context, "rgba(38, 166, 154, 0.15)", "rgba(38, 166, 154, 0)"),
				borderColor: COLORS.TEAL,
				borderWidth: 1.5,
				tension: 0.4,
				pointRadius: 0,
				pointBackgroundColor: COLORS.TEAL,
				pointBorderColor: COLORS.TEAL,
				pointHoverBorderColor: COLORS.TEAL,
				pointHoverBackgroundColor: COLORS.TEAL,
			},
			{
				label: "Last Month",
				data: LAST_MONTH_DATA,
				fill: true,
				backgroundColor: (context) => gradientBg(context, "rgba(182, 216, 245, 0.2)", "rgba(182, 216, 245, 0)"),
				borderColor: "#b6d8f5",
				borderWidth: 1.5,
				tension: 0.4,
				pointRadius: 0,
				pointBackgroundColor: "#b6d8f5",
				pointBorderColor: "#b6d8f5",
				pointHoverBorderColor: "#b6d8f5",
				pointHoverBackgroundColor: "#b6d8f5",
			},
		],
	};

	const CHART_CONFIG = {
		type: "line",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			interaction: {
				mode: "index",
				intersect: false,
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
					type: "time",
					ticks: {
						...CHART_TICKS,
						color: COLORS.MUTED,
						autoSkip: true,
						maxRotation: 0,
						maxTicksLimit: 6,
						labelOffset: 16,
						padding: 8,
					},
				},
				y: {
					border: {
						display: false,
					},
					grid: {
						...CHART_GRID,
					},
					min: 95,
					max: 115,
					ticks: {
						...CHART_TICKS,
						maxTicksLimit: 6,
						padding: 8,
						color: COLORS.MUTED,
						callback: (label) => {
							return label + "s";
						},
					},
				},
			},
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

	if (CHART_WRAPPER) {
		let averageVisitDurationChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};
