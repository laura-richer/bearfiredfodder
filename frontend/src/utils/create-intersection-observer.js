export default (targetElement, callback) => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(targetElement);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  observer.observe(targetElement);
};
