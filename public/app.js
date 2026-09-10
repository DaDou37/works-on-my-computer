function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setText(id, text) {
  var element = document.getElementById(id);
  if (element) element.textContent = text;
}

function showMessage(kind) {
  var messages = window.WOMM_MESSAGES || {};
  var list = messages[kind] || messages.excuses || [];
  setText("message", pickRandom(list));
}

function loadStatus() {
  var config = window.WOMM_CONFIG || {};
  setText("environment", config.environment || "UNKNOWN");
  setText("version", config.version || "0.0.0");
  setText("confidence", config.developerConfidence || "Not measured");
  setText("statusText", config.statusText || "Waiting for coffee.");
}

document.addEventListener("DOMContentLoaded", function () {
  loadStatus();
  document.getElementById("excuseButton").addEventListener("click", function () {
    showMessage("excuses");
  });
  document.getElementById("solutionButton").addEventListener("click", function () {
    showMessage("solutions");
  });
  document.getElementById("panicButton").addEventListener("click", function () {
    showMessage("panic");
  });
});
