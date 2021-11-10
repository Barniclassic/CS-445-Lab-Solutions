// class student {
//     private firstName: string; 
//     private lastName: string; 
//     private grades: number[];
//     constructor (firstName: string, lastName: string, grades: number[]){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grades = grades;
//     }
var Hourly = /** @class */ (function () {
    function Hourly(empId, hourlyWage, hoursPerWeek) {
        this.empId = empId;
        this.hourlyWage = hourlyWage;
        this.hoursPerWeek = hoursPerWeek;
    }
    Hourly.prototype.calcMonthlyPay = function () {
        return this.hourlyWage * this.hoursPerWeek * 4;
    };
    return Hourly;
}());
var Department = /** @class */ (function () {
    function Department() {
        this.empId = 'Dept01';
        this.employees = [new Hourly("610001", 5, 6), new Hourly("610002", 6, 8), new Hourly("610003", 2, 5)];
    }
    Department.prototype.calcMonthlyAverageSalaryOfDepartment = function () {
        var sum = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var each = _a[_i];
            sum += each.calcMonthlyPay();
        }
        return sum / this.employees.length;
    };
    return Department;
}());
// console.log(Department.calcMonthlyAverageSalaryOfDepartment());
var obj = new Department();
console.log(obj.calcMonthlyAverageSalaryOfDepartment());
