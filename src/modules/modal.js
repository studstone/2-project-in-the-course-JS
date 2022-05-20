import { animate } from "./helper";

const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const buttonClosePopup = popup.querySelector(".popup-close");
  const popupContent = document.querySelector(".popup-content");
  const widht = document.documentElement.clientWidth;

  buttons.forEach(el => {
    el.addEventListener("click", () => {
      if (widht <= 768) {
        popup.style.display = `block`;
      } else {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popup.style.display = `block`;
            popupContent.style.cssText = `
            opacity: ${progress};
            left: 50%;
            transform: translateX(-50%);
            `;
          }
        });
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
