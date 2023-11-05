const popupButton = document.getElementById("popup-button");
const popupContent = document.getElementById("myPopup");
const xButton = document.getElementById("x-button");

popupButton.addEventListener("click", () => {
    popupContent.classList.toggle("show");
});

xButton.addEventListener("click", () => {
    popupContent.classList.remove("show");
});