export const bestSellingProducts = () => {
	let list = "";
	const WRAPPPER = document.getElementById("list-best-selling-products");
	const DATA = [
		{
			item: "Sony CH510 Wireless Headphones",
			sales: 564,
			color: "bg-teal-500 dark:bg-teal-700",
			up: true,
			percentage: 83,
			change: 14.3,
		},
		{
			item: "Logitech C922 Pro Stream Webcam",
			sales: 456,
			color: "bg-green-500 dark:bg-green-700",
			up: true,
			percentage: 71,
			change: 54.5,
		},
		{
			item: "SanDisk SDSSDE60-1T00-G25 1TB",
			sales: 400,
			color: "bg-cyan-500 dark:bg-cyan-700",
			up: false,
			percentage: 58,
			change: 0.9,
		},
		{
			item: "HP X6W31AA 200 Wireless Mouse",
			sales: 399,
			color: "bg-lime-500 dark:bg-lime-700",
			up: false,
			percentage: 49,
			change: 65.7,
		},
		{
			item: "Samsung Galaxy S10 Lite Dual SIM 128GB",
			sales: 395,
			color: "bg-amber-500 dark:bg-amber-700",
			up: true,
			percentage: 32,
			change: 6.8,
		},
	];

	if (WRAPPPER) {
		DATA.forEach((item, i) => {
			list += `<div class="flex flex-wrap items-center text-heading">
                        <div class="w-5 h-5 rounded-full mr-2 grid place-content-center text-sm font-bold text-white ${item.color}">${i + 1}</div>
                        <div class="flex-1">${item.item}</div>
                        <div class="font-bold">${item.sales}</div>
                        <div class="flex w-16 items-center justify-end ${item.up ? "text-green-500" : "text-red-500"}">
                            ${item.change}
							<span class="icon font-light ml-1">arrow_circle_${item.up ? "up" : "down"}</span>
						</div>
                        <div class="h-0.5 my-4 bg-light-200 dark:bg-dark-200 w-full">
                            <div class="h-0.5 rounded ${item.color}" style="width: ${item.percentage}%"></div>
                        </div>
                    </div>`;
		});
		WRAPPPER.innerHTML = list;
	}
};
