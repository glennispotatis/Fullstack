const myText = "This is some text that I want to work with";

console.log(myText);

const myTextJSON = JSON.stringify(myText);

console.log(myTextJSON);

const myArray = [1, 2, 3, 4, 5];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

const myArrayJSON = JSON.stringify(myArray);

for(let i = 0; i < myArrayJSON.length; i++){
    console.log(myArrayJSON[i]);
}

const myArrayObject = JSON.parse(myArrayJSON);

console.log(myArrayObject);
console.log(myArrayObject.length);