import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private firestore: AngularFirestore) {}

  addStudent(student: Student) {
    return this.firestore.collection('students').add(student);
  }
  // la fonction collection prend en paramètre le nom de la collection firebase
  getStudentsList() {
    return this.firestore.collection('students').snapshotChanges();
  }

  deleteStudent(studentId: string) {
    this.firestore.doc('students/' + studentId).delete();
  }

  getStudent(id: string) {
    return this.firestore.doc('students/' + id).get();
  }

  updateStudent(student: Student) {
    return this.firestore.doc('students/' + student.id).update(student);
  }
}
