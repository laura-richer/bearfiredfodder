export default (targetElement, mobileBreakpoint) => {
  const {
    dataset: { desktopImage, mobileImage },
  } = targetElement;

  const image = mobileBreakpoint && mobileImage ? mobileImage : desktopImage;
  targetElement.style.backgroundImage = `url(${image})`;
};
