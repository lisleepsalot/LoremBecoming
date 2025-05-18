function showInfo(identifier) {
  console.log('show identifier:', identifier);

  // Find the test data by matching the identifier
  const testData = dataTests.find(test => test.identifier === identifier);
  if (!testData) {
    console.warn('No data found for identifier:', identifier);
    return;
  }

  // Get the relevant DOM elements inside the floating window
  const floatingWindow = document.querySelector('.floating-window');
  if (!floatingWindow) return;

  const titleEl = floatingWindow.querySelector('.content span');
  const descriptionEl = floatingWindow.querySelector('.description');
  const imageEl = floatingWindow.querySelector('.image img');
  const headingSpan = floatingWindow.querySelector('.heading span');

  // Populate the content
  titleEl.textContent = testData.title;
  descriptionEl.textContent = testData.description;
  imageEl.src = testData.image;
  imageEl.alt = testData.title;
  headingSpan.textContent = `test ${testData.index.toString().padStart(2, '0')}`;
}