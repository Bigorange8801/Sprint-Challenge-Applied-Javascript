// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



let createCards = document.querySelector('.cards-container')
axios 
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response =>{
        console.log('here is your data',response.data.articles);
        
        const keys = Object.keys(response.data.articles)
        for (const key of keys){
           
            response.data.articles[key].forEach(e =>{
                console.log('e',e);
                const newCard = createArticle(e.authorName,e.authorPhoto,e.headline);
                createCards.append(newCard);
            })
        }
        console.log('keys',keys);
        

      
    })
    .catch(error => {
        console.log('Data Failure', error);
    });

    function createArticle(authorName, authorPhoto, headline){
        const mainCard = document.createElement('div');
        const mainHeadline = document.createElement('div');
        const mainAuthor = document.createElement('div');
        const imageContainer = document.createElement('div');
        const mainImage = document.createElement('img');
        const byAuthor = document.createElement('span');

        

        mainCard.classList.add('card');
        mainHeadline.classList.add('headline');
        mainAuthor.classList.add('author');
        imageContainer.classList.add('img-container');
    
        

        mainCard.appendChild(mainHeadline);
        mainCard.appendChild(mainAuthor);
        mainCard.appendChild(byAuthor);
        mainAuthor.appendChild(imageContainer); 
        imageContainer.appendChild(mainImage);

        

        mainHeadline.textContent = headline;
        mainImage.src = authorPhoto;
        byAuthor.textContent = `By: ${authorName}`;

        return mainCard;
    }