onload = function(){
    let body = document.getElementById("body");
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", "swap");
    button.setAttribute("value", "SWAP");
    button.setAttribute("height", "20px")
    button.setAttribute("width", "50px");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let div = document.createElement("div");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.src = "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    img1.setAttribute("height", "600px");
    img1.setAttribute("width", "500px");
    img2.src = "https://i.pinimg.com/originals/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg";
    img2.setAttribute("height", "600px");
    img2.setAttribute("width", "500px");
    span1.appendChild(img1);
    span2.appendChild(img2);
    let array = [];
    array.push(span1);
    array.push(span2);
    div.appendChild(array[0]);
    div.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
    div.appendChild(button);
    div.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
    div.appendChild(array[1]);
    body.appendChild(div);
    document.getElementById("swap").addEventListener('click', function(){
        let value = array.pop();
        array.unshift(value);
        div.appendChild(array[0]);
        div.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
        div.appendChild(button);
        div.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
        div.appendChild(array[1]);
        body.appendChild(div);
        onload;
    })
}