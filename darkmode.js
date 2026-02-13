function toggleMode() {
  document.body.classList.toggle("dark");

  let btn = document.getElementById("modeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "🌙Dark Mode";
  } else {
    btn.innerText = "☀️Light Mode";
  }
}
