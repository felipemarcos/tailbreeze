export const sessionsByChannel = () => {
	let list = "";
	const WRAPPER = document.getElementById("sessions-channel");
	const DATA = [
		{
			type: "Organic Search",
			sessions: "12,762",
			percentage: 84,
			className: "text-cyan-400 dark:text-cyan-600",
		},
		{
			type: "Social Media",
			sessions: "4,456",
			percentage: 75,
			className: "text-purple-400 dark:text-purple-600",
		},
		{
			type: "Direct Visits",
			sessions: "10,456",
			percentage: 90,
			className: "text-blue-400 dark:text-blue-600",
		},
		{
			type: "Email Campaigns",
			sessions: "856",
			percentage: 54,
			className: "text-green-400 dark:text-green-600",
		},
		{
			type: "Ad Campaigns",
			sessions: "7,853",
			percentage: 69,
			className: "text-amber-400 dark:text-amber-600",
		},
		{
			type: "Referrals",
			sessions: "493",
			percentage: 14,
			className: "text-red-400 dark:text-red-600",
		},
	];

	if (WRAPPER) {
		DATA.forEach((item) => {
			list += `<div class="border border-light-200 dark:border-dark-200 flex-1 py-3 rounded-md">
                  <svg width="100" height="100" viewBox="0 0 42 42" class="${item.className} block mx-auto">
                      <g>
                          <circle class="stroke-current fill-transparent opacity-25" cx="21" cy="21" r="15.91549430918954" stroke-width="1"></circle>
                          <circle class="stroke-current fill-transparent rotate-[270deg] origin-center" cx="21" cy="21" r="15.91549430918954" stroke-width="1.5" stroke-dashoffset="0"
                              stroke-linecap="round" stroke-dasharray="${item.percentage},100"></circle>
                          <text class="fill-current" x="14" y="24" font-size="10">${item.percentage}%</text>
                      </g>
                  </svg>
                  <div>${item.type}</div>
                  <div class="font-bold text-heading">${item.sessions}</div>
              </div>`;
		});

		WRAPPER.innerHTML = list;
	}
};
