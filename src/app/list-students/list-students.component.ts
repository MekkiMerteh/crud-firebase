import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getStudentsList().subscribe((data) => {
      this.students = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Student),
        };
      });
    });
  }

  delete(id: string) {
    this.studentService.deleteStudent(id);
  }
}
