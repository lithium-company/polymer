document.getElementById("orderForm").addEventListener("submit", e => {
  e.preventDefault();

  const f = e.target.elements;

  const body =
    `Name: ${f[0].value}\n` +
    `Item: ${f[1].value}\n` +
    `Color: ${f[2].value}\n` +
    `Notes: ${f[3].value}`;

  window.location.href =
    "mailto:YOUREMAIL@example.com" +
    "?subject=New Lithium Order" +
    "&body=" + encodeURIComponent(body);

  document.getElementById("status").textContent =
    "Your order has been opened in email!";
});
