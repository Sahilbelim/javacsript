var root = document.getElementById("root");
root.innerHTML = " first message from external file <br> ";

var message = "second message from external file <br>";
root.innerHTML += message;
var num1 = parseInt(prompt("Enter number 1"));
var num2 = parseInt(prompt("Enter number 2"));
var add = num1 + num2;
root.innerHTML += "addition is " + add;
// concatination


// document.getElementById("root").innerHTML = " first message from external file <br> ";

// var message = "second message from external file <br>";
// document.getElementById("root").innerHTML += message;
// var num1 = parseInt(prompt("Enter number 1"));
// var num2 = parseInt(prompt("Enter number 2"));
// var add = num1 + num2;
// document.getElementById("root").innerHTML += "addition is " + add;
// // concatination


// get value from html output  tag using innerhtml
var header_value = document.getElementById("heading").innerHTML;
console.log(header_value);