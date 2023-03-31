import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fireAuth.currentUser.then((user)=>{
      //console.log(user)
      if(user){
        this.data = user
      }else{
        this.router.navigate(['/login'])
      }
    })
  }

}
