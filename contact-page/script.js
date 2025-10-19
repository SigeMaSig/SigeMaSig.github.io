function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadHTML("header-placeholder", "../ASSETS/header.html");
loadHTML("map-placeholder", "map.html");
loadHTML("contact-info-placeholder", "contact-info.html");
loadHTML("footer-placeholder", "../ASSETS/footer.html");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("myHeader");
  const nav = header.querySelector("nav");
  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = event.target.getAttribute("href");
      const section = document.querySelector(target);
      section.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
