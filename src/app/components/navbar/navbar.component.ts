import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dataUser: any
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.fireAuth.currentUser.then((user)=>{
      //console.log(user)
      if(user){
        this.dataUser = user
      }else{
        this.router.navigate(['/login'])
      }
    })
  }

  logOut(){
    this.fireAuth.signOut()
    .then(()=>{
      this.router.navigate(['/login'])
    }).catch((error)=>{
      this.toast.error("We have some issues to logout", "Error")
    })
  }

}
