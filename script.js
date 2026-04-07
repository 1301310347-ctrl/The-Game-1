
console.log("script started");

//var to track current number 
let currentNum = 1;
let level = 1;

function start() {
    console.log("clicking clicking");
    
    startLevel1();
}

function startLevel1() {
    currentNum = 1;
    level = 1;
    setTimeout(createCircle, 250, 1);
    setTimeout(createCircle, 500, 2);
    setTimeout(createCircle, 1000, 3)
}

function startLevel2() {
    currentNum = 1;
    level = 2;
    setTimeout(createCircle, 250, 1);
    setTimeout(createCircle, 500, 2);
    setTimeout(createCircle, 1000, 3)
    setTimeout(createCircle, 1250, 4);
    setTimeout(createCircle, 1500, 5);
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
    circle.addEventListener("click", checkForRemove);
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
    let circle = event.target;
    console.log(circle.innertText);
    if (circle.innerText == currentNum) {
        circle.remove();
        currentNum++;
        if (currentNum == 4 && level == 1) {
            startLevel2();
        }
        else if (currentNum == 6 && level == 2) {
            startLevel2();
        }
    }




}

