function showFields() {
  const method = document.getElementById("method").value;
  document.getElementById("upiSection").style.display = "none";
  document.getElementById("cardSection").style.display = "none";
  document.getElementById("netbankingSection").style.display = "none";

  if (method === "upi") {
    document.getElementById("upiSection").style.display = "block";
  } else if (method === "card") {
    document.getElementById("cardSection").style.display = "block";
  } else if (method === "netbanking") {
    document.getElementById("netbankingSection").style.display = "block";
  }
}
