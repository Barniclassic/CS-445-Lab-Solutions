// class student {
//     private firstName: string; 
//     private lastName: string; 
//     private grades: number[];
//     constructor (firstName: string, lastName: string, grades: number[]){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grades = grades;
//     }

//     addGrade(grades: number){
//         this.grades.push(grades);
//     }

//     computeAverageGrade(){
//         let summed = this.grades.reduce((sum, item) => sum += item, 0);
//         return summed/this.grades.length;
//     }

// }

interface Employee {
    empId: string;
    calcMonthlyPay():number;
}


class Hourly implements Employee {
    constructor(public empId: string, public hourlyWage: number, public hoursPerWeek: number){
    }
    calcMonthlyPay():number{
        return this.hourlyWage * this.hoursPerWeek * 4;
    }
}

class Department {
    empId: string = 'Dept01';
    employees: Array<Employee> = [new Hourly("610001", 5, 6), new Hourly("610002", 6, 8), new Hourly("610003", 2, 5)];
    calcMonthlyAverageSalaryOfDepartment() {
    let sum = 0;
    for(let each of this.employees){
        sum += each.calcMonthlyPay();
    }
        return sum/this.employees.length;
    }
  
}

// console.log(Department.calcMonthlyAverageSalaryOfDepartment());
let obj = new Department();
console.log(obj.calcMonthlyAverageSalaryOfDepartment());
