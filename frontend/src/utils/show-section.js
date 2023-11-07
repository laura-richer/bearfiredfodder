const revealElement = targetElement => {
  const element = targetElement;
  element.style.opacity = 1;
  element.style.transform = 'translateY(0)';
};

export default (targetElement, callback) => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (callback) callback();
          revealElement(targetElement);

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
