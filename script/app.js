// Empty Arrays
let interviewCollection = [];
let rejectedCollection = [];

// Tracking Area Selectors
let total = document.getElementById('total-counter');
let interview = document.getElementById('interview-counter');
let rejected = document.getElementById('rejected-counter');

// Toggle Button Area Selectors
const toggleContainer = document.querySelector('.toggle-buttons');

const cardsContainer = document.querySelector('.cards');

//--------------------------
//--------------------------

// Fuction
function Count() {
  total.innerText = cardsContainer.children.length;
  interview.innerText = interviewCollection.length;
  rejected.innerHTML = rejectedCollection.length;
}
Count();

// all selected rejected - selectors
const allSection = document.querySelector('.cards');
const selectedSection = document.querySelector('.selected');
const rejectedSection = document.querySelector('.rejected-area');

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

// State Hide/Reveal Function

function stateToggle(id) {
  if (id == 'all') {
    allSection.classList.remove('hidden');
    selectedSection.classList.add('hidden');
    rejectedSection.classList.add('hidden');
  } 
  else if (id == 'interview') {
    allSection.classList.add('hidden');
    selectedSection.classList.remove('hidden');
    rejectedSection.classList.add('hidden');
  } 
  else if (id == 'rejected') {
  allSection.classList.add('hidden');
  selectedSection.classList.add('hidden');
  rejectedSection.classList.remove('hidden');
  }
}

// Interview Call Push
cardsContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('interview-btn')) {
    const cardParent = event.target.parentNode.parentNode;
    const companyName = cardParent.querySelector('.company').innerText;
    const status = (cardParent.querySelector('.status').innerHTML = 'Selected');

    const cardInfo = { companyName, status };

    const isExist = interviewCollection.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!isExist) {
      interviewCollection.push(cardInfo);
    }
    interviewRender();
    Count();
  }

  // Rejected Application Push 

  else {
      if (event.target.classList.contains('rejected-btn')) {
    const cardParent = event.target.parentNode.parentNode;
    const companyName = cardParent.querySelector('.company').innerText;
    const status = (cardParent.querySelector('.status').innerHTML = 'Rejected');

    const cardInfo = { companyName, status };

    const isExist = interviewCollection.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!isExist) {
      rejectedCollection.push(cardInfo);
    }
    rejectionRender()
    Count();
  }
  }
});

// Selected & Rejected Application Rendering

function interviewRender() {
  selectedSection.innerHTML = '';
  for (const selectedApplication of interviewCollection) {
    let newDiv = document.createElement('div');
    newDiv.className = 'cards mt-8';
    newDiv.innerHTML = `
      <div
          class="card max-w-full p-6 bg-blue-50 shadow-md rounded-md flex justify-between"
        >
          <div class="left">
            <h2 class="company">${selectedApplication.companyName}</h2>
            <p class="designation">React Native Developer</p>
            <p class="my-2 text-[14px] font-light">
              Remote • Full-time • $130,000 - $175,000
            </p>
            <span
              class="status text-[14px] font-semibold rounded py-1.5 px-3 bg-blue-950 text-blue-100"
            >
              ${selectedApplication.status}
            </span>
            <p class="details my-2.5 text-[14px] font-light">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <button class="btn-area">
              <button
                class="interview-btn text-[14px] font-semibold bg-[#2ecc71] py-1.5 px-3 rounded text-amber-50"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn text-[14px] font-semibold bg-[#e74c3c] py-1.5 px-3 rounded text-amber-50"
              >
                REJECTED
              </button>
            </button>
          </div>
          <button class="right p-2 rounded-full bg-blue-100 h-min">
            <i class="fa-solid fa-trash-can text-[#34495e] text-xl"></i>
          </button>
        </div>
    `;
    selectedSection.appendChild(newDiv);
  }
}


function rejectionRender() {
  rejectedSection.innerHTML = '';
  for (const rejectedApplication of rejectedCollection) {
    let newDiv = document.createElement('div');
    newDiv.className = 'cards mt-8';
    newDiv.innerHTML = `
      <div
          class="card max-w-full p-6 bg-blue-50 shadow-md rounded-md flex justify-between"
        >
          <div class="left">
            <h2 class="company">${rejectedApplication.companyName}</h2>
            <p class="designation">React Native Developer</p>
            <p class="my-2 text-[14px] font-light">
              Remote • Full-time • $130,000 - $175,000
            </p>
            <span
              class="status text-[14px] font-semibold rounded py-1.5 px-3 bg-blue-950 text-blue-100"
            >
              ${rejectedApplication.status}
            </span>
            <p class="details my-2.5 text-[14px] font-light">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <button class="btn-area">
              <button
                class="interview-btn text-[14px] font-semibold bg-[#2ecc71] py-1.5 px-3 rounded text-amber-50"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn text-[14px] font-semibold bg-[#e74c3c] py-1.5 px-3 rounded text-amber-50"
              >
                REJECTED
              </button>
            </button>
          </div>
          <button class="right p-2 rounded-full bg-blue-100 h-min">
            <i class="fa-solid fa-trash-can text-[#34495e] text-xl"></i>
          </button>
        </div>
    `;
    rejectedSection.appendChild(newDiv);
  }
}