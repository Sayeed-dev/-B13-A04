// Tracking Area Selectors
let total = document.getElementById('total-counter');
let interview = document.getElementById('interview-counter');
let rejected = document.getElementById('rejected-counter');

// Toggle Button Area Selectors
const toggleContainer = document.querySelector('.toggle-buttons');

// Cards Selector
const cardsContainer = document.querySelector('.cards');

//--------------------------
//--------------------------

// Empty Arrays
let interviewCollection = [];
let rejectedCollection = [];

// Fuction
function Count() {
  total.innerText = cardsContainer.children.length;
  interview.innerText = interviewCollection.length;
  rejected.innerHTML = rejectedCollection.length;
}
Count();

// Functionality for Toggle Buttons
for (const button of toggleContainer.children) {
  button.addEventListener('click', function () {
    for (const btn of toggleContainer.children) {
      btn.classList.remove('bg-blue-950', 'text-blue-50');
      btn.classList.add('text-blue-950', 'bg-blue-50');
    }
    button.classList.remove('text-blue-950', 'bg-blue-50');
    button.classList.add('bg-blue-950', 'text-blue-50');
  });
}
