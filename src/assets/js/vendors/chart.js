import { COLORS, FONT, TOOLTIP } from "../constants";
import { cssVar } from "../utils";

//---------------------------------------------------
// Chart.js Helpers
//---------------------------------------------------
// Gradient background
export const chartGradient = (ctx, chartArea, gradientHeight, colorStart, colorEnd) => {
	let width, height, gradient;
	const chartWidth = chartArea.right - chartArea.left;
	const chartHeight = chartArea.bottom - chartArea.top;
	if (gradient === null || width !== chartWidth || height !== chartHeight) {
		width = chartWidth;
		height = chartHeight;
		gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
		gradient.addColorStop(0, colorEnd);
		gradient.addColorStop(gradientHeight, colorStart);
	}

	return gradient;
};

// Common tooltip style
export const chartTooltipStyle = {
	titleFont: {
		family: FONT.FAMILY_SANS_SERIF,
		size: FONT.SIZE_SM,
	},
	titleColor: cssVar("--tooltip-color"),
	bodyColor: cssVar("--tooltip-color"),
	bodyFont: {
		family: FONT.FAMILY_SANS_SERIF,
		size: FONT.SIZE_SM,
	},
	titleMarginBottom: 3,
	backgroundColor: cssVar("--tooltip-bg"),
	padding: 10,
	cornerRadius: 3,
	multiKeyBackground: COLORS.TRANSPARENT,
	displayColors: false,
};

// Common tick style
export const CHART_TICKS = {
	font: {
		family: FONT.FAMILY_SANS_SERIF,
		size: FONT.SIZE_XS,
	},
};

// Common legend style
export const CHART_LEGEND_LABEL = {
	color: "#6a8ca3",
	pointStyle: "circle",
	boxWidth: 7,
	boxHeight: 7,
	padding: 20,
	font: {
		family: FONT.FAMILY_SANS_SERIF,
		size: FONT.SIZE_SM,
	},
};

// Common grid style
export const CHART_GRID = {
	drawBorder: false,
	drawTicks: false,
	color: "rgba(83, 152, 199, 0.1)",
};

// Reload Chart.js for dark/light mode themes
export const reloadChart = (chart, callback) => {
	callback;

	chart.update();
};

// Generate time series data
export const generateTimeSeriesData = (baseval, count, yrange) => {
	let i = 0;
	const series = [];
	while (i < count) {
		const x = baseval;
		const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
		series.push({ x, y });
		baseval += 86400000;
		i++;
	}
	return series;
};

// Generate data between two dates
export const getDatesBetweenDates = (startDate, endDate) => {
	let dates = [];
	const date = new Date(startDate);
	while (date < endDate) {
		dates = [...dates, new Date(date)];
		date.setDate(date.getDate() + 1);
	}
	return dates;
};
