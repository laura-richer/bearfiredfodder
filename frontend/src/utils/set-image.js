import getUrlForImage from '@/utils/getUrlForImage';

export default (image, mobileImage) => {
  const breakpoint = getComputedStyle(document.documentElement).getPropertyValue(
    '--breakpoint-desktop'
  );

  console.log(image);
  console.log(mobileImage);
  // return getUrlForImage(image).url();
  return breakpoint;
};
