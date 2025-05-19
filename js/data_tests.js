const dataTests = [
  {
    index: 1,
    image: 'assets/test_cover1.webp',
    title: 'Echo Ipsum',
    identifier: 'echoipsum',
    description: `What begins as filler becomes message, then filler again—a cycle of becoming and unbecoming.`,
    instruction: `Speak and watch.`
  },
  {
    index: 2, 
    image: 'assets/test_cover2.jpg',
    title: 'Echo Iterator1',
    identifier: 'iterator',
    description: `Iterate lorem ipsum based on the volume`,
    instruction: ``
  },
  {
    index: 3, 
    image: 'assets/test_cover3.png',
    title: 'Selected Text',
    identifier: 'selected',
    description: `Your second item’s description here…`,
    instruction: ``
  },
  {
    index: 4,
    image: 'assets/test_cover4.webp',
    title: 'Column Iterator',
    identifier: 'columnIterator',
    description: `Your second item’s description here…`,
    instruction: ``
  },
  {
    index: 5,
    image: 'assets/test_cover5.gif',
    title: 'Grid Maker 1',
    identifier: 'gridMaker1',
    description: `Translate dummy text into different languages?`,
    instruction: ``
  },
  {
    index: 6, 
    image: 'assets/test_cover6.png',
    title: 'Grid Maker 2',
    identifier: 'gridMaker2',
    description: `Your second item’s description here…`,
    instruction: ``
  },
  {
    index: 7,
    image: 'assets/test_cover1.webp',
    title: 'Type Ipsum',
    identifier: 'gridMaker1',
    description: `Your second item’s description here…`,
    instruction: ``
  },
  {
    index: 8,
    image: 'assets/test_cover1.webp',
    title: `Designer's Hand`,
    identifier: 'gridMaker1',
    description: `Your second item’s description here…`,
    instruction: ``
  },
  {
    index: 10,
    image: 'assets/test_cover1.webp',
    title: 'Smart Text1',
    identifier: 'gridMaker1',
    description: `Putting Lorem Ipsum in situations`,
    instruction: ``
  },
  {
    index: 11,
    image: 'assets/test_cover1.webp',
    title: 'Smart Text2',
    identifier: 'gridMaker1',
    description: `Making Lorem Ipsum into reasonable text anytime`,
    instruction: ``
  },
  {
    index: 12,
    image: 'assets/test_cover1.webp',
    title: 'Type Ipsum',
    identifier: 'gridMaker1',
    description: `Your second item’s description here…`,
    instruction: ``
  }
];

const originalWords = [];

lorem.split(" ").forEach((word, idx) => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  span.classList.add("word");
  span.dataset.index = idx;
  originalWords[idx] = word;
  container.appendChild(span);
});

document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedNodes = [];

  const walker = document.createTreeWalker(range.commonAncestorContainer, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      if (node.classList && node.classList.contains("word") && range.intersectsNode(node)) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    }
  });

  let currentNode = walker.currentNode;
  while (currentNode) {
    selectedNodes.push(currentNode);
    currentNode = walker.nextNode();
  }

  selectedNodes.forEach((node) => {
    const idx = node.dataset.index;
    node.dataset.original = originalWords[idx];
    node.textContent = '8'.repeat(originalWords[idx].length) + ' ';
  });

  setTimeout(() => {
    selectedNodes.forEach((node) => {
      node.textContent = node.dataset.original + ' ';
    });
  }, 200);

  selection.removeAllRanges();
});