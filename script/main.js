let icon1 = document.querySelectorAll('.contact ul li a')[0];
let icon2 = document.querySelectorAll('.contact ul li a')[1];
let icon3 = document.querySelectorAll('.contact ul li a')[2];

//Function for changing navbar style when scrolling
function changeNavStyle() {
  let y = window.scrollY;
  if (y >= 50) {
    document.querySelector('nav').style.height = '80px';
    document.querySelector('nav .logo svg').style.width = '42px';
    // document.querySelector('.logo svg')[0].style.height = '60px';
  } else {
    document.querySelector('nav').style.height = '100px';
    document.querySelector('nav .logo svg').style.width = '50px';
    // document.querySelector('.logo svg')[0].style.height = '72px';
  }
}

//Function for writing animation in Heading
function typeWriter() {
  const words = ['Designer', 'Developer', 'Programmer', 'Freelancer'];
  let wordIndex = 0,
    charIndex = 0;

  function typing() {
    if (charIndex < words[wordIndex].length) {
      document.querySelector('.type').textContent +=
        words[wordIndex].charAt(charIndex);
      charIndex++;
      document.querySelector('.cursor').style.animation = 'none';
      setTimeout(typing, 200);
    } else {
      document.querySelector('.cursor').style.animation =
        'cursorBlink 0.8s infinite';
      setTimeout(erasing, 2000);
    }
  }

  function erasing() {
    if (charIndex > 0) {
      document.querySelector('.type').textContent = words[wordIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      document.querySelector('.cursor').style.animation = 'none';
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

document.addEventListener('scroll', () => {
  changeNavStyle();
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('slide');
});

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// To check the scroll position on page load
reveal();
