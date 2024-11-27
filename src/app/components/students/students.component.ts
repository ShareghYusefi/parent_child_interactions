import { Component } from '@angular/core';
import { Student } from '../../interfaces/student';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students: Student[] = [];

  // get array of undergrad students
  public undergradStudents: any = this.getUndergrads();

  // get instance of SchoolService using dependency injection
  constructor(private schoolService: SchoolService) {
    console.log('StudentsComponent constructor');
  }

  // use ngOnInit lifecycle hook to call getStudents method from SchoolService
  ngOnInit() {
    // Since getStudents() returns an Observable, we need to subscribe to it for the data
    this.schoolService.getStudents().subscribe((response) => {
      // the response should be an array of students
      this.students = response;
      // update undergradStudents array via getUndergrads method
      this.undergradStudents = this.getUndergrads();
    });
  }

  getUndergrads() {
    // filter students by level of undergrad
    return this.students.filter((student) => student.level === 'undergrad');
  }

  text: any = '';

  deleteStudent(id: number) {
    // find index of student with id
    let index = this.students.findIndex((student) => student.id === id);
    // index is -1 when not matching student is found
    if (index === -1) {
      return;
    }

    // remove student from array
    this.students.splice(
      index, // index to start removing
      1 // delete 1 item
    );
    // update undergradStudents array via getUndergrads method
    this.undergradStudents = this.getUndergrads();
  }
}
