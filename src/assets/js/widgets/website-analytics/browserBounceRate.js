import images from "../../../img/browsers/*.svg";

export const browserBounceRate = () => {
	const WRAPPER = document.getElementById("browser-bounce-rate");
	const DATA = [
		{
			browser: "Google Chrome",
			rate: "22443",
			percentage: "81",
			icon: "chrome",
			up: false,
			className: "text-green-500",
		},
		{
			browser: "Apple Safari",
			rate: "18312",
			percentage: "54",
			icon: "safari",
			up: true,
			className: "text-cyan-500",
		},
		{
			browser: "Mozilla Firefox",
			rate: "16234",
			percentage: "43",
			icon: "firefox",
			up: true,
			className: "text-orange-500",
		},
		{
			browser: "Microsoft Edge",
			rate: "12956",
			percentage: "32",
			icon: "edge",
			up: false,
			className: "text-blue-500",
		},
		{
			browser: "Opera",
			rate: "10090",
			percentage: "25",
			icon: "opera",
			up: false,
			className: "text-red-500",
		},
		{
			browser: "Internet Explorer",
			rate: "8354",
			percentage: "18",
			icon: "ie",
			up: false,
			className: "text-cyan-500",
		},
		{
			browser: "Samsung Internet",
			rate: "7856",
			percentage: "15",
			icon: "samsung",
			up: true,
			className: "text-indigo-500",
		},
	];
	let list = "";

	if (WRAPPER) {
		DATA.map((item) => {
			list += `<div class="${item.className} flex flex-wrap items-center">
		                <img class="mr-3" src="${images[item.icon]}" alt="${item.browser}">
		                <div class="flex-1 font-bold text-heading">${item.browser}</div>
		                <div class="font-bold text-heading">${item.rate}</div>
		                <div class="w-16 justify-end flex items-center ${item.up ? "text-green-500" : "text-red-500"}">
		                    ${item.percentage}%
		                    <i class="icon ml-1 font-light">${item.up ? "arrow_circle_up" : "arrow_circle_down"}</i>
		                </div>
                        <div class="h-0.5 my-4 bg-light-200 dark:bg-dark-200 w-full">
                            <div class="h-0.5 bg-current rounded" style="width: ${item.percentage}%"></div>
                        </div>
		            </div>`;

			WRAPPER.innerHTML = list;
		});
	}
};
