var first = 0;
var second = 0;
var output = 0;

function add(){
    first = document.getElementById("input1").value;
    second = document.getElementById("input2").value;
    output =  Number(first)+Number(second);
    document.getElementById("answer").innerHTML = output;
}

function minus(){
    first = document.getElementById("input1").value;
    second = document.getElementById("input2").value;
    output = first-second;
    document.getElementById("answer").innerHTML = output;
}

function multiply(){
    first = document.getElementById("input1").value;
    second = document.getElementById("input2").value;
    output = first*second;
    document.getElementById("answer").innerHTML = output;
}

function divide(){
    first = document.getElementById("input1").value;
    second = document.getElementById("input2").value;
    output = first/second;
    document.getElementById("answer").innerHTML = output;
}