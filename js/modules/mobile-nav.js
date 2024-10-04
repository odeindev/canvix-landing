// ** Навигация для мобильных устройств
const initMobileNav = () => {
    const navToggle = document.getElementById("navToggle");
    const navElement = document.querySelector("nav.header__nav");
    const burgerIcon = document.getElementById("burgerIcon");
    const closeIcon = document.getElementById("closeIcon");
    const spanElement = navToggle.querySelector(".visually-hidden");
  
    const toggleNav = () => {
      const isOpen = navElement.classList.toggle("nav-visible");
      spanElement.textContent = isOpen ? "Close nav" : "Open nav";
      burgerIcon.style.display = isOpen ? "none" : "block";
      closeIcon.style.display = isOpen ? "block" : "none";
      navToggle.setAttribute("aria-expanded", isOpen);
    };
  
    navToggle.addEventListener("click", toggleNav);
  
    document.addEventListener("click", (event) => {
      if (
        !navElement.contains(event.target) &&
        !navToggle.contains(event.target) &&
        navElement.classList.contains("nav-visible")
      ) {
        toggleNav();
      }
    });
  };
  
  export default initMobileNav;
  