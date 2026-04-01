const { captureOwnerStack } = require("react");

console.log("script started");

function start() {
    console.log(Math.random() * window.innerWidth);
    console.log("clicking clicking");
    createCircle();
}

function createCircle() {
    //create a div fir the circle 
    let circle = document.createElement("div");


    //set some text and style
    circle.innerText = "1";


    
    
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
    circle.style.left = getRandomX + "px";
    circle.style.top = getRandomY + "px";
    
     //add to the page 
    document.body.appendChild(circle);
}

function getRandomX() {
    let randX = Math.random() * window.innerWidth - 100;
    return randX;
}

function getRandomY() {
    let ranY = Math.random() * window.innerHeight - 100;
    return randY;
}


