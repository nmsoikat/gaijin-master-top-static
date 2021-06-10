window.onload = () => {
  // ------------- Responsive Menu Toggler
  const menuToggler = document.querySelector(".menu-toggler");
  const mainMenu = document.querySelector(".main-menu");

  menuToggler.addEventListener("click", function () {
    mainMenu.classList.toggle("res-menu");
  });

  // ------------ Nav Sticky
  const nav = document.querySelector(".main-menu-area");
  const navTop = nav.offsetTop;
  //scroll to top
  const btnTop = document.querySelector(".up");

  function stickyNavigation() {
    //when responsive nav active then, sticky
    if (window.innerWidth <= 991) {
      if (window.scrollY >= navTop) {
        document.body.classList.add("fixed-nav");
        document.body.style.paddingTop = nav.offsetHeight + "px";
      } else {
        document.body.classList.remove("fixed-nav");
        document.body.style.paddingTop = 0;
      }
    }

    // scroll to top button
    if (window.innerHeight <= window.scrollY) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  }

  window.addEventListener("scroll", stickyNavigation);
  stickyNavigation();
};

// element when window is scrolling
// const nav = document.querySelector(".main-menu-area");
// console.log("offsetTop", nav.offsetTop); //how much scroll need to reach the element
// console.log("offsetHeight", nav.offsetHeight); // height of element
// Scroll able element
// const textArea = document.getElementById("desc");
// textA.addEventListener("scroll", () => {
//   console.log("scrollTopIntoElement", textArea.scrollTop); //how much have scrolled.
//   console.log("scrollHeightIntoElement", textArea.scrollHeight); //full height of scroll able area.
// });

// window.screenY; // how much scrolled vertically
// window.screenX; // how much scrolled horizontally
// window.scroll(0, 0);
// window.scroll({
//   left: 0,
//   top: 0,
//   behavior: "smooth",
// });
// // or
// window.scrollTo(0, 0);
// window.scrollTo({
//   left: 0,
//   top: 0,
//   behavior: "smooth",
// });
//window.innerHeight // browser display-area-height
