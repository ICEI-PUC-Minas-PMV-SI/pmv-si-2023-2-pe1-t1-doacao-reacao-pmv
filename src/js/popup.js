const popupButton = document.getElementById("popup-button");
const popupContent = document.getElementById("myPopup");

popupButton.addEventListener("click", () => {
    popupContent.classList.toggle("show");
});