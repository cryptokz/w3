function show_hide_password(target) {
  var input = document.getElementById("password-input");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

function show_hide_passwordtwo(target) {
  var input = document.getElementById("pass-inputtwo");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

const navBar = document.querySelector("nav"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
	menuBtn.addEventListener("click", () => {
		navBar.classList.toggle("open");
	});
});

overlay.addEventListener("click", () => {
	navBar.classList.toggle("open");
});
