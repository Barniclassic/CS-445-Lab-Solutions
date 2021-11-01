onload = function(){
    let body = document.getElementById("body");
    let input1 = document.createElement("textarea");
    input1.id = "input1";
    input1.placeholder = "insert a number"
    let input2 = document.createElement("textarea");
    input2.id = "input2";
    input2.placeholder = "insert a number";
    let input3 =  document.createElement("textarea");
    input3.id = "input3";
    let button = document.createElement("input");
    button.type = "button";
    button.value = "Submit"
    button.id = "button";
    body.appendChild(input1);
    body.appendChild(input2);
    body.appendChild(button);
    body.appendChild(input3);
    document.getElementById("button").addEventListener("click", function(){
        let num1 = document.getElementById("input1").value;
        let num2 = document.getElementById("input2").value;
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
        else{
        document.getElementById("input3").value = parseInt(num1) + parseInt(num2);
        }
    })
    
}
