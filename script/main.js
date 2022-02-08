let icon1 = document.querySelectorAll(".contact ul li a")[0];
let icon2 = document.querySelectorAll(".contact ul li a")[1];
let icon3 = document.querySelectorAll(".contact ul li a")[2];

function changeNavColor() {
  let y = window.scrollY;
  if (y >= 50) {
    document.querySelector("nav").style.backgroundColor =
      "var(--secondary-color)";
    document.querySelector("nav").style.height = "54px";
    document.querySelector("nav").style.border =
      "var(--secondary-color) 0 0 1px 0";
    document.querySelector(".logo").style.height = "54px";
    document.querySelector(".logo").style.width = "60px";
  } else {
    document.querySelector("nav").style.backgroundColor =
      "var(--primary-color)";
    document.querySelector("nav").style.height = "72px";
    document.querySelector(".logo").style.height = "72px";
    document.querySelector(".logo").style.width = "75px";
  }
}

function typeWriter() {
  const words = ["Designer", "Developer", "Programmer", "Freelancer"];
  let wordIndex = 0,
    charIndex = 0;

  function typing() {
    if (charIndex < words[wordIndex].length) {
      document.querySelector(".type").textContent +=
        words[wordIndex].charAt(charIndex);
      charIndex++;
      document.querySelector(".cursor").style.animation = "none";
      setTimeout(typing, 200);
    } else {
      document.querySelector(".cursor").style.animation =
        "cursorBlink 0.8s infinite";
      setTimeout(erasing, 2000);
    }
  }

  function erasing() {
    if (charIndex > 0) {
      document.querySelector(".type").textContent = words[wordIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      document.querySelector(".cursor").style.animation = "none";
      setTimeout(erasing, 100);
    } else {
      wordIndex++;
      if (wordIndex >= words.length) wordIndex = 0;
      setTimeout(typing, 200);
    }
  }

  typing();
}

typeWriter();

document.addEventListener("scroll", () => {
  changeNavColor();
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("slide");
});
