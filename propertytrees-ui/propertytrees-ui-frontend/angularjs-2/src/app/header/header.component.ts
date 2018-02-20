import { Component, OnInit } from '@angular/core';
import {SearchFilter} from '../common/search.filter';
import { UserService } from '../header/sign_up.service';
import {Observable} from 'rxjs/Observable';
 declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
data ={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  repassword:''
};
sigsignInnIn= {
  username:'',
  password:''
}
openModal(){
$('#myModal').modal('show');
}
Ftoggle(){
  $('#forget').show();   
  }

  Ftogglehide(){
    $('#forget').hide();
    } 

  constructor(private userServ: UserService) { }

  ngOnInit() {
  }
  testResponse:any;
  SaveRecord(sinup)
  {
    //
 // this.userServ.singUpUsers(sinup).subscribe((response:Response)=>response.json())
     //console.log(this.testResponse);
  }
  // logIn(data){  
    
  //   this.userServ.loginUser(data).subscribe(()=>this.goBack());
  // }


  logIn(data){
    console.log(data);
    
    // this.userServ.loginUser(data).subscribe(()=>this.goBack());
  }

  goBack(){
    alert('Data Saved.');
  }

}
