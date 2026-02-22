// Tracking Area Selectors
let total = document.getElementById('total-counter');
let interview = document.getElementById('interview-counter')
let rejected = document.getElementById('rejected-counter')

// Toggle Button Area Selectors
const toggleContainer = document.querySelector('.toggle-btn-area')

// Cards Selector
const cardsContainer = document.querySelector('.cards')


//--------------------------
//--------------------------

// Empty Arrays
let interviewCollection = []
let rejectedCollection = []

// Fuction
function Count () {
  total.innerText = cardsContainer.children.length
  interview.innerText = interviewCollection.length
  rejected.innerHTML = rejectedCollection.length
}
Count()