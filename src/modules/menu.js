const menu = () => {
  const openMenuButton = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const menuLink = menu.querySelectorAll("a");

  const hendleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  openMenuButton.addEventListener("click", hendleMenu);

  menuLink.forEach(el => el.addEventListener("click", hendleMenu));

  /*Закрытие меню по нажатию Escape*/
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      menu.classList.remove("active-menu");
    }
  });

  /*Закрытие меню по клику вне меню*/
  window.addEventListener("click", e => {
    const target = e.target;
    if (!target.closest("menu") && !target.closest(".menu")) {
      menu.classList.remove("active-menu");
    }
  });
};

export default menu;
