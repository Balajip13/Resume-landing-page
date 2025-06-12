document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector(".subscribe-section form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailInput = newsletterForm.querySelector("input[type='email']");
      const email = emailInput.value.trim();

      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      console.log("📬 Newsletter signup:", email);
      emailInput.value = "";
      alert("Thanks for signing up for our newsletter!");
    });
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
