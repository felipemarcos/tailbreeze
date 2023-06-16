import "chartjs-adapter-moment";
import Chart from "chart.js/auto";
import { cssVar } from "../../../utils";
import { COLORS } from "../../../constants";
import { chartGradient, chartTooltipStyle, CHART_GRID, CHART_TICKS, reloadChart } from "../../../vendors/chart";
import { TOP_SALES_DATA, TOP_SALES_LIST } from "./data";

const CHART_WRAPPER = document.getElementById("chart-top-sales");
let topSalesChart;

export const topSales = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	// Helper function for chart gradient fill
	const gradientBg = (context, colorStart, colorEnd) => {
		const chart = context.chart;
		const { ctx, chartArea } = chart;
		return chartArea ? chartGradient(ctx, chartArea, 0.5, colorStart, colorEnd) : null;
	};

	// Chart data
	const CHART_DATA = {
		datasets: [
			{
				label: "Current Month",
				data: TOP_SALES_DATA,
				fill: true,
				backgroundColor: (context) => gradientBg(context, "rgba(255, 202, 40, 0.25)", "rgba(255, 202, 40, 0)"),
				borderColor: COLORS.AMBER,
				borderWidth: 1.5,
				tension: 0.4,
				pointRadius: 0,
				pointBackgroundColor: COLORS.AMBER,
				pointBorderColor: COLORS.AMBER,
				pointHoverBorderColor: COLORS.AMBER,
				pointHoverBackgroundColor: COLORS.AMBER,
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
					min: 40,
					max: 240,
					ticks: {
						...CHART_TICKS,
						stepSize: 40,
						maxTicksLimit: 8,
						padding: 10,
						color: COLORS.MUTED,
						callback: (label) => {
							return label + "K";
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

	// Init chart
	if (CHART_WRAPPER) {
		topSalesChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}

	//---------------------------------------------------------
	// Data
	//---------------------------------------------------------
	const TOP_SALES_LIST_WRAPPER = document.getElementById("top-sales-list");

	if (TOP_SALES_LIST_WRAPPER) {
		let list = "";
		TOP_SALES_LIST.forEach((item, i) => {
			let border = i !== TOP_SALES_LIST.length - 1 && "border-b";
			list += `<div class="flex items-center border-light-200 dark:border-dark-200 py-3 text-heading ${border}">
						<i class="icon text-2xl font-light mr-2">${item.icon}</i>
						<div class="flex-1">${item.type}</div>
				
						<div class="font-bold">$${item.value}</div>
				
						<div class="flex w-16 items-center justify-end ${item.up ? "text-green-500" : "text-red-500"}">
						${item.percentage}
							<span class="icon ml-1 font-light">arrow_circle_${item.up ? "up" : "down"}</span>
						</div>
					</div>`;
		});
		TOP_SALES_LIST_WRAPPER.innerHTML = list;
	}
};

// Reload chart to match dark/light mode when switched
// This function will be used in `preferences.js`
export const topSalesChartUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(topSalesChart);
		});
	}
};
