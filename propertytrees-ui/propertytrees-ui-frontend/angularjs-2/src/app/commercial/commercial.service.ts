import { Injectable } from '@angular/core';
import { IEmployee, IState } from './interfaces';
 
@Injectable()
export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
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
                "rating": 4
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
                "rating": 2
            }
        ];
    }
}