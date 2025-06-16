document.addEventListener("DOMContentLoaded", () => {

  const followButton = document.querySelector(".follow-btn");
  if (followButton) {
    followButton.addEventListener("click", () => {
      alert("Thanks for following us!");
    });
  }

  const messageForm = document.querySelector("#contactForm");
  if (messageForm) {
    messageForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
      const name = messageForm.querySelector('input[name="name"]').value.trim();
      const mobile = messageForm.querySelector('input[name="mobile"]').value.trim();
      const email = messageForm.querySelector('input[name="email"]').value.trim();
      const message = messageForm.querySelector('textarea[name="message"]').value.trim();

      if (name && mobile && email && message) {
        alert("Message sent successfully!\n\nThank you, " + name + "!");
        messageForm.reset(); 
      } else {
        alert("Please fill in all fields before submitting.");
      }
    });
  }
});
