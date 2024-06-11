const revealElement = (targetElementNode: HTMLElement) => {
  const element = targetElementNode;
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
};

export default (targetElement: string, callback?: CallableFunction) => {
  const targetElementNode: HTMLElement = document.querySelector(targetElement);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (callback) callback();
          revealElement(targetElementNode);

          observer.unobserve(targetElementNode);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  observer.observe(targetElementNode);
};
