import gsap from 'gsap';
import './media.scss';

export const media = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="media">
      <ul class="media__list">
        <li class="media__item">
          <a class="media__link" href="#" target="_blank">facebook</a>
        </li>
        <li class="media__item">
          <a class="media__link" href="#" target="_blank">instagram</a>
        </li>
        <li class="media__item">
          <a class="media__link" href="#" target="_blank">twitter</a>
        </li>
      </ul>
    </div>
  `;

  gsap.from('.media__item', {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    y: '-20',
    stagger: 0.08,
    ease: Expo.easeInOut,
  });
};
