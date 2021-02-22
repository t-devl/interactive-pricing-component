const slider = document.querySelector(".slider");
const pageviewsFigure = document.querySelector(".pageviews-figure");
const priceFigure = document.querySelector(".price-figure");
const pageviewsOptions = ["10k", "50k", "100k", "250k", "500k", "1M"];
const priceOptions = ["$4.00", "$8.00", "$16.00", "$24.00", "$32.00"];
const billingToggle = document.querySelector(".billing-toggle");

updatePageviews();
updatePrice();

slider.addEventListener("input", function () {
  slider.style.background = `linear-gradient(to right, var(--softCyan) ${
    ((slider.value - slider.min) * 100) / (slider.max - slider.min)
  }%, var(--lighterGreyishBlue) ${
    ((slider.value - slider.min) * 100) / (slider.max - slider.min)
  }%)`;

  updatePageviews();
  updatePrice();
});

function updatePageviews() {
  pageviewsFigure.innerHTML = pageviewsOptions[slider.value - 1];
}

function updatePrice() {
  priceFigure.innerHTML = priceOptions[slider.value - 1];
}

billingToggle.addEventListener("click", function () {
  billingToggle.classList.toggle("billing-toggle--active");
});
