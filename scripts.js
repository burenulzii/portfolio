// PORTFOLIO.JS

let theme = "light";

const themeButton = document.getElementById("header-button");

function main() {
  if (theme === "light") {
    theme = "dark";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "dark.css");
  } else {
    theme = "light";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "styles.css");
  }
}

themeButton.addEventListener("click", main);