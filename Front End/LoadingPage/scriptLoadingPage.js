// 3 detik
setTimeout(() => {
  window.location.href = "/LandingPage/LandingPage.html";
}, 3000);

// loading bar
let progress = 0;
const loadingBar = document.getElementById("loading-bar");
const interval = setInterval(() => {
  progress += 2;
  loadingBar.style.width = `${progress}%`;
  if (progress >= 100) {
    clearInterval(interval);
  }
}, 30);
