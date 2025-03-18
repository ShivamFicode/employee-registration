import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  studentData: any = {};

  student: any = {
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    isChecked: false,
  };

  submit() {
    this.studentData = this.student;
  }
}
