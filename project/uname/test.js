const test = {
    "file" : "Function Object",
    "SHE" : function () {
        console.log("Runner!");
    },
    "Hey" : {
        "To" : function () {
            console.log("Oh my ladygaga!");
        },
        "kE" : eval(console.log("Eval is yyds!"))
    }
}

let ks = test;

let ks1 = ks.SHE();

console.log(ks1);

let ks2 = ks.Hey.To();

console.log(ks2);

console.log(test.Hey.kE);