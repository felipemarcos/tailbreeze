import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle, getDatesBetweenDates, reloadChart, CHART_GRID } from "../../vendors/chart";
import { cssVar } from "../../utils";
import { COLORS } from "../../constants";

const CHART_WRAPPER = document.getElementById("chart-total-orders");
let totalOrdersChart;

export const totalOrders = () => {
	//---------------------------------------------------------
	// Chart
	//---------------------------------------------------------

	// Chart data
	const CHART_DATA = {
		labels: getDatesBetweenDates(new Date(new Date()), new Date().setDate(new Date().getDate() + 11)),
		datasets: [
			{
				label: "This Month",
				data: [128, 117, 145, 180, 225, 150, 135, 100, 128, 60, 70],
				barThickness: 6,
				borderRadius: 10,
				backgroundColor: "rgba(9, 182, 234, 0.30)",
				borderWidth: 0,
				hoverBackgroundColor: "rgba(9, 182, 234, 0.30)",
			},
			{
				label: "Last Month",
				data: [100, 80, 180, 134, 180, 70, 225, 150, 35, 100, 120],
				barThickness: 6,
				borderRadius: 10,
				backgroundColor: "#09b7ea",
				borderWidth: 0,
				hoverBackgroundColor: "#09b7ea",
			},
		],
	};

	// Chart config
	const CHART_CONFIG = {
		type: "bar",
		data: CHART_DATA,
		options: {
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: -8,
					right: 15,
				},
			},
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
		},
	};

	// Init chart
	if (CHART_WRAPPER) {
		totalOrdersChart = new Chart(CHART_WRAPPER, CHART_CONFIG);
	}

	//---------------------------------------------------------
	// Data
	//---------------------------------------------------------
	const WRAPPER = document.getElementById("total-orders-list");
	const DATA = [
		{
			type: "Completed Orders",
			value: 19543,
			icon: "check_circle",
			up: false,
			percentage: "23.4",
		},
		{
			type: "Added to Cart",
			value: 36090,
			icon: "shopping_cart",
			up: true,
			percentage: "65.3",
		},
		{
			type: "Abandoned Cart",
			value: 9093,
			icon: "shopping_bag",
			up: true,
			percentage: "32.4",
		},
		{
			type: "Reached to Checkout",
			value: 23532,
			icon: "credit_card",
			up: false,
			percentage: "54.9",
		},
		{
			type: "Failed Checkout Payments",
			value: 543,
			icon: "report",
			up: true,
			percentage: "12.1",
		},
	];

	if (WRAPPER) {
		let list = "";
		DATA.forEach((item, i) => {
			let border = i !== DATA.length - 1 && "border-b";
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
		WRAPPER.innerHTML = list;
	}
};

// Reload chart to match dark/light mode when switched
// This function will be used in `settings.js`
export const totalOrdersChartUpdate = () => {
	if (CHART_WRAPPER) {
		setTimeout(() => {
			reloadChart(totalOrdersChart);
		});
	}
};
