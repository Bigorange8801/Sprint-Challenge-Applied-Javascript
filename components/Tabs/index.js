// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


    function createTabs(arr){
        const tab =document.createElement('div');

        tab.classList.add('tab');

        tab.textContent = arr;

        return tab;
    }

   
    axios 
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res =>{
        topicsArr= res.data.topics;
        console.log('testing for ', topicsArr)
        topicsArr.forEach(data =>{
            console.log('data: ', data);
            const newTab = createTabs(data);
            const topicsContainer= document.querySelector('.topics');
            topicsContainer.appendChild(newTab);
        })
    ;

    })
    .catch(err => {
        console.group('Failure', err);
    });