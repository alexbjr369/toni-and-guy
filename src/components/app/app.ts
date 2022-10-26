import { distortion } from '../distortion/distortion';
import { media } from '../media/media';
import { nav } from '../nav/nav';
import { overlay } from '../overlay/overlay';
import { sponsor } from '../sponsor/sponsor';
import { text } from '../text/text';
import './app.scss';

const navSelector = 'nav-container';
const overlaySelector = 'overlay-container';
const mediaSelector = 'media-container';
const textSelector = 'text-container';
const distortionSelector = 'distortion-container';
const sponsorSelector = 'sponsor-container';

export const app = (element: HTMLDivElement) => {
  element.innerHTML = `
    <div class="container">
      <div id=${navSelector}></div>
    </div>

    <main class="main">
        <div id=${mediaSelector}></div>
        <div class="main__center">
          <div id=${textSelector}></div>
          <div id=${distortionSelector}></div>
        </div>
        <div id=${sponsorSelector}></div>
      </div>
    </main>

    <div id=${overlaySelector}></div>
  `;

  const overlayElement = document.querySelector<HTMLDivElement>(
    `#${overlaySelector}`
  )!;
  const navElement = document.querySelector<HTMLDivElement>(`#${navSelector}`)!;
  const mediaElement = document.querySelector<HTMLDivElement>(
    `#${mediaSelector}`
  )!;
  const textElement = document.querySelector<HTMLDivElement>(
    `#${textSelector}`
  )!;
  const distortionElement = document.querySelector<HTMLDivElement>(
    `#${distortionSelector}`
  )!;
  const sponsorElement = document.querySelector<HTMLDivElement>(
    `#${sponsorSelector}`
  )!;

  overlay(overlayElement);
  nav(navElement);
  media(mediaElement);
  text(textElement);
  sponsor(sponsorElement);
  distortion(distortionElement);
};
