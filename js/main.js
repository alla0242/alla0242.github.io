//3 fetch calls
//1 for catlist.js
//1 for catimages
//1 for cat category
//when an image is called load it onto the page and assign an ID from catlist.js to it, then create a new object with a random name from catlist.js and id from catimages. Add the new object onto an array.
//local storage
//store new array in local storage.


//TODO: Fetch catnames and add it into it's own variable 

//TODO: get new array string from local storage and make it into object

//TODO: fetch cat api breeds
import pickRandomName from './catlist.js';
import {catnames} from './catlist.js';
let catnamesLocal = catnames;
let catlist = [];
let catlistID = [];
let catlistURL = [];
let usedNames = [];


//build dropdown menu with breeds items

fetch('https://api.thecatapi.com/v1/breeds')
  .then((response) => response.json())
  .then(document.getElementById('catbreed').innerHTML = '<option id="selectedBreed">Please pick a cat breed</option> ')
  .then((data) =>
  data.forEach(item => {document.getElementById('catbreed').innerHTML += `<option value="${item.id}" id="listItem">${item.name}</option>`; console.log(item.id);
  }))

//TODO: On breed select fetch breed api then check if image id has a name:ID pair in local storage then set images into grid 

let onChange = document.getElementById('catbreed');
onChange.addEventListener('change',breedSelected);

function breedSelected(){
let listItem = document.getElementById('catbreed').value;
let imageURL = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${listItem}&api_key=live_XCxSoXTwJd37ntgnnlSFOwnr2JfxcntoApaId1aJfU3ViwsfsgGVoYs7Ol0J8mVe`;
    fetch(imageURL)
    .then(document.getElementById('list').innerHTML = ``)
    .then(console.log(catlist))
    .then((response) => response.json())
    .then((data) => data.forEach((item) => 
    
    {   
        let catlistSerialized = JSON.stringify(catlist);
        localStorage.setItem("catlist",catlistSerialized);
        let catlistIDSerialized = JSON.stringify(catlistID);
        localStorage.setItem("catlistID",catlistIDSerialized);
        let usedNamesSerialized = JSON.stringify(usedNames);
        localStorage.setItem("usedNames",usedNamesSerialized);
        let catlistURLSerialized = JSON.stringify(catlistURL);
        localStorage.setItem("catlistURL",catlistURLSerialized);
        console.log(catlistID.indexOf(item.id));
        if(catlistSerialized.includes(item.id.toString())){document.getElementById('list').innerHTML += `<img class="image" src="${catlistURL[catlistID.indexOf(item.id)]}" alt=${usedNames[catlistID.indexOf(item.id)]} id="${usedNames[catlistID.indexOf(item.id)]}">`}else //change  first part to read from local storage
            //find index of item.id in catlist
        // if(catlist.includes(item.id)){console.log('this name is taken')}else        

        // if(catNamePicked == catlist.includes(catNamePicked)){let name123 = catlist.findIndex(catNamePicked.toString.valueOf)
        //     ;console.log(name123)
        //     ;document.getElementById('list').innerHTML += `<img class="image" src="${catlist[name123].url}" alt=${catlist[name123].name}>`};

        // if(catNamePicked == undefined){console.log(`no more names`)}else //SET ERROR MESSAGE HERRE
        if((catlistID.indexOf(item.id) == -1)){
            
            let catNamePicked = pickRandomName();
            
        usedNames.unshift(catNamePicked);
        catlist.unshift({id : item.id,catName : catNamePicked, url : item.url});
        catlistID.unshift(item.id);
        catlistURL.unshift(item.url);
        console.log(((catNamePicked)))

        document.getElementById('list').innerHTML += `<img class="image" src="${catlist[0].url}" alt=${catNamePicked}>`};
    }))
    //STORE CATLIST AS LOCAL STORAGE STRING BELOW
    .then(console.log(catlistID)
)
    .then(console.log(catnamesLocal))
    .then(console.log(catlist))
    .then(console.log(usedNames));
};



//TODO: Get image id's and set names in array


//TODO: Save new array in local storage

//TODO: 

//TODO: 



// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("x-api-key", "live_cWPQiuY5HNEiWsa0ZbP94gwUEqnpSHp8Ebd444SkAx3L6sm5XzHAPiDnrfMIC0Vh");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };



// fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=30", requestOptions)
//   .then(response => response.json())
//   .then(result => {console.log(result);console.log(result[1].id)})
//   .then()
//   //push id and imageurl() to new array
//   .catch(error => console.log('error', error));

// fetch("")