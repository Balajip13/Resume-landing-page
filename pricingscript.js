function selectPlan(plan) {
  if (plan === 'free') {
    alert("You selected the Free Plan!");
  } else {
    window.location.href = "paymentindex.html";
  }
}
