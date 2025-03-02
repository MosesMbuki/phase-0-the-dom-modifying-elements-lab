// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the <h1> element
newHeader.textContent = 'Tess is the champion';

// Append the <h1> element to the body
document.body.appendChild(newHeader);