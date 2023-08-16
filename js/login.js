document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;
  // console.log(email, password);
  document.getElementById("user-email").value = "";
  document.getElementById("user-password").value = "";

  if (email === "baap@sontan.com" && password === "secret") {
    window.location.href = "bank.html";
    // console.log("valid input");
  } else alert("You are not baap er sontan!");
});
