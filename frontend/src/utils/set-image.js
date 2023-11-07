export default (targetElement, mobileBreakpoint) => {
  const {
    dataset: { desktopImage, mobileImage },
  } = targetElement;

  const image = mobileBreakpoint && mobileImage ? mobileImage : desktopImage;

  const element = targetElement;
  element.style.backgroundImage = `url(${image})`;
};
