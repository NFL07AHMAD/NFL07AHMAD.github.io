const icon1 = document.querySelectorAll('.contact ul li a')[0];
const icon2 = document.querySelectorAll('.contact ul li a')[1];
const icon3 = document.querySelectorAll('.contact ul li a')[2];
const descText = document.querySelector('.header .col:nth-child(1) > .desc > .scroll')

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
// function typeWriter() {
//   const words = ['Designer', 'Programmer'];
//   let wordIndex = 0,
//     charIndex = 0;

//   function typing() {
//     if (charIndex < words[wordIndex].length) {
//       document.querySelector('.type').textContent +=
//         words[wordIndex].charAt(charIndex);
//       charIndex++;
//       document.querySelector('.cursor').style.animation = 'none';
//       setTimeout(typing, 200);
//     } else {
//       document.querySelector('.cursor').style.animation =
//         'cursorBlink 0.8s infinite';
//       setTimeout(erasing, 2000);
//     }
//   }

//   function erasing() {
//     if (charIndex > 0) {
//       document.querySelector('.type').textContent = words[wordIndex].substring(
//         0,
//         charIndex - 1
//       );
//       charIndex--;
//       document.querySelector('.cursor').style.animation = 'none';
//       setTimeout(erasing, 100);
//     } else {
//       wordIndex++;
//       if (wordIndex >= words.length) wordIndex = 0;
//       setTimeout(typing, 200);
//     }
//   }

//   typing();
// }

// typeWriter();

function autoScroll() {
  setInterval(() => {
    if (descText.scrollLeft < 214) {
      descText.scrollBy(5,0)
    } else {
      descText.scrollBy(-5,0)
    }
  }, 3000);
}

autoScroll()

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
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// To check the scroll position on page load
reveal();
