import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  student: any;
  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {}
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.student = this.studentsService.getStudentInformation(id);
    console.log(this.student);
  }
}
