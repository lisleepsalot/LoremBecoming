const floating = document.querySelector('.floating-window');
let timer;

floating.addEventListener('mouseenter', () => {
  clearTimeout(timer);
  floating.classList.add('show');
  timer = setTimeout(() => {
    floating.classList.remove('show');
  }, 5000);
});

floating.addEventListener('mouseleave', () => {
  // Optional: let it stay or return earlier
});