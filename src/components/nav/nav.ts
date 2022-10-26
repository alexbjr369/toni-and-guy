import gsap from 'gsap';
import './nav.scss';

export const nav = (element: HTMLElement) => {
  element.innerHTML = `
    <nav class="nav">
      <a class="nav__link nav__link_menu" href="#" target="_blank">
        <ion-icon name="menu-outline"></ion-icon>
      </a>
      <a class="nav__link nav__link_lang" href="#" target="_blank">eng</a>
      <a class="nav__link nav__link_search" href="#" target="_blank">
        <ion-icon name="search-outline"></ion-icon>
      </a>
    </nav>
  `;

  gsap.from('.nav__link', {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    y: '20',
    stagger: 0.08,
    ease: Expo.easeInOut,
  });
};
