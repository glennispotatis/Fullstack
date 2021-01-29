const staticArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var oldArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var oldList = document.getElementById('oldArray');
var newList = document.getElementById('newArray');

oldArray.forEach(element => {
    oldList.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
});

function pickRandom(){
    let number = Math.floor(Math.random() * oldArray.length);
    let item = oldArray[number];
    if(!oldArray.length) return;

    newList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
    oldArray.splice(number, 1);
}

function reset(){
    location.reload();
}