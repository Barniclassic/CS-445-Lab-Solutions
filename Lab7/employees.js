window.onload = function () {
  employeesList();
  document.getElementById("btn").onclick = employeesList;
};

async function employeesList() {
  let promise = await fetch("https://randomuser.me/api/?results=10");
  let after = await promise.json();
  let employee = after.results;
  let row = document.getElementById("row");
  row.innerHTML = "";
  for (let i = 0; i < employee.length; i++) {
    let div1 = document.createElement("div");
    div1.classList = "col-md-2";
    let img = document.createElement("img");
    img.classList = "text-left";
    img.src = employee[i].picture.large;
    div1.appendChild(img);
    row.appendChild(div1);
    let div2 = document.createElement("div");
    div2.classList = "col-md-10";
    let divName = document.createElement("div");
    divName.classList = "text-end text-uppercase font-weight-bold";
    divName.innerHTML = employee[i].name.first + " " + employee[i].name.last;
    let divPhone = document.createElement("div");
    divPhone.classList = "text-end";
    divPhone.innerHTML = employee[i].phone;
    let divEmail = document.createElement("div");
    divEmail.classList = "text-end";
    divEmail.innerHTML = employee[i].email;
    let hr = document.createElement("hr");
    div2.appendChild(divName);
    div2.appendChild(divPhone);
    div2.appendChild(divEmail);
    row.appendChild(div2);
    row.appendChild(hr);
  }
}
