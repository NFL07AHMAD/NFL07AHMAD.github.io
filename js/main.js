window.onload = () => {
	const typedTextSpan = document.querySelector(".typed-text"),
		textArray = ["student", "developer", "designer"];

	let textArrayIndex = 0,
		charIndex = 0,
		wScroll = 0;

	function type() {
		if (charIndex < textArray[textArrayIndex].length) {
			typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
			charIndex++;
			setTimeout(type, 200);
		} else {
			setTimeout(typeErase, 1000);
		}
	}

	function typeErase() {
		if (charIndex > 0) {
			typedTextSpan.textContent = textArray[textArrayIndex].substring(
				0,
				charIndex - 1
			);

			charIndex--;
			setTimeout(typeErase, 100);
		} else {
			textArrayIndex++;
			if (textArrayIndex >= textArray.length) {
				textArrayIndex = 0;
			}
			setTimeout(type, 500);
		}
	}

	window.addEventListener("scroll", () => {
		wScroll = window.scrollY;
		document.querySelector(".intro").style.transform = `translate(0px, ${
			wScroll / 1.5
		}px)`;
	});
	console.log([wScroll, document.querySelectorAll(".intro p")]);

	type();
};
