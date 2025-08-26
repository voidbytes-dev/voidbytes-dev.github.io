function toggleFunction() {
  const themeLink = document.querySelector('link[href*="main-"]');
  const icon = document.getElementById("theme-icon");
  const current = themeLink.getAttribute("href");
  
  const isDark = current.includes("dark");
  
  themeLink.setAttribute("href", isDark ? "/main-light.css" : "/main-dark.css");
  
  // Change SVG icon
  icon.src = isDark ? "/icons/sun.svg" : "/icons/moon.svg";
}