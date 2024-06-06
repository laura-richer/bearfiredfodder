import debounce from 'debounce';
import Macy from 'macy';
import detectBreakpoint from '@/utils/detect-breakpoint';
import showSection from '@/utils/show-section';

export default () => {
  const gallery = document.querySelector<HTMLElement>('.gallery');
  const galleryContainer = document.querySelector<HTMLElement>('.gallery__inner');
  const galleryImageWrapper = document.querySelector<HTMLElement>('.gallery__image-wrapper');
  const galleryImages = document.querySelectorAll<HTMLElement>('.gallery__image');
  const galleryLoading = document.querySelector<HTMLElement>('.gallery .loading-spinner');
  const masonaryWrapper = document.querySelector<HTMLElement>('#gallery-masonary-container');
  const loadMoreButton = document.querySelector<HTMLElement>('.gallery__load-more');
  const detectScreenSize = 'desktop';
  let mobileBreakpoint = detectBreakpoint(detectScreenSize);

  const setInitialGalleryHeight = () => (mobileBreakpoint ? 500 : 750);
  let initialGalleryHeight = 50;
  document.documentElement.style.setProperty('--gallery-height', `${initialGalleryHeight}px`);

  const setLoadMoreTotal = () => Math.ceil(masonaryWrapper.clientHeight / initialGalleryHeight);
  let galleryLoadMoreTotal;
  let loadMoreCount = 1;

  const handleGalleryLoad = () => {
    galleryImages.forEach(image => {
      const imgSrc = image.dataset.src;
      image.setAttribute('src', imgSrc);
    });
  };

  const initMasonaryGrid = () => {
    return Macy({
      container: '#gallery-masonary-container',
      margin: 20,
      columns: 4,
      breakAt: {
        1440: 3,
        1024: 2,
        680: 1,
      },
    });
  };

  const resetGalleryToTop = () => {
    galleryImageWrapper.scrollTop = 0;
    galleryImageWrapper.style.maxHeight = `${initialGalleryHeight}px`;
  };

  const handleLoadMoreClick = () => {
    loadMoreCount++;

    const galleryHeight = initialGalleryHeight * loadMoreCount;
    galleryImageWrapper.style.maxHeight = `${galleryHeight}px`;

    if (loadMoreCount === galleryLoadMoreTotal) {
      loadMoreButton.style.display = 'none';
      gallery.classList.remove('gallery--gradient');
    }
  };

  const handleResize = debounce(() => {
    mobileBreakpoint = detectBreakpoint(detectScreenSize);
    initialGalleryHeight = setInitialGalleryHeight();
    galleryLoadMoreTotal = setLoadMoreTotal();
    loadMoreCount = 1;

    resetGalleryToTop();

    document.documentElement.style.setProperty('--gallery-height', `${initialGalleryHeight}px`);
    loadMoreButton.style.display = 'flex';
    gallery.classList.add('gallery--gradient');
  }, 300);

  const handleGalleryLoaded = async () => {
    await handleResize();

    galleryContainer.style.opacity = '1';
    galleryLoading.style.display = 'none';
  };

  const handleGalleryObserver = async () => {
    await handleGalleryLoad();
    const macy = await initMasonaryGrid();

    await macy.on(macy.constants.EVENT_IMAGE_COMPLETE, handleGalleryLoaded);
    await macy.on(macy.constants.EVENT_RESIZE, handleResize);
  };

  showSection('.gallery', handleGalleryObserver);
  loadMoreButton.addEventListener('click', () => handleLoadMoreClick());
};
