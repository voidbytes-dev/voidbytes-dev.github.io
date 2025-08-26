// navbar.js
window.addEventListener("DOMContentLoaded", () => {
  fetch("/COMPONENTS/navbar.html")
    .then(res => res.text())
    .then(data => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = data;
      document.body.insertBefore(wrapper, document.body.firstChild);
    });
});