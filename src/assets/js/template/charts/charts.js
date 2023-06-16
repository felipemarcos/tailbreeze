import { area } from "./area";
import { bar } from "./bar";
import { curvedLine } from "./curvedLine";
import { horizontalBar } from "./horizontalBar";
import { line } from "./line";
import { pie, pieChartUpdate } from "./pie";
import { doughnut, doughnutChartUpdate } from "./doughnut";
import { scatter } from "./scatter";
import { stackedBar } from "./stackedBar";
import { stackedHorizontalBar } from "./stackedHorizontalBar";

export const charts = () => {
	// Bar chart
	bar();

	// Horizontal bar chart
	horizontalBar();

	// Stcked bar chart
	stackedBar();

	// Stacked horizontal bar chart
	stackedHorizontalBar();

	// Line chart
	line();

	// Curved line chart
	curvedLine();

	// Area chart
	area();

	// Scatter chart
	scatter();

	// Pie chart
	pie();

	// Daughnut chart
	doughnut();
};

// Update charts when dark/light mode is switched
export const chartsUpdate = () => {
	// Pie chart
	pieChartUpdate();

	// Doughnut chart
	doughnutChartUpdate();
};
