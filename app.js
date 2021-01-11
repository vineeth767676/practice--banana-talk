


//linking from html
var input = document.querySelector("#txtInput");
var translate = document.querySelector("#btn");
var output = document.querySelector("#outputTxt");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json" ; //taking url

function getTranslatedUrl (input){
    return serverUrl + "?" + "text=" + input 
} // ? is a query parameter , and following are key value ,

function errorHandler(error){ //error handling
    alert("something wrong")
}

function clickHandler(){ //processing
   var inputTxt = input.value; //value read the text

    fetch(getTranslatedUrl (inputTxt)) //fetching api call
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        output.innerText = translatedTxt; //innerText writes the text
    })
    .catch(errorHandler)

}

translate.addEventListener("click" , clickHandler); //when click happens go to clickHandler function
