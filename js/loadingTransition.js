window.addEventListener('DOMContentLoaded', () => {
  function checkScreenWidth() {
    const existing = document.getElementById('width-warning');
    if (window.innerWidth < 1200) {
      if (!existing) {
        const warning = document.createElement('div');
        warning.id = 'width-warning';
        warning.style.position = 'fixed';
        warning.style.top = '0';
        warning.style.left = '0';
        warning.style.width = '100vw';
        warning.style.height = '100vh';
        warning.style.backgroundColor = 'white';
        warning.style.zIndex = '10000';
        warning.style.display = 'flex';
        warning.style.alignItems = 'center';
        warning.style.justifyContent = 'center';
        warning.style.fontSize = '2rem';
        warning.style.fontFamily = 'sans-serif';
        warning.style.textAlign = 'center';
        warning.textContent = 'Please use a screen that is at least 1200px wide to access.';
        document.body.appendChild(warning);
      }
    } else {
      if (existing) {
        existing.remove();
      }
    }
  }

  checkScreenWidth();
  if (window.innerWidth < 1500) return;

  const container = document.createElement('div');
  container.id = 'checkerboard-transition';
  document.body.appendChild(container);

  const style = document.createElement('style');
  style.textContent = `
    #checkerboard-transition {
      position: fixed;
      z-index: 9999;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, 10px);
      grid-auto-rows: 10px;
      pointer-events: none;
    }
    #checkerboard-transition div {
      opacity: 1;
      width: 10px;
      height: 10px;
    }
    #checkerboard-transition div.white {
      background: white;
    }
    #checkerboard-transition div.lightgray {
      background: #d3d3d3;
    }
  `;
  document.head.appendChild(style);

  const cols = Math.ceil(window.innerWidth / 10);
  const rows = Math.ceil(window.innerHeight / 10);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const square = document.createElement('div');
      const isWhite = col % 2 === 0;
      square.className = isWhite ? 'white' : 'lightgray';
      container.appendChild(square);
    }
  }

  const squares = container.querySelectorAll('div');
  let completed = 0;
  const total = squares.length;

  squares.forEach(square => {
    const delay = Math.random() * 300;
    setTimeout(() => {
      square.style.opacity = '0';
      completed++;
      if (completed === total) {
        setTimeout(() => {
          container.style.opacity = '0';
          setTimeout(() => container.remove(), 2000);
        }, 1000); // short delay after all visible
      }
    }, delay);
  });

  window.addEventListener('resize', checkScreenWidth);
});
