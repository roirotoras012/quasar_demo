<template>
  <q-page class="flex justify-center">
    <div class="students_container">
      <div class="add_header">
        <div>
          <h5>Students</h5>
        </div>
        <div>
          <button @click="add_active = true">ADD STUDENT</button>
        </div>
      </div>

      <div class="student_list">
        <div v-for="student of students" :key="student.id" class="student_card">
          <div>Name: {{ student.name }}</div>
          <div>Email: {{ student.email }}</div>
          <div>Phone: {{ student.phone }}</div>

          <button @click="deleteStudent(student.id)" style="margin-top: 20px">
            delete
          </button>
        </div>
      </div>
    </div>

    <div v-show="add_active" class="add_container">
      <div class="form_container">
        <div class="close_button" @click="add_active = false">
          <q-icon style="font-size: 24px" name="close" />
        </div>
        <div>
          <label for="">Name </label>
          <input v-model="name" type="text" />
        </div>
        <div>
          <label for="">Email </label>
          <input v-model="email" type="text" />
        </div>
        <div>
          <label for="">Phone </label>
          <input v-model="phone" type="text" />
        </div>
        <div class="button">
          <q-btn
            @click="addStudent()"
            color="white"
            text-color="black"
            label="Standard"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { StudentService } from "../services/StudentService";
export default {
  name: "PageIndex",
  data() {
    return {
      add_active: false,
      name: "",
      phone: "",
      email: "",
      students: [],
      // student: {
      //   name: "",
      //   email: "",
      //   phone: "",
      // },
    };
  },
  methods: {
    async addStudent() {
      let student = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      if (student.name != "" && student.email != "" && student.phone != "") {
        try {
          let response = await StudentService.addStudent(student);

          if (response) {
            this.add_active = !this.add_active;
            (this.name = ""), (this.email = ""), (this.phone = "");
            this.getStudents();
          }
        } catch {}
      }
    },

    async getStudents() {
      try {
        let response = await StudentService.getAllStudents();
        this.students = response.data;
      } catch (error) {}
    },
    async deleteStudent(student) {
      try {
        let response = await StudentService.deleteStudent(student);
        if (response) {
          this.getStudents();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  created: async function () {
    this.getStudents();
  },
};
</script>

<style scoped>
.add_header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.add_container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #00000021;
}
.form_container {
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-content: center;
  align-items: center;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.form_container div {
  padding: 3px;
}
.form_container div {
  /* width: ; */
  width: 300px;
  display: flex;
  justify-content: space-between;
}
.form_container div label {
  font-weight: bold;
}
.button button {
  width: 200px;
}
.button {
  margin-top: 20px;
  display: flex !important;
  justify-content: center !important;
}
.close_button {
  position: absolute;
  top: -5px;
  right: -5px;
  width: auto !important;
}

.student_card {
  padding: 20px;
  background: #1976d2;
  color: white;
  width: 300px;
  font-weight: bold;
  border-radius: 5px;
}

.student_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* width: auto !important; */
  gap: 20px;
  padding: 25px;
}
</style>
