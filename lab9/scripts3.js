var first = 0;
var second = 0;
var output = 0;

function add(){
    first = document.getElementById("input1").value;
    second = document.getElementById("input2").value;
    output = first+second;
    document.getElementById("answer").innerHTML = output;
}