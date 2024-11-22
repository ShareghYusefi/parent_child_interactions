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
  ];

  // get array of undergrad students
  public undergradStudents: any = this.getUndergrads();

  getUndergrads() {
    // filter students by level of undergrad
    return this.students.filter((student) => student.level === 'undergrad');
  }
}
