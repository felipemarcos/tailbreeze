import "chartjs-adapter-moment";
import Chart from "chart.js/auto";
import { cssVar } from "../../utils";
import { COLORS } from "../../constants";
import { chartGradient, generateTimeSeriesData, chartTooltipStyle, CHART_TICKS, reloadChart, CHART_GRID } from "../../vendors/chart";

const CHART_WRAPPER = document.getElementById("chart-returning-rate");
let returningRateChart;

export const returningRate = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	// Helper function for chart gradient fill
	const gradientBg = (context, colorStart, colorEnd) => {
		const chart = context.chart;
		const { ctx, chartArea } = chart;
		return chartArea ? chartGradient(ctx, chartArea, 0.75, colorStart, colorEnd) : null;
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
				backgroundColor: (context) => gradientBg(context, "rgba(92, 107, 192, 0.2)", "rgba(92, 107, 192, 0)"),
				borderColor: COLORS.INDIGO,
				borderWidth: 1.5,
				tension: 0.4,
				pointRadius: 0,
				pointBackgroundColor: COLORS.INDIGO,
				pointBorderColor: COLORS.INDIGO,
				pointHoverBorderColor: COLORS.INDIGO,
				pointHoverBackgroundColor: COLORS.INDIGO,
			},
			{
				label: "Last Month",
				data: LAST_MONTH_DATA,
				fill: true,
				backgroundColor: (context) => gradientBg(context, cssVar("--chart-previous-data-start-fill"), cssVar("--chart-previous-data-end-fill")),
				borderColor: cssVar("--chart-previous-data-border-fill"),
				borderWidth: 1.5,
				tension: 0.4,
				pointRadius: 0,
				pointBackgroundColor: cssVar("--chart-previous-data-border-fill"),
				pointBorderColor: cssVar("--chart-previous-data-border-fill"),
				pointHoverBorderColor: cssVar("--chart-previous-data-border-fill"),
				pointHoverBackgroundColor: cssVar("--chart-previous-data-border-fill"),
			},
		],
	};

	// Chart config
	const CHART_CONFIG = {
		type: "line",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			interaction: {
				mode: "index",
				intersect: false,
			},
			layout: {
				padding: {
					left: -8,
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

	// Chart init
	if (CHART_WRAPPER) {
		returningRateChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}
};

// Reload chart to match dark/light mode when switched
// This function will be used in `settings.js`
export const returningRateChartUpdate = () => {
	const updateChartColor = () => {
		returningRateChart.data.datasets[1].pointBackgroundColor = cssVar("--chart-previous-data-border-fill");
		returningRateChart.data.datasets[1].borderColor = cssVar("--chart-previous-data-border-fill");
		returningRateChart.data.datasets[1].pointHoverBorderColor = cssVar("--chart-previous-data-border-fill");
		returningRateChart.data.datasets[1].pointHoverBackgroundColor = cssVar("--chart-previous-data-border-fill");
	};

	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(returningRateChart, updateChartColor());
		});
	}
};
