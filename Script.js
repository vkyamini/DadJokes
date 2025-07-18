var API = 'https://icanhazdadjoke.com/';
let SearchAPI = 'https://icanhazdadjoke.com/search?term=${inputsearch}';
var header = document.querySelector('#header');
var jokes_display = document.querySelector("#jokes_display");
var fetchButton = document.querySelector("#fetchButton");
var searchJokes = document.querySelector('#searcbutton'); 
var input = document.getElementById('input');
let inputsearch;

jokes_display.classList.add('jokes_display');


function getJokes(){
    console.log("jokes");
    fetch(API, {
        headers: { Accept: "application/json" }
      })
    .then(function(response){
        return response.json();
    }).then(function(data){
        jokes_display.innerHTML = "";
        var jokesdis = document.createElement('p');
        jokes_display.append(jokesdis);
        jokesdis.setAttribute("style","text-align: center; color: chocolate; font-size: 17px;  margin-top: 10px;");
        jokesdis.textContent =" 🤣💀 " + data.joke;
    })
}
fetchButton.addEventListener("click",getJokes);

searchJokes.addEventListener("click",()=>{
    inputsearch=input.value;
    getInput();
});

   
function getInput(){ // incase if we want to search by input
   
    fetch('https://icanhazdadjoke.com/search?term='+inputsearch,{
        headers: { Accept: "application/json" }
      })
    .then(function(response){
        return response.json();
    }).then(function(data){
        jokes_display.innerHTML = "";
        console.log("search",data)
        var p = document.createElement('p');
        p.setAttribute("style","text-align: center; color: black;");
        p.innerHTML ="Joke's on: 😬 "+data.search_term.toUpperCase();
        jokes_display.append(p);
        var results = data.results;
        
        if(data.results.length > 0){
            var displaycard = document.createElement("div")
            jokes_display.append(displaycard);
            displaycard.classList.add('displaycard')
            results.forEach(
                (ele,index) => {
                var jokesdis = document.createElement('p');
                displaycard.append(jokesdis);
                jokesdis.setAttribute("style"," color: chocolate;");
                jokesdis.innerHTML = index+1 + ". " +ele.joke;
                console.log(ele,index)
            });
        }else{
            jokes_display.setAttribute("style"," text: chocolate; text-align: center;");
            jokes_display.innerHTML = `OOps 💩 !! No jokes found on ${inputsearch}`
        }
    })
}


/**
 * 1. Get value of the input field.
 * 2. Create an event listener for on-click search button
 * 3. Create a function that's called on-click which takes the input field value and appends it to the API endpoint
 */


