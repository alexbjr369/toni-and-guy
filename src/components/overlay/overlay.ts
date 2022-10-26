import gsap from 'gsap';
import './overlay.scss';

export const overlay = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="overlay overlay_first"></div>
    <div class="overlay overlay_second"></div>
    <div class="overlay overlay_third"></div>
  `;

  gsap.to('.overlay_first', {
    duration: 1,
    delay: 0.5,
    top: '-100%',
    ease: Expo.easeInOut,
  });

  gsap.to('.overlay_second', {
    duration: 1,
    delay: 0.7,
    top: '-100%',
    ease: Expo.easeInOut,
  });

  gsap.to('.overlay_third', {
    duration: 1,
    delay: 0.9,
    top: '-100%',
    ease: Expo.easeInOut,
  });
};
