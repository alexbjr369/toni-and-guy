import gsap from 'gsap';
import sponsorLogo from '../../images/sponsor-logo.png';
import { Breakpoints } from '../../utilities/typescript/enums';
import './sponsor.scss';

export const sponsor = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="sponsor">
      <img
        class="sponsor__image"
        src=${sponsorLogo}
        alt="Official sponsor: London Fashion Week"
      />
      <p class="sponsor__paragraph">official sponsor</p>
    </div>
  `;

  onInit();
};

const onInit = () => {
  if (window.matchMedia(`(max-width: ${Breakpoints.SM}px)`).matches) {
    smallerThanSM();
  } else {
    biggerThanSM();
  }
};

const biggerThanSM = () => {
  gsap.from('.sponsor__image', {
    duration: 1,
    delay: 1.5,
    opacity: 9,
    y: '100vw',
    ease: Expo.easeInOut,
  });

  gsap.from('.sponsor__paragraph', {
    duration: 1,
    delay: 1.6,
    opacity: 0,
    y: '100vw',
    ease: Expo.easeInOut,
  });
};

const smallerThanSM = () => {
  gsap.from('.sponsor__image', {
    duration: 1,
    delay: 1.6,
    opacity: 9,
    y: '-100vw',
    ease: Expo.easeInOut,
  });

  gsap.from('.sponsor__paragraph', {
    duration: 1,
    delay: 1.5,
    opacity: 0,
    y: '-100vw',
    ease: Expo.easeInOut,
  });
};
