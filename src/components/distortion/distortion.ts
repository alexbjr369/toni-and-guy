import gsap from 'gsap';
import hoverEffect from 'hover-effect';
import distortion01Image from '../../images/01.png';
import distortion02Image from '../../images/02.png';
import distortionEffectImage from '../../images/distortion.png';
import './distortion.scss';

let distortionEffect: any;
let changeDistortion = false;
const intervalTiming = 2400;

export const distortion = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="distortion"></div>
  `;

  const distortionElement =
    document.querySelector<HTMLDivElement>('.distortion')!;

  setHoverEffect(distortionElement);
};

const setHoverEffect = (element: HTMLElement) => {
  distortionEffect = new hoverEffect({
    parent: element,
    intensity: 0.2,
    image1: distortion01Image,
    image2: distortion02Image,
    displacementImage: distortionEffectImage,
    imagesRatio: 380 / 300,
    hover: false,
  });

  gsap.from(element, {
    duration: 1.5,
    delay: 2,
    opacity: 0,
    y: '20',
    ease: Expo.easeInOut,
    onComplete: () => {
      element.setAttribute('style', '');
      addInterval();
    },
  });
};

const addInterval = () => {
  setInterval(toggleDistortion, intervalTiming);
};

const toggleDistortion = () => {
  if (!changeDistortion) {
    distortionEffect.next();
    changeDistortion = true;
  } else {
    distortionEffect.previous();
    changeDistortion = false;
  }
};
