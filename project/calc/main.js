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


// function dot() {
//     let opb_c = opb.innerHTML;
//     if (opb_c.indexOf(".") === -1) {
//         opb.innerHTML += ".";
//     } else {
//         opb.innerHTML += "";
//     }
// }

function dot() {  
    let opb_c = opb.innerHTML;  
    // 分割显示屏内容，获取最后一部分（假设操作数和操作符之间用空格分隔）  
    let parts = opb_c.split(/[\+\-\*\//%]/);
    let lastPart = parts[parts.length - 1];  
      
    // 如果最后一部分不包含小数点，则添加小数点  
    if (lastPart.indexOf(".") === -1) {  
        opb.innerHTML += ".";  
    }  
    // 否则不做任何操作，因为已经有一个小数点了  
}

// function dot() {
//     // 获取当前输入框的内容
//     let opb_c = opb.innerHTML;
    
//     // 按照运算符分割输入字符串为数组
//     let parts = opb_c.split(/[\+\-\*\//%]/);

//     // 获取最后一个操作数
//     let lastOperand = parts.pop();

//     // 判断最后一个操作数是否含有小数点
//     if (lastOperand.indexOf(".") === -1) {
//         // 如果没有小数点，则添加一个小数点到操作数末尾
//         lastOperand += ".";
//     } else {
//         // 如果已经有小数点，则不进行任何操作
//         return;
//     }

//     // 将更新后的最后一个操作数放回数组
//     parts.push(lastOperand);

//     // 重新组合成字符串，运算符位于相邻操作数之间
//     opb.innerHTML = parts.join('');
// }
