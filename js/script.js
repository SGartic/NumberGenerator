const resultEl = document.getElementById("result");
const toggleButton = document.getElementById("toggle-mode");
const icon = document.getElementById("mode-icon");

function generateRandomNumber() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max)) {
    alert("Introduce valores válidos.");
    return;
  }

  if (min > max) [min, max] = [max, min];

  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  resultEl.style.opacity = 0;
  setTimeout(() => {
    resultEl.textContent = `${number}`;
    resultEl.style.opacity = 1;
  }, 150);
}

function setThemeIcon(isDark) {
  icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
}

toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  setThemeIcon(isDark);
});

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  if (isDark) document.body.classList.add("dark");
  setThemeIcon(isDark);
};
