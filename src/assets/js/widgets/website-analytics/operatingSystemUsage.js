import Chart from "chart.js/auto";
import { COLORS, FONT } from "../../constants";
import { chartGradient } from "../../vendors/chart";
import images from "../../../img/os/*.svg";

export const operatingSystemUsage = () => {
	// Chart Data
	const WRAPPER = document.getElementById("os-usage-data");
	const CHART_LABELS = Array.from({ length: 25 }, (v, i) => i);
	let list = "";
	const DATA = [
		{
			id: "Windows",
			className: "text-blue-400",
			color: COLORS.BLUE,
			fillStart: "rgba(30,145,255,0.15)",
			fillEnd: "rgba(30,145,255,0)",
			sessions: 88643,
			percentage: 42.78,
		},
		{
			id: "Linux",
			className: "text-orange-400",
			color: COLORS.ORANGE,
			fillStart: "rgba(255,169,80,0.15)",
			fillEnd: "rgba(255,169,80,0)",
			sessions: 29812,
			percentage: 32.7,
		},
		{
			id: "MacOS",
			className: "text-green-500",
			color: COLORS.GREEN,
			fillStart: "rgba(67,210,113,0.15)",
			fillEnd: "rgba(67,210,113,0)",
			sessions: 23215,
			percentage: 22.6,
		},
		{
			id: "Android",
			className: "text-red",
			color: COLORS.RED,
			fillStart: "rgba(253,113,113,0.15)",
			fillEnd: "rgba(253,113,113,0)",
			sessions: 12654,
			percentage: 11.4,
		},
		{
			id: "iOS",
			className: "text-purple-400",
			color: COLORS.PURPLE,
			fillStart: "rgba(226,108,245,0.15)",
			fillEnd: "rgba(226,108,245,0)",
			sessions: 6583,
			percentage: 6.2,
		},
		{
			id: "Others",
			className: "text-cyan-500",
			color: COLORS.CYAN,
			fillStart: "rgba(38,198,218,0.15)",
			fillEnd: "rgba(38,198,218,0)",
			sessions: 2375,
			percentage: 2.8,
		},
	];

	if (WRAPPER) {
		// Loop through OS data and create charts and generate data
		DATA.forEach((item) => {
			// Chart configuration
			let chartConfig = {
				type: "line",
				data: {
					labels: CHART_LABELS,
					datasets: [
						{
							label: item.name,
							data: Array.from({ length: 25 }, () => Math.floor(Math.random() * 40 + 3)),
							fill: true,
							backgroundColor: (context) => {
								const chart = context.chart;
								const { ctx, chartArea } = chart;
								return chartArea ? chartGradient(ctx, chartArea, 0.6, item.fillStart, item.fillEnd) : null;
							},
							borderColor: item.color,
							borderWidth: 1,
							tension: 0.4,
							pointRadius: 0,
						},
					],
				},
				options: {
					maintainAspectRatio: false,
					interaction: {
						mode: "index",
						intersect: false,
					},
					layout: {
						padding: {
							left: 0,
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
							titleFont: {
								family: FONT.FAMILY_SANS_SERIF,
								size: 10,
							},
							titleColor: COLORS.WHITE,
							bodyColor: COLORS.WHITE,
							bodyFont: {
								family: FONT.FAMILY_SANS_SERIF,
								size: 10,
							},
							titleMarginBottom: 3,
							backgroundColor: item.color,
							padding: 8,
							cornerRadius: 3,
							multiKeyBackground: COLORS.TRANSPARENT,
							displayColors: false,
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
								display: false,
							},
						},
					},
				},
			};

			// Create and append data
			// prettier-ignore
			list += `<div class="border border-light-200 dark:border-dark-200 py-3 rounded-md overflow-hidden">
						<div class="px-3">
							<div class="flex items-center mb-2 h-8 -mt-2">
								<div class="font-bold text-lg">${item.id}</div>
								<img class="ml-auto" src="${images[item.id.toLowerCase()]}" alt="${item.id}">
							</div>
							<div class="text-muted">Sessions</div>
							<div class="${item.className} text-xl font-bold mb-2">${item.sessions} (${item.percentage}%)</div>
						</div>
						<div class="chart">
							<div class="h-12">
								<canvas id="chart-os-${item.id.toLowerCase()}"></canvas>
							</div>
						</div>
                  	</div>`;
			WRAPPER.innerHTML = list;

			// Create charts
			setTimeout(() => {
				new Chart(document.getElementById(`chart-os-${item.id.toLowerCase()}`), chartConfig);
			});
		});
	}
};
