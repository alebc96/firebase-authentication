import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorServiceService } from 'src/app/services/firebase-error-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerUser: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastService: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorServiceService
  ) {
    this.registerUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  singIn() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatPassword = this.registerUser.value.repeatPassword;


    //console.log(this.registerUser)
    if (password !== repeatPassword) {
      this.toastService.error('Password is not the same', 'Error');
      return;
    }

    this.loading = true
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.loading = false
        this.toastService.success('Registered user successfully', 'Success')
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        //console.log(error);
        this.loading = false
        this.toastService.error(this.firebaseError.firebaseError(error.code), 'Error');
      });
  }
}
