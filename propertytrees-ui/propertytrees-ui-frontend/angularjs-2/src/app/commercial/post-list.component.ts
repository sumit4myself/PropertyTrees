import { Component } from '@angular/core';
import { IEmployee } from './interfaces';
 
@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['employee-list.component.css'],
})
export class EmployeeListComponent {
    employees: IEmployee[] =
    [
        {
            "id": 1,
            "firstName": "ted",
            "lastName": "james",
            "gender": "male",
            "address": "1234 Anywhere St.",
            "city": " Phoenix ",
            "state": {
                "abbreviation": "AZ",
                "name": "Arizona"
            },
            "salary": 4.500,
            "joinDate": "July 2, 2015",
            "rating":4
        },
        {
            "id": 2,
            "firstName": "Michelle",
            "lastName": "Thompson",
            "gender": "female",
            "address": "345 Cedar Point Ave.",
            "city": "Los Angeles ",
            "state": {
                "abbreviation": "CA",
                "name": "California"
            },
            "salary": 4.100,
            "joinDate": "July 2, 2015",
            "rating":2
        }
    ];
 
    onRating(obj: any):void {
        var employee = this.employees.filter((item: any) => item.id === obj.employeeId);
        if (!!employee && employee.length === 1) {
            this.employees[0].rating = obj.rating;
        }
    }
}