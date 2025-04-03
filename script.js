const icon = document.querySelector(".icon");
const popup = document.querySelector(".popup");

icon.onclick = function () {
  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none";
    }, 300);
  } else {
    popup.style.display = "block";
    popup.classList.add("show");
  }
};
