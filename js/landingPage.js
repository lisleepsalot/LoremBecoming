// Generate today's date and time
const title = document.getElementById('page-title');
const becomingName = document.getElementById('becoming-title');
if (becomingName) {
  const originalText = becomingName.textContent;

  becomingName.innerHTML = [...originalText].map(char => `<span>${char}</span>`).join('');

  const chars = becomingName.querySelectorAll('span');
  let activeIndex = 0;

  setInterval(() => {
    chars.forEach((char, index) => {
      if (index === activeIndex) {
        char.style.fontFamily = 'Arial, sans-serif';
        char.style.fontSize = '3rem';
      } else {
        char.style.fontFamily = 'Times New Roman, serif';
        char.style.fontSize = 'inherit';
      }
    });
    activeIndex = (activeIndex + 1) % chars.length;
  }, 200);
}

const becomingText = document.getElementById('becoming-text');
if (becomingText) {
  const originalText = becomingText.textContent;

  becomingText.innerHTML = [...originalText].map(char => `<span>${char}</span>`).join('');

  const chars = becomingText.querySelectorAll('span');
  let activeIndex = 0;

  setInterval(() => {
    chars.forEach((char, index) => {
      if (index === activeIndex) {
        char.style.fontFamily = 'Arial, sans-serif';
        char.style.fontSize = '2rem';
      } else {
        char.style.fontFamily = 'Times New Roman, serif';
        char.style.fontSize = 'inherit';
      }
    });
    activeIndex = (activeIndex + 1) % chars.length;
  }, 100);
}

function updateTime() {
const now = new Date();
title.innerText = `Current time: ${now.toLocaleString()}`;
}

//date and time call
updateTime(); 
setInterval(updateTime, 1000); 

const container = document.querySelector('.test-container');

dataTests.forEach((dataTest) => {
  const item = document.createElement('div');
  item.classList.add('test-item');

  // block 1: cover image
  const imgWrap = document.createElement('div');
  imgWrap.classList.add('block-1');
  const img = document.createElement('img');
  img.src = dataTest.image;
  img.alt = dataTest.identifier || dataTest.title;
  imgWrap.append(img);
  item.append(imgWrap);

  // block 2: index
  const idx = document.createElement('div');
  idx.classList.add('block-2');
  idx.textContent = `test   (` + `${String(dataTest.index).padStart(2, '0')}` + `)`;
  item.append(idx);

  // block 3: title
  const h2 = document.createElement('h2');
  h2.classList.add('block-3');
  h2.textContent = dataTest.title;
  item.append(h2);

  // block 4: description (spans cols 4–6)
  const desc = document.createElement('h2');
  desc.classList.add('block-4');
  desc.textContent = dataTest.description;
  item.append(desc);

  item.addEventListener('click', () => {
    window.location.href = `${dataTest.identifier}.html`;
  });

  container.append(item);
});


const el = document.getElementById('rolling-lorem-ipsum');
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in sapien ac enim fringilla ultrices. Nunc porta non metus a venenatis. Ut porttitor mauris sit amet erat scelerisque pellentesque. Vestibulum sed viverra augue, suscipit sagittis urna. Ut rutrum malesuada malesuada. Suspendisse lacinia nulla odio, vitae dictum magna dignissim nec. Cras vitae scelerisque enim. Mauris tristique malesuada pharetra. Aenean consectetur rhoncus sem ac vehicula. Nam id sapien arcu.

Maecenas et maximus nibh, vitae porta turpis. Proin a fermentum turpis. Ut non eros id est eleifend egestas id ac ipsum. Fusce nisi augue, fringilla ac pulvinar quis, accumsan nec eros. Cras sit amet vulputate elit, ut laoreet magna. Phasellus ut mauris neque. Pellentesque ac aliquet sapien. Quisque blandit dictum libero, eget varius ante imperdiet at.`;

const windowSize = 200;    // how many chars to show
let pos = 0;

function rollText() {
  let snippet = text.slice(pos, pos + windowSize);
  if (snippet.length < windowSize) {
    snippet += text.slice(0, windowSize - snippet.length);
  }
  el.textContent = snippet;
  pos = (pos + 1) % text.length;
}

// kick it off & update every 150ms (adjust speed as you like)
rollText();
setInterval(rollText, 150);