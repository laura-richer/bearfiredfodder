import { detect } from 'detect-browser';

const browser = detect();

export default () =>
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
  browser.os === 'iOS' ||
  browser.os === 'Android OS';
