
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslationURL(input){
return serverURL + "?" + "text=" + input
}

function errorHandler(error) {

    console.log("error occured", error);
    alert("Something is wrong. Try again in some time!")
}

function clickHandler() {

var inputText = txtInput.value; // take input

//calling server for processing
      fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
      .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler);
