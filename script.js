
console.log("script started");

function start() {
    console.log("clicking clicking");
    setTimeout(createCircle, 250, 1);
    setTimeout(createCircle, 500, 2);
    setTimeout(createCircle, 1000, 3)
    
}

function createCircle(num) {
    //create a div fir the circle 
    let circle = document.createElement("div");


    //set some text and style
    circle.innerText = num;


    
    
    circle.style.backgroundColor = "red";
    circle.style.color = "yellow";
    circle.style.border = "5px orange";
    circle.style.borderRadius = "50px";
    circle.style.width = "67px";
    circle.style.height = "67px";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    //position circle randomely using absolute
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";
    
    
     //add to the page 
    document.body.appendChild(circle);

    //make it clickable 
    Element.addEventListener("click", checkForRemove);
}

function getRandomX() {
    let randX = Math.random() * (window.innerWidth - 100);
    return randX;
}

function getRandomY() {
    let randY = Math.random() * (window.innerHeight - 100);
    return randY;
}

//check for the right choice and remove it

function checkForRemove(event) {
    console.log(circle.innertText);
    let circle = event.target;




}

