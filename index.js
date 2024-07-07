// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
let newHeader = document.createElement('h1');

// Assign an id of 'victory' to the new <h1> element
newHeader.id = 'victory';

// Set the inner text of the new <h1> element
newHeader.innerHTML = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body or another element in the DOM
document.body.appendChild(newHeader);
