export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: IState;
    salary?: number;
    joinDate: string;
    rating: number
}
 
export interface IState {
    abbreviation: string;
    name: string;
}