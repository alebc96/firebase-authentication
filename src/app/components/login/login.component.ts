import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorServiceService } from 'src/app/services/firebase-error-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private toast: ToastrService,
    private firebaseError: FirebaseErrorServiceService
  ) {
    this.loginUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;
    this.loading = true
    this.fireAuth.signInWithEmailAndPassword(email, password)
    .then((user)=>{
      console.log(user)
      this.toast.success("Login succesfolly", "Success")
      this.router.navigate(['/dashboard'])
    }).catch((error)=>{
      this.toast.error(this.firebaseError.firebaseError(error.code), "Error")
      this.loading = false
    })
  }
}
