
document.querySelector("button").addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector("body").style.backgroundColor = "#" + randomNumber;
  document.querySelector(".background").innerHTML = "Background color: " + "#" + randomNumber.toUpperCase();
});
