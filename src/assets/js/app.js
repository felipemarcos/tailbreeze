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
import { contentSidebar } from "./layout/contentSidebar";
import { issuesTracker } from "./template/issues/issuesTracker";
import { teams } from "./template/teams/teams";
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

	//--------------------------------------------------
	// Pages
	//--------------------------------------------------
	userConnections();
	userPictures();
	issuesTracker();
	teams();
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
