import debounce from 'debounce';
import setImage from '@/utils/set-image';
import showSection from '@/utils/show-section';
import addResizeListener from '@/utils/resize-handler';
import detectBreakpoint from '@/utils/detect-breakpoint';

export default () => {
  const menu = document.querySelector('.menu');
  const detectScreenSize = 'tablet';
  let mobileBreakpoint = detectBreakpoint(detectScreenSize);

  const handleResize = debounce(() => {
    mobileBreakpoint = detectBreakpoint(detectScreenSize);
    setImage(menu, mobileBreakpoint);
  }, 300);

  addResizeListener(handleResize);
  setImage(menu, mobileBreakpoint);
  showSection('.menu__container');
};
