import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent {
  studentForm: FormGroup;

  // Angular's dependency injection system will inject a FormBuilder instance into the constructor
  constructor(
    private formBuilderInstance: FormBuilder,
    private schoolService: SchoolService
  ) {
    this.studentForm = this.formBuilderInstance.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required]],
    });
  }

  // define getters for form control validation
  get name() {
    return this.studentForm.get('name');
  }

  get level() {
    return this.studentForm.get('level');
  }

  // handling form submission
  onSubmit() {
    // if form is invalid, return
    if (this.studentForm.invalid) {
      return;
    }

    console.log('Form submitted', this.studentForm.value);

    // create new student object with form values
    this.schoolService.addStudent(this.studentForm.value).subscribe(
      (response) => {
        console.log('Student added', response);

        // reset form
        this.studentForm.reset();
      },
      (error) => {
        console.log('Error deleting', error);
      }
    );
  }
}
