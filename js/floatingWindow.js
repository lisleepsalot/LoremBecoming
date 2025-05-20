const floating = document.querySelector('.floating-window');
let timer;

floating.addEventListener('mouseenter', () => {
  clearTimeout(timer);
  floating.classList.add('show');
  document.getElementById('arrow').textContent = '↓for info↓';
});

floating.addEventListener('mouseleave', () => {
  timer = setTimeout(() => {
    floating.classList.remove('show');
    document.getElementById('arrow').textContent = '↓for info↓';
  }, 1000);
});