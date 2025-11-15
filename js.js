window.onload = init;

function init(){
    let images = document.getElementsByTagName("img");
    for(i = 0; i < images.length; i++){
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj){
    let image = eventObj.target;
    let name = image.id;
    image.src = `${name}.jpg`;
}

function reblur(eventObj){
    let image = eventObj.target;
    let name = image.id;
    image.src = `${name}Blur.png`;
}





