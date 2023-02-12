import './main.scss';

import gsap from 'gsap';
import hoverEffect from 'hover-effect';
import distortion01Image from './images/01.png';
import distortion02Image from './images/02.png';
import distortionEffectImage from './images/distortion.png';
import {
  DISTORTION,
  MEDIA,
  NAV,
  OVERLAY,
  SPONSOR,
  TEXT,
} from './utilities/typescript/constants';
import { Breakpoints } from './utilities/typescript/enums';

/**
 * overlay
 */

gsap.to(OVERLAY.firstElement, {
  duration: 1,
  delay: 0.5,
  top: '-100%',
  ease: Expo.easeInOut,
});

gsap.to(OVERLAY.secondElement, {
  duration: 1,
  delay: 0.7,
  top: '-100%',
  ease: Expo.easeInOut,
});

gsap.to(OVERLAY.thirdElement, {
  duration: 1,
  delay: 0.9,
  top: '-100%',
  ease: Expo.easeInOut,
});

/**
 * nav
 */

gsap.from(NAV.linkElement, {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  y: '20',
  stagger: 0.08,
  ease: Expo.easeInOut,
});

/**
 * media
 */

gsap.from(MEDIA.itemElement, {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  y: '-20',
  stagger: 0.08,
  ease: Expo.easeInOut,
});

/**
 * text
 */

gsap.from(TEXT.headingPrimaryElement, {
  duration: 1,
  delay: 1,
  x: '-100vw',
  ease: Expo.easeInOut,
});

gsap.from(TEXT.headingSecondaryElement, {
  duration: 1,
  delay: 1.5,
  opacity: 0,
  y: '-100vw',
  ease: Expo.easeInOut,
});

gsap.from(TEXT.headingTertiaryElement, {
  duration: 1,
  delay: 1.2,
  x: '-100vw',
  ease: Expo.easeInOut,
});

gsap.from(TEXT.paragraphElement, {
  duration: 1,
  delay: 1.3,
  x: '-100vw',
  ease: Expo.easeInOut,
});

/**
 * sponsor
 */

const biggerThanSM = () => {
  gsap.from(SPONSOR.imageElement, {
    duration: 1,
    delay: 1.5,
    opacity: 9,
    y: '100vw',
    ease: Expo.easeInOut,
  });

  gsap.from(SPONSOR.paragraphElement, {
    duration: 1,
    delay: 1.6,
    opacity: 0,
    y: '100vw',
    ease: Expo.easeInOut,
  });
};

const smallerThanSM = () => {
  gsap.from(SPONSOR.imageElement, {
    duration: 1,
    delay: 1.6,
    opacity: 9,
    y: '-100vw',
    ease: Expo.easeInOut,
  });

  gsap.from(SPONSOR.paragraphElement, {
    duration: 1,
    delay: 1.5,
    opacity: 0,
    y: '-100vw',
    ease: Expo.easeInOut,
  });
};

if (window.matchMedia(`(max-width: ${Breakpoints.SM}px)`).matches) {
  smallerThanSM();
} else {
  biggerThanSM();
}

/**
 * distortion
 */

let changeDistortion = false;
const intervalTiming = 2400;

const distortionElement = document.querySelector<HTMLDivElement>(
  DISTORTION.distortionElement
)!;

const distortionEffect = new hoverEffect({
  parent: distortionElement,
  intensity: 0.2,
  image1: distortion01Image,
  image2: distortion02Image,
  displacementImage: distortionEffectImage,
  imagesRatio: 380 / 300,
  hover: false,
});

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

gsap.from(distortionElement, {
  duration: 1.5,
  delay: 2,
  opacity: 0,
  y: '20',
  ease: Expo.easeInOut,
  onComplete: () => {
    distortionElement.setAttribute('style', '');
    addInterval();
  },
});
