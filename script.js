const paragraph = [
    "JavaScript is a powerful scripting language used to make web pages interactive.",
    "Variables in JavaScript can be declared using var, let, or const.",
    "Functions help you reuse blocks of code and make programming easier.",
    "JavaScript can manipulate HTML and CSS to create dynamic websites.",
    "The Document Object Model (DOM) connects web pages to scripts.",
    "An array is a special variable that can hold more than one value at a time.",
    "Loops like for and while help in running code multiple times easily.",
    "Events like click, mouseover, and submit can trigger JavaScript functions.",
    "JavaScript supports object-oriented programming with objects and classes.",
    "Promises and async/await are used for handling asynchronous operations.",
    "JavaScript frameworks like React, Angular, and Vue are popular today.",
    "A closure gives you access to an outer function's scope from an inner function.",
    "Arrow functions are a shorter way to write functions in JavaScript.",
    "Template literals allow you to embed variables inside strings easily.",
    "JavaScript can fetch data from APIs using fetch or XMLHttpRequest."
];

const item = document.getElementById("items");

const dataContainer = document.getElementById("data");


function shuffle(array){
    let current =  array.length;
    let randomIndex;
    while(current!=0){
        randomIndex = Math.floor(Math.random()*current);
        current--;

        [array[current],array[randomIndex]] = [
            array[randomIndex], array[current]
        ];
    }
    return array;
}


function generate(){
    if(item.value==0){
        alert("Your value cannot be 0");
    }
    else if(item.value> paragraph.length){
        const randomIndex = Math.floor(Math.random()*paragraph.length);
        dataContainer.innerHTML = `${paragraph[randomIndex]}`;
    }
    else{
        const shuffleParagraphs = paragraph;
        shuffle(paragraph);

        const selectedParagraph= shuffleParagraphs.slice(0,item.value);
        const paraHtml = selectedParagraph.map(paragraph=>`<p>${paragraph}</p>`).join("");

        dataContainer.innerHTML = paraHtml;
    }
}