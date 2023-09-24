let allSection = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  allSection.forEach((sec) => {
    let backTop = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (backTop >= offset && backTop < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });
  /*///////////////////Block Menu/////////////////////////////////*/

  let menuBar = document.querySelector("#logo");
  let navbar = document.querySelector("#navbar");

  menuBar.onclick = () => {
    menuBar.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  menuBar.classList.remove("bx-x");
  navbar.classList.remove("active");
};


//////////////////////Dark Light Mode///////////////////////////////

let rail = document.querySelector('.rails');
let body = document.querySelector('body')

rail.addEventListener('click', ()=>{
  rail.classList.toggle('dark')
  body.classList.toggle('dark')
});

