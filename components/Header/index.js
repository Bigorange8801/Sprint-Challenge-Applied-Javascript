// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const newHeader = document.querySelector('.header-container')
function Header() {
   const menuHeader = document.createElement('div');
   const headerDate = document.createElement('span');
   const headerTitle = document.createElement('h1');
   const headerTemp = document.createElement('span');

   menuHeader.classList.add('header');
   headerDate.classList.add('date');
   headerTemp.classList.add('temp');

   newHeader.append(menuHeader);

   menuHeader.appendChild(headerDate);
   menuHeader.appendChild(headerTitle);
   menuHeader.appendChild(headerTemp);


   headerDate.textContent = 'March 28, 2019';
   headerTitle.textContent = 'Lambda Times';
   headerTemp.textContent = '98°';


}
Header();
