import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../../services/school.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;

  // Angular's dependency injection system will inject a FormBuilder instance into the constructor
  constructor(
    private formBuilderInstance: FormBuilder,
    private schoolService: SchoolService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentForm = this.formBuilderInstance.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required]],
    });

    // get the id of our student
    this.route.paramMap.subscribe((params) => {
      // check if id exist
      let id = params.get('id');
      if (id) {
        // get out student from the DB
        this.schoolService.getStudent(parseInt(id)).subscribe(
          (student) => {
            console.log('Get Student', student); // response should a student object

            // update the form with student data
            this.studentForm.patchValue({
              name: student.name ?? '', // if left hand is null, use right right value
              level: student.level ?? '',
            });
          },
          (error) => {
            console.log('Could not find student data', error);
          }
        );
      }
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

    // check if we have an id
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // update student data
      this.schoolService
        .updateStudent(parseInt(id), this.studentForm.value)
        .subscribe(
          (response) => {
            console.log('Student updated', response);
          },
          (error) => {
            console.log('Could not add student data', error);
          }
        );
    } else {
      // create new student object with form values
      this.schoolService.addStudent(this.studentForm.value).subscribe(
        (response) => {
          console.log('Student added', response);

          // reset form
          this.studentForm.reset();
        },
        (error) => {
          console.log('Could not add student data', error);
        }
      );
    }
  }
}
