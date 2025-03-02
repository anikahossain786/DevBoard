// Get the theme toggle button
const themeButton = document.getElementById("themeToggle");

// Function to toggle the theme
themeButton.addEventListener("click", () => {
  // List of available DaisyUI themes
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "retro",
    "cyberpunk",
    "valentine",
  ];

  // Get the current theme from body class
  const currentTheme = document.body.getAttribute("data-theme");

  // Find the next theme in the list
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length; // Cycle back to the first theme after last theme

  // Apply the new theme
  document.body.setAttribute("data-theme", themes[nextIndex]);

  // Store the current theme in localStorage
  localStorage.setItem("theme", themes[nextIndex]);
});

// On page load, apply the last used theme from localStorage
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
  } else {
    document.body.setAttribute("data-theme", "light"); // Default theme
  }
});
