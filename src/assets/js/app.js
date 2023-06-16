import "../scss/app.scss";

import { notification } from "./layout/header/notification/notification";
import { message } from "./layout/header/message/message";
import { search } from "./layout/header/search";
import { tasks } from "./layout/header/task/task";
import { shortcut } from "./layout/header/shortcut/shortcut";
import { dateTime } from "./layout/header/date";

import { sidebar } from "./layout/sidebar/sidebar";
import { misc } from "./utils";
import { preferences } from "./layout/header/preferences";

import { sessionsByCountry } from "./widgets/website-analytics/sessionsByCountry";
import { activeUsers } from "./widgets/website-analytics/activeUsers";
import { operatingSystemUsage } from "./widgets/website-analytics/operatingSystemUsage";
import { visitsBySource } from "./widgets/website-analytics/visitsBySource";
import { browserBounceRate } from "./widgets/website-analytics/browserBounceRate";
import { averageVisitDuration } from "./widgets/website-analytics/averageVisitDuration";
import { sessionsByChannel } from "./widgets/website-analytics/sessionsByChannel";
import { userAcquisition } from "./widgets/website-analytics/userAcquisition";
import { recentBlogPosts } from "./widgets/website-analytics/recentBlogPosts";
import { userConnections } from "./template/user/connections";
import { userPictures } from "./template/user/pictures";
import { fileManager } from "./template/files/fileManager";
import { contentSidebar } from "./layout/contentSidebar";
import { contacts } from "./template/contacts/contacts";
import { mail } from "./template/mail/mail";
import { messages } from "./template/messages/messages";
import { photos } from "./template/photos/photos";
import { todoList } from "./template/todo/todoLists";
import { calendarPage } from "./template/calendar/calendar";
import { issuesTracker } from "./template/issues/issuesTracker";
import { faq } from "./template/faq/faq";
import { teams } from "./template/teams/teams";
import { searchResults } from "./template/search-results/searchResults";
import { topSales } from "./widgets/e-commerce/top-sales/topSales";
import { sessionsByReferrer } from "./widgets/e-commerce/sessionsByReferrer";
import { mostRecentSales } from "./widgets/e-commerce/mostRecentSales";
import { bestSellingProducts } from "./widgets/e-commerce/bestSellingProducts";
import { returningRate } from "./widgets/e-commerce/returningRate";
import { totalOrders } from "./widgets/e-commerce/totalOrders";
import { activeVisitors } from "./widgets/e-commerce/activeVisitors";
import { salesByRegion } from "./widgets/e-commerce/salesByRegion";
import { icons } from "./template/icons/icons";
import { charts } from "./template/charts/charts";
import { maps } from "./template/maps/maps";
import { pageLoader } from "./layout/pageLoader";

import { dropdown } from "./components/dropdown";
import { modal } from "./components/modal";
import { alert } from "./components/alert";
import { collapse } from "./components/collapse";
import { tab } from "./components/tab";

document.addEventListener("DOMContentLoaded", function () {
	//--------------------------------------------------
	// Layout
	//--------------------------------------------------
	// Header
	notification();
	message();
	search();
	tasks();
	shortcut();
	preferences();
	dateTime();
	pageLoader();

	// Sidebar
	sidebar();
	contentSidebar();

	// Misc
	misc();

	//--------------------------------------------------
	// Dashboard Widgets
	//--------------------------------------------------
	// Website Analytics
	sessionsByCountry();
	operatingSystemUsage();
	activeUsers();
	visitsBySource();
	browserBounceRate();
	averageVisitDuration();
	sessionsByChannel();
	userAcquisition();
	recentBlogPosts();
	salesByRegion();

	// E-commerce
	topSales();
	sessionsByReferrer();
	mostRecentSales();
	bestSellingProducts();
	returningRate();
	totalOrders();
	activeVisitors();

	//--------------------------------------------------
	// Pages
	//--------------------------------------------------
	userConnections();
	userPictures();
	fileManager();
	contacts();
	mail();
	messages();
	photos();
	todoList();
	calendarPage();
	issuesTracker();
	faq();
	teams();
	searchResults();
	icons();
	charts();
	maps();

	//--------------------------------------------------
	// Components
	//--------------------------------------------------
	dropdown();
	modal();
	alert();
	collapse();
	tab();
});

if (module.hot) {
	module.hot.accept();
}
