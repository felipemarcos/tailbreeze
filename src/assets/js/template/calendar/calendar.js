import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { DATA, CALENDARS } from "./data";
import { Datepicker } from "vanillajs-datepicker";

export const calendarPage = () => {
	// Calendar
	const CALENDAR_EL = document.getElementById("calendar");
	const CALENDAR_NAVIGATE_EL = document.getElementById("calendar-navigate");

	// Check if the calendar view is changed via any fullcalendar calls.
	// This is required in order to maintain the day of the datepicker when
	// the calendar view is changed via the datepicker.
	let isViewChanged = false;

	// Get the current calendar view date
	let currentViewDate = {
		month: "",
		year: "",
	};

	if (CALENDAR_EL) {
		//-----------------------------------
		// Main Calendar
		//-----------------------------------
		// Initiate main calendar
		const CALENDAR_VIEW = new Calendar(CALENDAR_EL, {
			plugins: [dayGridPlugin, timeGridPlugin],
			initialView: "dayGridMonth",
			dayMaxEventRows: true,
			views: {
				dayGrid: {
					dayMaxEventRows: 4,
				},
			},
			buttonIcons: false,
			headerToolbar: {
				left: "title",
				center: "",
				right: "prev today next dayGridMonth timeGridWeek timeGridDay",
			},
			events: DATA,
			height: "100%",
			datesSet: (info) => {
				// Get the current start date of the view
				let date = info.view.currentStart;

				// Pass the current start date values to the common object,
				// so the datepicker can utilize it
				currentViewDate = {
					month: info.view.currentStart.getMonth() + 1,
					year: info.view.currentStart.getFullYear(),
				};

				// Set the datepicker date to match the calendar date
				isViewChanged && DATEPICKER.setDate(date);

				// Calendar view is changed via the fullcalendar call, so set this to true
				isViewChanged = true;
			},
		});

		// Render the calendar
		CALENDAR_VIEW.render();

		//-----------------------------------
		// Datepicker Calendar
		//-----------------------------------
		// Initiate the date picker
		const DATEPICKER = new Datepicker(CALENDAR_NAVIGATE_EL, {
			maxView: 0,
			todayHighlight: true,
			prevArrow: "west",
			nextArrow: "east",
			changeDate: (date) => {
				alert(date);
			},
		});

		// Change the calendar view via datepicker,
		// when a the date is chnaged
		CALENDAR_NAVIGATE_EL.addEventListener("changeDate", (event) => {
			let date = DATEPICKER.getDate();
			let month = date.getMonth() + 1;
			let year = date.getFullYear();

			// Calendar view is not changed via the fullcalendar call, so set this to false
			isViewChanged = false;

			// Change the calendar view to the datepicker date
			if (!(currentViewDate.month === month && currentViewDate.year === year)) {
				CALENDAR_VIEW.gotoDate(date);
			}
		});
	}

	// List of calendars
	const CALENDERS_LIST_EL = document.getElementById("calendar-list");
	let listCals = "";

	if (CALENDERS_LIST_EL) {
		CALENDARS.forEach((item) => {
			listCals += `<div class="${item.color} mb-3 flex items-center rounded">
							<input type="checkbox" class="${item.color} checkbox mr-3" />
							<div class="flex-1 font-bold text-heading">${item.title}</div>
							<i class="h-2 w-2 rounded-full bg-current"></i>
						</div>`;
		});

		CALENDERS_LIST_EL.innerHTML = listCals;
	}

	// List of events
	const EVENTS_EL = document.getElementById("calendar-events");
	let listEvents = "";

	if (EVENTS_EL) {
		DATA.slice(0, 10).map((item) => {
			let date = new Date(item.start);

			listEvents += `<a href="" data-toggle="body" class="flex items-center p-2 rounded hover:bg-light-200 dark:hover:bg-dark-100/50">
					<div class="w-9 h-9 mr-3 rounded leading-none border border-light-200 dark:border-dark-100 bg-white dark:bg-dark-100 grid place-content-center text-center flex-shrink-0">
						<div class="font-medium text-sm mb-0.5">${date.getDate()}</div>	
						<div class="text-xs text-muted uppercase">${date.toLocaleString("default", { month: "short" })}</div>
					</div>
					<div class="flex-1 truncate">
						<div class="truncate text-heading mb-1">${item.title}</div>
						<div class="text-muted text-xs">${item.start}</div>
					</div>
				</a>`;
		});

		EVENTS_EL.innerHTML = listEvents;
	}
};
