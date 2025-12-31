document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop page reload

      alert("Thank you for contacting Eventura Creations! We will get back to you soon.");

      form.reset(); // clear the form
    });
  }
});

