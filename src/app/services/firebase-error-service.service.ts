import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorServiceService {

  constructor() { }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'User alredy exist';
      case 'auth/invalid-email':
        return 'The email is not valid';
      case 'auth/weak-password':
        return 'Weak password';
      case 'auth/user-not-found':
        return 'The email is not found, are you registed?';
      case 'auth/weak-password':
        return 'Weak password';
      case 'auth/wrong-password':
        return 'Wrong password';
      default:
        return 'Undefine error';
    }
  }
}
