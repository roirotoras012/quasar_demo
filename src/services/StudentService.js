import axios from "axios";

export class StudentService {
  static serverURL = "http://localhost:8080";

  static getAllStudents() {
    let dataURL = `${this.serverURL}/student/all`;
    return axios.get(dataURL);
  }
  static getStudent(studentId) {
    let dataURL = `${this.serverURL}/student/${studentId}`;
    return axios.get(dataURL);
  }
  static addStudent(student) {
    let dataURL = `${this.serverURL}/student/save`;
    return axios.post(dataURL, student);
  }
  static deleteStudent(studentId) {
    let dataURL = `${this.serverURL}/student/${studentId}`;
    return axios.delete(dataURL);
  }

  static updateStudent(student, studentId) {
    let dataURL = `${this.serverURL}/student/${studentId}`;
    return axios.put(dataURL, student);
  }
}
