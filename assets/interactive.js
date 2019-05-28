// var now = require("performance-now");
// var start = now();
// var end = now();
// console.log(start.toFixed(3)); // the number of milliseconds the current node process is running
// console.log((start-end).toFixed(3)); // ~ 0.002 on my system

let ballOrder = [];
let ballQueue = [];
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("empty-div");
let nextOutput = document.getElementById("next-div");
let thirdOutput = document.getElementById("third-div");
let count = 0;
let days = 0;


submit.addEventListener("click", function() {
    let t1 = performance.now();
    
    output.textContent = "You have put " + input.value + " balls into your clock. ";
    
    arrayMaker();
    clock();
    let t2 = performance.now();
    
    let elapsed = (t2 - t1);
    
    nextOutput.textContent = "It took " + days + " days to cycle through the balls you put in the clock.";

    thirdOutput.textContent = "This calculation took " + elapsed.toFixed(2) + " milliseconds."

    
});

function arrayMaker() {
    let temp = input.value;
    for (let i = 0; i < temp; i++) {
    ballQueue.push(i);
    ballOrder.push(i);
    } 
}


function clock() {
    
    function hourRollback() {
        for (let l = 0; l < 12; l++) {
            let allTheWayBack = hours.pop();
            ballQueue.push(allTheWayBack);    
        }
    }

    ballOrder;
    ballQueue;
    let singles = [];
    let fives = [];
    let hours = [];
    let am = true;
    
    
    do {
        
        count++;
        if(singles.length === 4) {
            let addFive = ballQueue.shift();
            fives.push(addFive); 
            for (let j = 0; j < 4; j++) {
                let backOfTheLine = singles.pop();
                ballQueue.push(backOfTheLine);
            }

            if (fives.length === 11) {
                let addHour = ballQueue.shift();
                hours.push(addHour);
                for (let k = 0; k < 11; k++) {
                    let toTheBack = fives.pop();
                    ballQueue.push(toTheBack);
                }

                if(hours.length === 12 && am === true) {
                    am = false;
                    hourRollback();
                    // console.log("Good afternoon");
                } else if (hours.length === 12 && am === false) {
                    am = true;
                    days++;
                    hourRollback();
                    // console.log("Good morning");
                    // console.log("Is it morning? " + am);
                    // console.log("It has been " + days + " days since you started your clock");
                    
                }
            }
        } else {
            let addSingle = ballQueue.shift();
            singles.push(addSingle);
        }
    }
    while (ballOrder.toString() !== ballQueue.toString());
}


