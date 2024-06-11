import debounce from 'debounce';
import setImage from '@/utils/set-image';
import showSection from '@/utils/show-section';
import addResizeListener from '@/utils/resize-handler';
import detectBreakpoint from '@/utils/detect-breakpoint';

const heroInner: HTMLElement = document.querySelector('.hero__inner');

const detectScreenSize = 'tablet';
let mobileBreakpoint = detectBreakpoint(detectScreenSize);

const handleResize = debounce(() => {
  const resizeBreakpoint = detectBreakpoint(detectScreenSize);

  if (mobileBreakpoint === resizeBreakpoint) return;

  mobileBreakpoint = detectBreakpoint(detectScreenSize);
  setImage(heroInner, mobileBreakpoint);
}, 300);

addResizeListener(handleResize);
setImage(heroInner, mobileBreakpoint);
showSection('.hero__content');
