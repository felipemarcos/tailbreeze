import EmblaCarousel from "embla-carousel";

export const emblaCarousel = () => {
	const CAROUSEL_ELS = document.querySelectorAll(".carousel");

	const DOTS = (emblaApi, dotsNode) => {
		const addDots = () => {
			dotsNode.innerHTML = "";
			emblaApi.scrollSnapList().forEach((scrollSnap, index) => {
				// Create dot
				let dot = document.createElement("button");
				dot.classList.add("carousel-dot");
				dot.classList.toggle("active", index === emblaApi.selectedScrollSnap());
				dot.setAttribute("type", "button");
				dot.onclick = () => {
					emblaApi.scrollTo(index);
				};

				// Append dots
				dotsNode.appendChild(dot);
			});
		};

		// Set active dot
		const setActiveDot = () => {
			const selected = emblaApi.selectedScrollSnap();
			const dotNodes = dotsNode.querySelectorAll(".carousel-dot");
			dotNodes.forEach((dotNode) => {
				dotNode.classList.remove("active");
			});
			dotNodes[selected].classList.add("active");
		};

		emblaApi //
			.on("init", addDots) //
			.on("reInit", addDots) //
			.on("select", setActiveDot) //
			.on("reInit", setActiveDot); //

		return () => {
			dotsNode.innerHTML = "";
		};
	};

	CAROUSEL_ELS.forEach((carouselEl) => {
		// Initialize Embla carousel
		const carousel = new EmblaCarousel(carouselEl, {
			loop: true,
		});

		// Add next/prev buttons
		const prevButton = carouselEl.querySelector(".carousel-prev");
		const nextButton = carouselEl.querySelector(".carousel-next");

		if (prevButton && nextButton) {
			prevButton.addEventListener("click", carousel.scrollPrev);
			nextButton.addEventListener("click", carousel.scrollNext);
		}

		// Add dots
		const DOTS_EL = carouselEl.querySelector(".carousel-dots");

		if (DOTS_EL) {
			DOTS(carousel, DOTS_EL);
		}
	});
};
