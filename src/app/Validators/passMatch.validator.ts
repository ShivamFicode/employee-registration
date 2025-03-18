import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PassMatchValidator {
  // AbstractControl is the base class for all form controls in Angular's Reactive Forms.
  // In a validator function, Angular provides the entire form group (FormGroup) as an AbstractControl
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPass = group.get('confirmPass');

    if (!confirmPass || !confirmPass.value) return null;

    if (password !== confirmPass?.value) {
      confirmPass.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPass.setErrors(null); // Clear error if they match
      return null;
    }
  }
}
