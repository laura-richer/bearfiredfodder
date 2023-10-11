const resizeHandlers = new Set();

const handleResize = event => {
  resizeHandlers.forEach(handler => handler(event));
};

export default handler => {
  resizeHandlers.add(handler);
  window.addEventListener('resize', handleResize);
};
