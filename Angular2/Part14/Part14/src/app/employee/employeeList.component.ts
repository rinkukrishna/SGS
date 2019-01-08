import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers:[EmployeeService]
})
export class EmployeeListComponent {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    constructor(private _employeeService: EmployeeService) {
        this.employees = this._employeeService.getEmployees();
    }

    getEmployee(): void {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '25/6/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '14/10/1980'
            },
            {
                code: 'emp105', name: 'Krishna', gender: 'Male',
                annualSalary: 16500.826, dateOfBirth: '14/10/79'
            },
        ]
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployees(): number {
        return this.employees.length;
    }

    getTotalMaleEmployees(): number {
        return this.employees.filter(m => m.gender === "Male").length;
    }

    getTotalFemaleEmployees(): number {
        return this.employees.filter(m => m.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}