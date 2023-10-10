const revealElement = targetElement => {
  targetElement.style.opacity = 1;
  targetElement.style.transform = 'translateY(0)';
};

export default (targetElement, callback) => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealElement(targetElement);
          if (callback) callback();
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
