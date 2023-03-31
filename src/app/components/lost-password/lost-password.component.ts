import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorServiceService } from '../../services/firebase-error-service.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {
  recoveryForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authServ: AngularFireAuth,
    private toast: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorServiceService
  ) { 
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  show =()=>{
    console.log("Hola gente")
  }

  recoverPassword =()=>{
    const email = this.recoveryForm.value.email
    //console.log(this.recoveryForm.value.email)
    this.loading = true
    this.authServ.sendPasswordResetEmail(email)
    .then(()=>{
      this.router.navigate(['/login'])
      this.toast.info("We send you an email to recover your password", "Recover password")
      this.loading = false
    }).catch((error)=>{
      this.toast.error(this.firebaseError.firebaseError(error.code), "Error")
      this.loading = false
    })
  }

}
