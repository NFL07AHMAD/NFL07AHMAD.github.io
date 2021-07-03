const header = document.querySelector(".header"),
	nav = document.querySelector("nav"),
	logo = document.querySelector(".logo")[0],
	navLinks = document.querySelector("nav ul"),
	hamburgerMenu = document.querySelector(".slide");

function changeNavColor() {
	let y = window.scrollY;
	if (y >= 50) {
		document.querySelector("nav").style.backgroundColor =
			"var(--secondary-color)";
		document.querySelector("nav").style.height = "72px";
		document.querySelector(".logo").style.height = "72px";
		document.querySelector(".logo").style.width = "75px";
	} else {
		document.querySelector("nav").style.backgroundColor =
			"var(--primary-color)";
		document.querySelector("nav").style.height = "54px";
		document.querySelector(".logo").style.height = "54px";
		document.querySelector(".logo").style.width = "60px";
	}
}

document.querySelector(".menu-toggle").addEventListener("click", () => {
	document.querySelector("nav ul").classList.toggle("slide");
});

document.addEventListener("scroll", () => {
	changeNavColor();
});
