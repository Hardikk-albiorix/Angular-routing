import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students = [
    {
      id: 1,
      name: 'Darsh Patel',
      age: 26,
      city: 'Vadodara',
      email: 'darsh@gmail.com',
    },
    {
      id: 2,
      name: 'Jay Parmar',
      age: 21,
      city: 'Ahmedabad',
      email: 'jay@gmail.com',
    },
    {
      id: 3,
      name: 'Mansi Kalathiya',
      age: 23,
      city: 'Surat',
      email: 'mansi@gmail.com',
    },
    {
      id: 4,
      name: 'Jayesh Sharma',
      age: 29,
      city: 'Rajkot',
      email: 'jayesh@gmail.com',
    },
    {
      id: 5,
      name: 'Nandani Jain',
      age: 22,
      city: 'Kutch',
      email: 'nandani@gmail.com',
    },
  ];
  constructor() {}

  getAllStudentsInformation() {
    return this.students;
  }

  getStudentInformation(id: number) {
    return this.students.find((student) => student.id == id);
  }
}
