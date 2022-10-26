import gsap from 'gsap';
import './text.scss';

export const text = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="text">
      <h1 class="text__heading-primary">toni&guy</h1>
      <h2 class="text__heading-secondary">duality</h2>
      <h3 class="text__heading-tertiary">
        collection 2017 <br />
        duality
      </h3>
      <p class="text__paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis,
        delectus facere neque sunt commodi quae culpa dolores doloribus
        magnam?
      </p>
    </div>
  `;

  gsap.from('.text__heading-primary', {
    duration: 1,
    delay: 1,
    x: '-100vw',
    ease: Expo.easeInOut,
  });

  gsap.from('.text__heading-secondary', {
    duration: 1,
    delay: 1.5,
    opacity: 0,
    y: '-100vw',
    ease: Expo.easeInOut,
  });

  gsap.from('.text__heading-tertiary', {
    duration: 1,
    delay: 1.2,
    x: '-100vw',
    ease: Expo.easeInOut,
  });

  gsap.from('.text__paragraph', {
    duration: 1,
    delay: 1.3,
    x: '-100vw',
    ease: Expo.easeInOut,
  });
};
