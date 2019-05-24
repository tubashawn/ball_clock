

// let submitButton = document.getElementById("submit-button"),
//     output = document.getElementById("output"),
//     numberInput = document.getElementById("number-input"),
//     minutes = [1, 2, 3, 4, 5];



// submitButton.addEventListener("click", function() {
//     alert("This worked");
// });


// let i = 0;
// let minuteChanger = minutes[i];
// if(output.textContent === "Test") {
//     output.innerText = minuteChanger;
//     i++;
// } else if(output.textContent === minutes[4]) {
//     i = 0;
//     output.innerText = minuteChanger;
// } else {
//     i++;
//     output.innerText = minuteChanger;
// }
let ballOrder = [];
let ballQueue = [];
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("empty-div");
let nextOutput = document.getElementById("next-div");

submit.addEventListener("click", function() {
  // output.textContent = "You entered " + input.value;
    arrayMaker();
    output.textContent = "You have put " + ballQueue.length + " balls into your clock";
    nextOutput.textContent = ballQueue[0];
    clock();
});

function arrayMaker() {
    let temp = input.value;
    for (let i = 0; i < temp; i++) {
    ballQueue.push(i);
    } 
}


function clock() {
    function hourRollback() {
        for (let l = 0; l < 12; l++) {
            let allTheWayBack = hours.pop();
            console.log("HOUR ROLLBACK " + hours.length);
            ballQueue.push(allTheWayBack);    
        }
    }
    ballQueue;
    let singles = [];
    let fives = [];
    let hours = [];
    let am = true;
    let days = 0;
    
    let addHour = fives.shift();
    
    for (let i = 0; i < 40000; i++) {
        
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
                // console.log("HOURS " + hours.length);
                for (let k = 0; k < 11; k++) {
                    let toTheBack = fives.pop();
                    ballQueue.push(toTheBack);
                }
                // console.log(ballQueue);
                if(hours.length === 12 && am === true) {
                    am = false;
                    hourRollback();
                    console.log("Is it morning? " + am);
                } else if (hours.length === 12 && am === false) {
                    am = true;
                    days++;
                    hourRollback();
                    console.log("Is it morning? " + am);
                    console.log("It has been " + days + " since you started your clock");
                }
                    console.log(ballQueue);
                    // days++;
                    // console.log("It's been " + days + " days since you started the clock");
                    // console.log(hours);
                    
                    // console.log(hours);
                    // console.log(ballQueue);
                
            }
        } else {
            // console.log(singles);
            let addSingle = ballQueue.shift();
            singles.push(addSingle);
        }
        
        // console.log(ballQueue.length + " + " + singles.length);
        // console.log(singles);
    }
}
