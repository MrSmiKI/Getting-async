window.onload = init;

function showAnswer(eventObj){
    let image = eventObj.target;

    let name = image.id;
    image.src = `${name}.jpg`
}

function init(){
    let images = document.getElementsByTagName("img");
    for(i = 0; i < images.length; i++){
        images[i].onclick = showAnswer;
    }
}

