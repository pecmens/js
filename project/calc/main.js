let opt = document.querySelector("#t_show");
let opb = document.querySelector("#b_show");
//If Executed the function is over, screen values is locked and press
//any key to replace it with new values.
let flag = 0;

function press(key) {
    if (opb.innerHTML === "0" || flag === 1) {
        flag = 0;
        opb.innerHTML = key.innerHTML;
    } else if (opb.innerHTML.length > 8 && !(opb.innerHTML.indexOf("+") !== -1 || opb.innerHTML.indexOf("-") !== -1 || opb.innerHTML.indexOf("*") !== -1 || opb.innerHTML.indexOf("/") !== -1 || opb.innerHTML.indexOf("%") !== -1)) {
        opb.innerHTML += "";
        console.log("Values is Screen Overflow!")
    } else if (opb.innerHTML.length > 17) {
        opb.innerHTML += "";
    } else {
        opb.innerHTML += key.innerHTML;
    }
}

function clean() {
    opt.innerHTML = "";
    opb.innerHTML = "0";
    flag = 0;
}


function backspace() {
    opb.innerHTML = opb.innerHTML.slice(0, -1);
}


function executive() {
    let values = opb.innerHTML;
    opt.innerHTML = values;
    let result;
    try {
        result = eval(values);
        if (result.toString().indexOf(".") !== -1) {
            result = result.toFixed(4);
        }
    } catch (key) {
        result = "Error!";
    }
    opb.innerHTML = result;
    flag = 1;
}


function operator(key) {
    let last_input = opb.innerHTML.slice(-1);
    if (last_input === "+" || last_input === "-" || last_input === "*" || last_input === "/" || last_input === "%") {
        opb.innerHTML = opb.innerHTML.slice(0, -1) + key.innerHTML;
    } else {
        opb.innerHTML += key.innerHTML;
    }
    flag = 0;
}


function dot() {
    let opb_c = opb.innerHTML;
    if (opb_c.indexOf(".") === -1) {
        opb.innerHTML += ".";
    } else {
        opb.innerHTML += "";
    }
}

