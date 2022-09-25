let opt = document.querySelector("#t_show");
let opb = document.querySelector("#b_show");

function press(key) {
    if (opb.innerHTML === "0") {
        opb.innerHTML = key.innerHTML;
    } else {
        opb.innerHTML += key.innerHTML;
    }
}

function clean() {
    opt.innerHTML = "";
    opb.innerHTML = "0";
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
}


function operator(key) {
    let last_input = opb.innerHTML.slice(-1);
    if (last_input === "+" || last_input === "-" || last_input === "*" || last_input === "/" || last_input === "%") {
        opb.innerHTML = opb.innerHTML.slice(0, -1) + key.innerHTML;
    } else {
        opb.innerHTML += key.innerHTML;
    }
}


function dot() {
    let opb_c = opb.innerHTML;
    if (opb_c.indexOf(".") === -1) {
        opb.innerHTML += ".";
    } else {
        opb.innerHTML += "";
    }
}

