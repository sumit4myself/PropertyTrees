import { Component, OnInit } from '@angular/core';
import {SearchFilter} from '../common/search.filter';
import { UserService } from '../header/sign_up.service';

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
signIn= {
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

  SaveRecord(sinup)
  {
    this.userServ
        .singUpUsers(sinup)
        .subscribe(()=> this.goBack());
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
