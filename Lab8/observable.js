window.onload = function() {
    document.getElementById('btn').onclick = function() {
        let input = document.getElementById("input").value;
        employeeObservable(input);
    };    
}

async function employeeObservable(input) {
    let promise = await fetch("https://randomuser.me/api/?results=" + input);
    let after = await promise.json();
    let employee = after.results;
    let row = document.getElementById("row");
    row.innerHTML = "";

    const { from } = rxjs;
    const { map } = rxjs.operators;

    from(employee)
    .pipe(
        map(emp => {
            emp.name = emp.name.first + " " + emp.name.last
            emp.location.street = emp.location.street.number + " " + emp.location.street.name;
            emp.location.cityState = emp.location.city + " " + emp.location.state + " " + emp.location.country + " " + emp.location.postcode;
            return emp;
        })
    )
    .subscribe(emp => {
        let div1 = document.createElement("div");
        div1.classList = "col-md-6";
        let name = document.createElement("span");
        name.classList = "text-left";
        name.innerHTML = emp.name;
        let div2 = document.createElement("div");
        div2.classList = "col-md-6";
        let location = document.createElement("h4");
        location.classList = " text-capitalize font-weight-bold";
        location.innerHTML = "Location";
        let address = document.createElement("div");
        address.innerHTML = emp.location.street;
        let city = document.createElement("div");
        city.innerHTML = emp.location.cityState;
        let hr = document.createElement("hr");
        div1.appendChild(name);
        div2.appendChild(location);
        div2.appendChild(address);
        div2.appendChild(city);
        row.appendChild(div1);
        row.appendChild(div2);
        row.appendChild(hr);
    })
      
}