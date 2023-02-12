// DANGER: Do not verify email, pass in client side. always do it in server side. This is for learning purpose only.

document.getElementById("btn-submit").addEventListener("click", function () {
  // getting email from input
  const inputEmail = document.getElementById("input-email");
  const emailValue = inputEmail.value;

  // getting password from input
  const inputPass = document.getElementById("input-password");
  const passValue = inputPass.value;

  // comparing email and pass
  if (emailValue === "example@email.com" && passValue === "example") {
    window.location.href = "account.html";
  } else {
    alert("email: example@email.com & pass: example");
  }
});


