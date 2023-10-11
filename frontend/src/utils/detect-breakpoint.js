export default size => {
  const breakpoint = getComputedStyle(document.documentElement).getPropertyValue(
    `--breakpoint-${size}`
  );

  return !window.matchMedia(`(min-width: ${breakpoint})`).matches;
};
