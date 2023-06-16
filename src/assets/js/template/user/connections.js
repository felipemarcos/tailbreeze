import connectionImages from "../../../img/contacts/*.jpg";

export const userConnections = () => {
	const WRAPPER = document.getElementById("user-connections");
	let list = "";
	const DATA = [
		{
			name: "Essie Carlson",
			avatar: "1",
			mutual: "33",
		},
		{
			name: "Dominic Grant",
			avatar: "2",
			mutual: "10",
		},
		{
			name: "Stephen McBride",
			avatar: "3",
			mutual: "45",
		},
		{
			name: "Josephine Murphy",
			avatar: "4",
			mutual: "22",
		},
		{
			name: "Virginia Crawford",
			avatar: "5",
			mutual: "01",
		},
		{
			name: "Chase Hines",
			avatar: "6",
			mutual: "12",
		},
		{
			name: "Lula Kim",
			avatar: "7",
			mutual: "76",
		},
		{
			name: "Curtis Ryan",
			avatar: "8",
			mutual: "89",
		},
		{
			name: "Alma Sims",
			avatar: "9",
			mutual: "65",
		},
		{
			name: "Jesus Scott",
			avatar: "10",
			mutual: "34",
		},
		{
			name: "Cynthia Cain",
			avatar: "11",
			mutual: "76",
		},
		{
			name: "Melvin Townsend",
			avatar: "12",
			mutual: "29",
		},
	];

	if (WRAPPER) {
		DATA.forEach((item) => {
			list += `<div class="rounded-md border border-light-200 dark:border-dark-200 flex items-center p-2">
                        <a href="" class="flex-shrink-0 mr-3">
                            <img class="w-12 rounded" src="${connectionImages[item.avatar]}" alt="">
                        </a>
                        <div class="flex-1">
                            <a href="" class="font-bold text-heading hover:underline">${item.name}</a>
                            <div class="text-muted text-md">${item.mutual} Mutual Connections</div>
                        </div>
                        <a class="icon btn hover:bg-light-100 dark:hover:bg-dark-200" href="">more_vert</a>
                    </div>`;
		});

		WRAPPER.innerHTML = list;
	}
};
