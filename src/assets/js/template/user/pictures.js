import galleryImages from "../../../img/gallery/thumbs/*.jpg";

export const userPictures = () => {
	let list = "";
	const WRAPPER = document.getElementById("user-pictures");
	const DATA = [
		{
			name: "1",
			picture: "1",
		},
		{
			name: "2",
			picture: "2",
		},
		{
			name: "3",
			picture: "3",
		},
		{
			name: "4",
			picture: "4",
			mutual: "22",
		},
		{
			name: "5",
			picture: "5",
		},
		{
			name: "6",
			picture: "6",
		},
		{
			name: "7",
			picture: "7",
		},
		{
			name: "8",
			picture: "8",
		},
		{
			name: "9",
			picture: "9",
		},
		{
			name: "10",
			picture: "10",
		},
		{
			name: "11",
			picture: "11",
		},
		{
			name: "12",
			picture: "12",
		},
		{
			name: "13",
			picture: "13",
		},
		{
			name: "14",
			picture: "14",
		},
		{
			name: "15",
			picture: "15",
		},
		{
			name: "16",
			picture: "16",
		},
		{
			name: "17",
			picture: "17",
		},
		{
			name: "18",
			picture: "18",
		},
		{
			name: "19",
			picture: "19",
		},
		{
			name: "20",
			picture: "20",
		},
		{
			name: "21",
			picture: "21",
		},
		{
			name: "22",
			picture: "22",
		},
		{
			name: "23",
			picture: "23",
		},
		{
			name: "24",
			picture: "24",
		},
	];

	if (WRAPPER) {
		DATA.forEach((item) => {
			list += `<a href="" class="block">
                        <img class="rounded" src="${galleryImages[item.picture]}" alt="${galleryImages[item.picture]}">
                    </a>`;
		});

		WRAPPER.innerHTML = list;
	}
};
