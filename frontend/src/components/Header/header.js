import debounce from 'debounce';
import detectBreakpoint from '@/utils/detect-breakpoint';
import addResizeListener from '@/utils/resize-handler';

export default () => {
  const menuButton = document.querySelector('#menuToggleButton');
  const headerNavItemsContainer = document.querySelector('#header__nav-items');
  const headerNavItems = document.querySelectorAll('.header__nav-item');
  const detectScreenSize = 'mobile';
  let mobileBreakpoint = detectBreakpoint(detectScreenSize);

  const handleMenuToggle = () => {
    menuButton.classList.toggle('header__nav-toggle--active');
    headerNavItemsContainer.classList.toggle('header__nav-items--active');
  };

  const handleMenuClose = () => {
    menuButton.classList.remove('header__nav-toggle--active');
    headerNavItemsContainer.classList.remove('header__nav-items--active');
  };

  const handleResize = debounce(() => {
    mobileBreakpoint = detectBreakpoint(detectScreenSize);
  }, 300);

  headerNavItems.forEach(item => {
    if (!mobileBreakpoint) return;
    item.addEventListener('click', handleMenuClose);
  });

  menuButton.addEventListener('click', handleMenuToggle);
  addResizeListener(handleResize);
};
