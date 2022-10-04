const sidebarBtn = document.querySelector("#sidebarBtn");
const navbar = document.querySelector("#navbar");
const sidebar = document.querySelector("#sidebar");
const hiddenEls = document.querySelectorAll(".hidden");

const allowScroll = () => {
  if (sidebar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

sidebarBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebarBtn.classList.toggle("active");
  sidebar.classList.toggle("active");

  allowScroll();
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "sidebarBtn" && e.target.id !== "sidebar") {
    sidebarBtn.classList.remove("active");
    sidebar.classList.remove("active");
  }
  allowScroll();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
});

hiddenEls.forEach((el) => observer.observe(el));
