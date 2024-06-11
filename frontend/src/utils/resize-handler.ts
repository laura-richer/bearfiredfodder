type ResizeHandler = (event: Event) => void;

const resizeHandlers = new Set<ResizeHandler>();

const handleResize = (event: Event) => resizeHandlers.forEach(handler => handler(event));

export default (handler: ResizeHandler) => {
  resizeHandlers.add(handler);
  window.addEventListener('resize', handleResize);
};
