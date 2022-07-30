// 01 Full Hamburger & Navbar Toggle Function
const hambLine1 = document.getElementById("hambline1");
const hambLine2 = document.getElementById("hambline2");
const navBar = document.getElementById("navbar");
const navList = document.getElementById("navlist");
const navLink = document.querySelectorAll("#navbar a");
const fillWhite = document.querySelectorAll(".fillwhite");
const bgWhite = document.querySelectorAll(".bgwhite");

function hamMenu() {
  hambLine1.classList.toggle("hamb_line1_active");
  hambLine2.classList.toggle("hamb_line2_active");
  navBar.classList.toggle("nav_active");
  navList.classList.toggle("nav_bounce");
  // Logo & links Color change when clicking on hamburger Menu
  fillWhite.forEach((fw) => {
    fw.classList.toggle('fill_white');
  });
  bgWhite.forEach((bw) => {
    bw.classList.toggle('bg_white');
  })
}

// Navbar Closing Function when clicking on Navlinks
navLink.forEach((list) => {
  list.addEventListener("click", () => {
    hamMenu();
  });
});



// 02 Scroll Fade Effect Animation 
const workItems = document.querySelectorAll(".fade");
const cardItems = document.querySelectorAll(".passion");
const progressItems = document.querySelectorAll(".progressbar");

window.addEventListener("scroll", function () {
  // All Works Items Fade Animation function
  for (let i = 0; i < workItems.length; i++) {
    let elem = workItems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
    if (distInView < 0) {
      elem.classList.add("fade_in");
    }
  }
  // Passion For Items Fade Animation function
  for (let i = 0; i < cardItems.length; i++) {
    let elem = cardItems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 120;
    if (distInView < 0) {
      elem.classList.add("passion_fade");
    }
  }

  // Skill Set Items Fade Animation function
  for (let i = 0; i < progressItems.length; i++) {
    let elem = progressItems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 10;
    if (distInView < 0) {
      const value = elem.dataset.progress;
      elem.style.width = `${value}%`;
    }
  }

})




// Navigation Color Change
// const hero = document.getElementById('hero');
// const sectionOneOptions = {
//   rootMargin: "-50px 0px 0px 0px "
// };
// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       const navigation_black = document.querySelectorAll(".li_box p");
//       for (let i = 0; i < navigation_black.length; i++) {
//         navigation_black[i].style.color = "black";
//       }
//     } else {
//       const navigation_black = document.querySelectorAll(".li_box p");
//       for (let i = 0; i < navigation_black.length; i++) {
//         navigation_black[i].style.color = "white";
//       }
//     }
//   });
// },
//   sectionOneOptions)
// sectionOneObserver.observe(hero);
// const hero = document.getElementById('hero');
// const sectionOneOptions = {
//   rootMargin: "-50px 0px 0px 0px "
// };
// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       const navigation_black = document.querySelectorAll(".li_box p");
//       for (let i = 0; i < navigation_black.length; i++) {
//         navigation_black[i].style.color = "black";
//       }
//     } else {
//       const navigation_black = document.querySelectorAll(".li_box p");
//       for (let i = 0; i < navigation_black.length; i++) {
//         navigation_black[i].style.color = "white";
//       }
//     }
//   });
// },
//   sectionOneOptions)
// sectionOneObserver.observe(hero);