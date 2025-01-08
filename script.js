const pages = [
  { content: 'Hello 👋', gif: 'gif1.gif', next: true, prev: false },
  { 
    content: 'Kesi hai ap👉🏻👈🏻??? Sach sach batana😿', 
    gif: 'gif2.gif', 
    options: ['Thik hoon❤', 'ekdum bindass hoon❤'] 
  },
  { content: 'I know, ap ko thora dukh diya hai mene🤕', gif: 'gif3.gif', next: true, prev: true },
  { 
    content: 'Kya ap mujhe maaf karengi❤???', 
    gif: 'gif4.gif', 
    options: ['Yes', 'No'],
    handleOption: (option) => {
      if (option === 'Yes') {
        currentPage = 4; // Yes flow starts from page 5
        renderPage(currentPage);
      } else if (option === 'No') {
        moveNoButton();
      }
    } 
  },
  { content: 'Thank you, apko ek reward milega worth 7 crore.', gif: 'gif5.gif', next: true, prev: true },
  { content: 'Itni jaldi nhi, apko thora mehenat krna parega😇', gif: 'gif6.gif', next: true, prev: true },
  { content: 'Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.', gif: 'gif7.gif', next: true, prev: true },
  { content: 'Choose the most beautiful flower', gif: 'flower.gif', next: true, prev: true },
  { content: 'Heheheheh😂, Galat jawab😗...', gif: 'laugh.gif', next: true, prev: true },
  { content: 'Sahi jawab hai...', gif: 'correct.gif', next: true, prev: true },
  { content: 'Ji bilkul sahi samjhe, Ap he ho cutie🎀😚', gif: 'gif8.gif', next: true, prev: true },
  { content: 'Kya ap gift ke liye taiyar hai???', gif: 'ready.gif', options: ['Yes'] },
  { content: 'Ye lijiye mera dil❤, It is worth 7Cr. Just for you😊', gif: 'gif9.gif', next: true, prev: true },
  { content: 'Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞', gif: 'gif10.gif', next: true, prev: true },
  { content: 'Areee, itni jaldi bhi kya hai???', gif: 'gif11.gif', next: true, prev: true },
  { content: 'Aj apne bohot mehenat krke exam diya hai🥺💯', gif: 'gif12.gif', next: true, prev: true },
  { content: 'Ye lijiye apke liye ek chocolate 😋🍫', gif: 'chocolate.gif', next: true, prev: true },
  { content: 'Ohhh, aur ek chiz', gif: 'gif13.gif', next: true, prev: true },
  { content: 'Meri pyari si fool ke liye pyara sa phool🌺😊', gif: 'flower.gif', next: true, prev: true },
  { content: 'I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤', gif: 'gif14.gif', next: false, prev: true },
];

let currentPage = 0;

function renderPage(index) {
  const app = document.getElementById('app');

  if (index < 0 || index >= pages.length) {
    console.error('Invalid page index');
    return;
  }

  const page = pages[index];
  app.innerHTML = `
    <div>
      <img src="${page.gif}" alt="GIF" class="gif">
      <p>${page.content}</p>
      ${page.options ? renderOptions(page.options, page.handleOption) : ''}
      <div class="navigation">
        ${page.prev ? `<button onclick="navigate(-1)">Previous</button>` : ''}
        ${page.next ? `<button onclick="navigate(1)">Next</button>` : ''}
      </div>
    </div>
  `;
}

function renderOptions(options, handler) {
  return options.map((option, i) => {
    if (option === 'No') {
      return `<button class="no-btn" onclick="handleOption(${i})">${option}</button>`;
    }
    return `<button onclick="handleOption(${i})">${option}</button>`;
  }).join('');
}

function moveNoButton() {
  const noButton = document.querySelector('.no-btn');
  if (noButton) {
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * 300}px`;
    noButton.style.left = `${Math.random() * 300}px`;
  }
}

function navigate(direction) {
  currentPage += direction;
  renderPage(currentPage);
}

function handleOption(optionIndex) {
  const page = pages[currentPage];
  if (page.handleOption) {
    page.handleOption(page.options[optionIndex]);
  } else {
    navigate(1);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderPage(currentPage);
});