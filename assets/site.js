(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-language]");
  var labelledElements = document.querySelectorAll("[data-label-en][data-label-zh]");
  var translatedImages = document.querySelectorAll("img[data-alt-en][data-alt-zh]");
  var saved = null;
  try {
    saved = window.localStorage.getItem("portfolio-language");
  } catch (error) {
    // The English HTML state remains usable when storage is unavailable.
  }
  var language = saved === "zh" ? "zh" : "en";

  function setLanguage(nextLanguage) {
    root.setAttribute("data-language", nextLanguage);
    root.setAttribute("lang", nextLanguage === "zh" ? "zh-CN" : "en");
    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-set-language") === nextLanguage;
      button.setAttribute("aria-pressed", String(isActive));
    });
    labelledElements.forEach(function (element) {
      element.setAttribute("aria-label", element.getAttribute("data-label-" + nextLanguage));
    });
    translatedImages.forEach(function (image) {
      image.setAttribute("alt", image.getAttribute("data-alt-" + nextLanguage));
    });
    try {
      window.localStorage.setItem("portfolio-language", nextLanguage);
    } catch (error) {
      // Keep the current-page language even if browser storage is blocked.
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-set-language"));
    });
  });

  setLanguage(language);
})();
