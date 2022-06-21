import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'User Details Search';
  userid="";
  @ViewChild("myform")  form:any;

  constructor(private userService: UserService){}

  handleSubmit(){
     console.log(this.userid);
     this.userService.getUserDetails(this.userid).subscribe(res=>{
       console.log(res);
     })
  }

}
