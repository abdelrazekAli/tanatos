//Adjust Slider Height
$(function () {
  $(".header").height($(window).height());
});

//show and hidden button
let hiddenDiv = document.getElementById("hiddenDiv"),
  btn = document.getElementById("btn");
btn.onclick = function () {
  if (btn.textContent == "show more") {
    btn.innerText = "show less";
    hiddenDiv.classList.toggle("hidden");
  } else {
    btn.innerText = "show more";
    hiddenDiv.classList.toggle("hidden");
  }
};
