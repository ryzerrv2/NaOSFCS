const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const closeBtnNav = document.querySelector(".close-btn");
const contactMenu = document.getElementById("contact-menu");
const socialContainer = document.querySelector(".social");
const socials = document.querySelectorAll(".social > span");
const btnSocial = document.getElementById("social-btn");
const showSocial = document.querySelector("#showSocial");

// Add Event Listeners
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
	showSocial.classList.add("hidden");
});

closeBtnNav.addEventListener("click", () => {
	if (menu.classList.contains("hidden")) {
		menu.classList.remove("hidden");
	} else {
		menu.classList.add("hidden");
	}
});

btnSocial.addEventListener("click", () => {
	showSocial.classList.remove("hidden");

	if (showSocial.classList.contains("animate__fadeIn")) {
		showSocial.classList.add("animate__fadeOut");
		showSocial.classList.remove("animate__fadeIn");
	} else {
		showSocial.classList.remove("animate__fadeOut");
		showSocial.classList.add("animate__fadeIn");
	}
});

contactMenu.addEventListener("click", () => {
	document.querySelector(".rotate-90").classList.toggle("active");

	socials.forEach((el) => {
		if (el.classList.contains("animate__backInLeft")) {
			el.classList.add("animate__backOutLeft");
			setTimeout(() => {
				el.classList.remove("animate__backInLeft");
			}, 600);
		} else {
			el.classList.remove("animate__backOutLeft");
			el.classList.add("animate__backInLeft");
		}
	});
});
