import images from "../../../img/gallery/thumbs/*.jpg";

export const recentBlogPosts = () => {
	let list = "";
	const WRAPPPER = document.getElementById("recent-blog-posts");
	const DATA = [
		{
			title: "Sunt ullamco cillum exercitation voluptate",
			detail: "Minim exercitation exercitation esse sunt occaecat ipsum consequat ipsum nostrud enim",
			img: "1",
			views: "3242",
			likes: "153",
			comments: "09",
		},
		{
			title: "Fugiat enim exercitation animonsectet consectetur",
			detail: "Laboris nostrud voluptate esse et aliqua consequat ipsum incididunt aute nulla dolore minim deserunt elit",
			img: "2",
			views: "5435",
			likes: "103",
			comments: "12",
		},
		{
			title: "Officia exercitation incididunt iminim consectetur",
			detail: "Dolor ipsum nisi nisieain nonolore dolore aliqua exercitation aliquip sunt",
			img: "3",
			views: "894",
			likes: "90",
			comments: "02",
		},
		{
			title: "Mollit animamet irure laboris quisenim proident",
			detail: "Deserunt nulla aliqua exercitation dolornon quis minimsit culpa ipsum doqui minim officia ipsum proident",
			img: "4",
			views: "8906",
			likes: "675",
			comments: "33",
		},
		{
			title: "Ullamco laborum laborum do tempor sintdolore",
			detail: "Ea do velit consequat duisuis occaecat ipsumea laborum occaecat incididunt occaecat cupiDATAt",
			img: "5",
			views: "4323",
			likes: "569",
			comments: "45",
		},
	];

	if (WRAPPPER) {
		DATA.forEach((item) => {
			list += `<a href="" class="rounded flex items-start hover:bg-light-100 dark:hover:bg-dark-200 p-3">
                        <img class="w-10 rounded flex-shrink-0 mr-3" src="${images[item.img]}" alt="">
                        <div class="flex-1 overflow-hidden">
                            <div class="font-bold text-truncate">${item.title}</div>
                            <div class="text-muted text-truncate">${item.detail}</div>
                        </div>
                    </a>`;
		});
		WRAPPPER.innerHTML = list;
	}
};
