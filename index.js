const slider = document.querySelector(".slider");

slider.addEventListener("input", function () {
  slider.style.background = `linear-gradient(to right, var(--softCyan) ${
    ((slider.value - slider.min) * 100) / (slider.max - slider.min)
  }%, var(--lighterGreyishBlue) ${
    ((slider.value - slider.min) * 100) / (slider.max - slider.min)
  }%)`;
});
