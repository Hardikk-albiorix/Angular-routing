import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit{
  title = 'Student Details';
  students: any[] = [];

  constructor(private studentsService : StudentsService){

  }
  ngOnInit(){
    this.students = this.studentsService.getAllStudentsInformation();
  }
}
