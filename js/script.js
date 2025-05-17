function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomSize() {
  return Math.floor(Math.random() * (800 - 100 + 1)) + 100;
}

function getRandomFontSize() {
  return Math.floor(Math.random() * (30 - 7 + 1)) + 7;
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function getRandomFont() {
  const fonts = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman", "Comic Sans MS", "Impact", "Tahoma", 
      "Big Shoulders Stencil", "Doto", "Emblema One", "Jost", "Lilita One", "Montserrat", "Playwrite HU", "Press Start 2P"];
  return fonts[Math.floor(Math.random() * fonts.length)];
}

function changeStyle() {
  const placeholder = document.querySelector('.placeholder');
  const newSize = getRandomSize();
  placeholder.style.backgroundColor = getRandomColor();
  placeholder.style.width = newSize + 'px';
  placeholder.style.height = newSize + 'px';
  placeholder.style.fontSize = getRandomFontSize() + 'px';
  placeholder.style.left = getRandomPosition(window.innerWidth - newSize) + 'px';
  placeholder.style.top = getRandomPosition(window.innerHeight - newSize) + 'px';
  placeholder.style.fontFamily = getRandomFont();
}