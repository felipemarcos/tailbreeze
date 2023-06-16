import images from "../../../img/sales/*.jpg";

export const mostRecentSales = () => {
	let list = "";
	const WRAPPPER = document.getElementById("list-recent-sales");
	const DATA = [
		{
			id: 34532,
			image: "1",
			name: "2020 Apple iPhone SE 128GB",
			date: "2 mins ago",
			price: 350.0,
			up: false,
			change: 23.3,
		},
		{
			id: 43545,
			image: "2",
			name: "Samsung Galaxy Watch 42mm LTE",
			date: "5 mins ago",
			price: 299.99,
			up: true,
			change: 56.2,
		},
		{
			id: 65342,
			image: "3",
			name: "Das Mechanical Keyboard Black",
			date: "15 mins ago",
			price: 150.0,
			up: true,
			change: 54.6,
		},
		{
			id: 34532,
			image: "4",
			name: "Sone CH510 Wireless Headphones ",
			date: "22 mins ago",
			price: 12.01,
			up: true,
			change: 98.2,
		},
		{
			id: 34532,
			image: "5",
			name: "Leica Classic Camera Mirrorless",
			date: "33 mins ago",
			price: 1499.99,
			up: false,
			change: 78.4,
		},
		{
			id: 34532,
			image: "6",
			name: "Sony PS4 Controller",
			date: "An hour ago",
			price: 50.0,
			up: true,
			change: 99.9,
		},
	];

	if (WRAPPPER) {
		DATA.forEach((item, i) => {
			let border = i !== DATA.length - 1 && "border-b";
			list += `<div class="flex items-center border-light-200 dark:border-dark-200 py-3 text-heading ${border}">
                        <img class="w-16 rounded flex-shrink-0 mr-3" src="${images[item.image]}" alt="">
                        <div class="flex-1 overflow-hidden">
                            <div class="text-truncate mb-1">${item.name}</div>
                            <div class="text-muted text-sm">${item.id} - $${item.price} - ${item.date}</div>
                        </div>
                        <div class="flex w-16 items-center justify-end ${item.up ? "text-green-500" : "text-red-500"}">
                            ${item.change}
							<span class="icon font-light ml-1">arrow_circle_${item.up ? "up" : "down"}</span>
						</div>
                    </div>`;
		});
		WRAPPPER.innerHTML = list;
	}
};
