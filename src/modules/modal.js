const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const buttonClosePopup = popup.querySelector(".popup-close");
  const popupContent = document.querySelector(".popup-content");
  const widht = document.documentElement.clientWidth;

  const animation = () => {
    let i = 0;
    popup.style.display = `block`;
    popupContent.style.opacity = 0;
    const interval = setInterval(() => {
      i += 0.01;
      popupContent.style.opacity = i;
      if (popupContent.style.opacity >= 1) {
        clearInterval(interval);
      }
    }, 10);
  };

  buttons.forEach(el => {
    el.addEventListener("click", () => {
      if (widht <= 768) {
        popup.style.display = `block`;
      } else {
        animation();
      }
    });
  });

  buttonClosePopup.addEventListener("click", () => {
    popup.style.display = ``;
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      popup.style.display = ``;
    }
  });

  window.addEventListener("click", e => {
    const target = e.target;
    if (!target.closest("popup") && !target.closest(".popup-btn")) {
      popup.style.display = ``;
    }
  });
};

export default modal;
