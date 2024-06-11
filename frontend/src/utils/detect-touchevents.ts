import { detect } from 'detect-browser';

const browser = detect();

export default () =>
  navigator.maxTouchPoints > 1 || browser.os === 'iOS' || browser.os === 'Android OS';
