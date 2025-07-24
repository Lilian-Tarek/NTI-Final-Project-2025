let input = document.querySelector(".input-group");
let body = document.querySelector(".overlay-all");
let list = document.querySelector(".list");
const up = document.querySelector(".up");
let nav = document.querySelector(".navbar");
input.addEventListener("click", function () {
  list.classList.toggle("d-none");
  body.classList.toggle("d-none");
  
});
window.addEventListener('scroll', function () {
  if (this.window.scrollY >= 100)
  {
    up.classList.remove("d-none");
  }
  else
  {
     up.classList.add("d-none"); 
  }
})
up.addEventListener("click", function () {
  nav.scrollIntoView({
    behavior: "smooth"
  })
})

const containers = document.querySelectorAll(".ver-carousel .carousel-item");

containers.forEach((container) => {
  const image = container.querySelector("img");
  let startX = 0,
    startY = 0,
    currentX = 0,
    currentY = 0;

  container.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.9)";
  });

  container.addEventListener("mouseover", (e) => {
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
  });

  container.addEventListener("mousemove", (e) => {
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    image.style.transform = `scale(1.9) translate(${currentX / 2}px, ${
      currentY / 2
    }px)`;
  });

  container.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
    currentX = currentY = 0;
  });
});
let navbar = document.querySelector(".my-navbar");


