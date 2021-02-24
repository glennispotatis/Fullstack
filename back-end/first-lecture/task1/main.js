function showMore(art, btn){
    let article = document.getElementById(art);
    let button = document.getElementById(btn);
    article.style.display = "block";
    button.style.display = "none";
}

function showLess(art, btn){
    let article = document.getElementById(art);
    let button = document.getElementById(btn);
    article.style.display = "none";
    button.style.display = "block";
}