var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
var close = document.querySelector(".modal__action--negative");
var btn = document.querySelector(".toggle-button");
var nav = document.querySelector(".mobile-nav");

// console.log(backdrop);
// console.dir(selectPlanButton);

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";

    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
function closeModal() {
  // modal.style.display = "none";
  backdrop.style.display = "none";
  nav.style.display = "none";

  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

backdrop.addEventListener("click", closeModal);
if (close) {
  close.addEventListener("click", closeModal);
}

btn.addEventListener("click", function () {
  nav.style.display = "block";
  backdrop.style.display = "block";
});
