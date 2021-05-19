var bannerField = document.getElementById("banner");
var openButton = document.getElementById("openBtn");
var modalContainerField = document.getElementById("modal-container");
var closeButton = document.getElementById("closesymbol");

openButton.addEventListener("click", openWindow);
function openWindow() {
  bannerField.innerHTML = modalContainerField.innerHTML;
}

closeButton.addEventListener("click", closeWindow);
function closeWindow() {
  modalContainerField.innerHTML = bannerField.innerHTML;
}
