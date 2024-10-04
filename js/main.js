// main.js
import initMobileNav from './modules/mobile-nav.js';
import { initServiceCards, initProcessCards } from './modules/cards.js';
import initFooterLinks from './modules/footer-links.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initServiceCards();
  initProcessCards();
  initFooterLinks();
});
