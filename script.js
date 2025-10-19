function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}
loadHTML("header-placeholder", "/ASSETS/header.html");
loadHTML("map-placeholder", "/contact-page/map.html");
loadHTML("footer-placeholder", "/ASSETS/footer.html");
loadHTML("contact-info", "/contact-page/contact.html");
loadHTML("contact-info-placeholder", "/contact-page/contact-info.html");


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
