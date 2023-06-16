import Chart from "chart.js/auto";
import { CHART_TICKS, chartTooltipStyle } from "../../vendors/chart";
import { COLORS } from "../../constants";

export const activeUsers = () => {
	// Chart
	(() => {
		const CHART_WRAPPER = document.getElementById("chart-active-users");

		const CHART_DATA = {
			labels: [...Array(32).keys()],
			datasets: [
				{
					label: "Users",
					data: [
						100, 50, 105, 50, 240, 55, 110, 48, 145, 50, 99, 54, 200, 50, 190, 60, 95, 60, 170, 50, 200, 60, 190, 57, 90, 55, 100, 50, 101, 55, 150,
						53, 120,
					],
					backgroundColor: COLORS.GREEN,
					barThickness: 3,
					borderWidth: 0,
					borderRadius: 10,
				},
			],
		};
		const CHART_CONFIG = {
			type: "bar",
			data: CHART_DATA,
			options: {
				maintainAspectRatio: false,
				layout: {
					padding: {
						left: -17,
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
						ticks: {
							display: false,
						},
					},
					y: {
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
							padding: 20,
							color: COLORS.MUTED,
							...CHART_TICKS,
						},
					},
				},
			},
		};

		if (CHART_WRAPPER) {
			new Chart(CHART_WRAPPER, CHART_CONFIG);
		}
	})();
};
