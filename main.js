let rateContainer = document.querySelector(".container-rating")
let thanksContainer = document.querySelector(".container-thanks")
let rateButtons = document.querySelectorAll(".rate-btn")
let submitButton = document.querySelector("#submit")
let rateValue = document.querySelector("#rate-value")


rateButtons.forEach(rateButton => {
    rateButton.addEventListener("click", () => {
        rateValue.textContent = rateButton.textContent
    })
})

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    rateContainer.classList.add("hidden");
})