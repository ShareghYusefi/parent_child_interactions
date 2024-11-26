import { Component } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students = [
    {
      id: 1,
      name: 'John Doe',
      level: 'undergrad',
    },
    {
      id: 2,
      name: 'Jane Doe',
      level: 'postgrad',
    },
    {
      id: 3,
      name: 'Marry Doe',
      level: 'undergrad',
    },
    {
      id: 4,
      name: 'Tom Doe',
      level: 'undergrad',
    },
    {
      id: 5,
      name: 'Jerry Doe',
      level: 'undergrad',
    },
  ];

  // get array of undergrad students
  public undergradStudents: any = this.getUndergrads();

  constructor() {
    console.log('StudentsComponent constructor');
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
