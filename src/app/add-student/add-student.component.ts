import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  @ViewChild('addForm', { static: false }) FormAdd: NgForm;
  id;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  public student = new Student();

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    if (this.id) {
      this.getStudent(this.id);
    }
  }

  save() {
    if (this.FormAdd.valid)
      if (!this.student.id) {
        this.studentService.addStudent({ ...this.student }).then((res) => {
          this.toastr.success(this.student.firstName + ' has beed added');
          this.FormAdd.resetForm();
        });
      } else {
        this.studentService.updateStudent(this.student).then(() => {
          this.toastr.success(this.student.firstName + ' has beed updated');
          this.FormAdd.resetForm();
        });
      }
  }

  getStudent(id: string) {
    this.studentService.getStudent(id).subscribe((res) => {
      this.student = res.data() as Student;
      this.student.id = res.id;
    });
  }
}
