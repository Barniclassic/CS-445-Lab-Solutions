"use strict";
onload = function () {
    var body = document.getElementById("body");
    var title = document.createElement("h1");
    title.appendChild(document.createTextNode("Calculator"));
    var input1 = document.createElement("textarea");
    input1.id = "input1";
    input1.placeholder = "insert a number";
    var input2 = document.createElement("textarea");
    input2.id = "input2";
    input2.placeholder = "insert a number";
    var input3 = document.createElement("textarea");
    input3.id = "input3";
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Submit";
    button.id = "button";
    body.appendChild(title);
    body.appendChild(input1);
    body.appendChild(document.createTextNode('  '));
    body.appendChild(input2);
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
    body.appendChild(button);
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
    body.appendChild(input3);
    document.getElementById("button").addEventListener("click", function () {
        var num1 = document.getElementById("input1").value;
        var num2 = document.getElementById("input2").value;
        if (!Number(num1)) {
            alert("The value you enter must be a number.");
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
        }
        else if (!Number(num2)) {
            alert("The value you enter must be a number.");
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
        }
        else {
            document.getElementById("input3").value = parseInt(num1) + parseInt(num2);
        }
    });
};
