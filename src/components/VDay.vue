<template>
  <v-list subheader flat>
    <v-list-item-group multiple>
      <v-text-field
        outlined
        label="Add Task"
        prepend-icon="mdi-lead-pencil"
        class="pa-4"
        hide-details
        clearable
        v-model="newTaskTitle"
        @click:append="addTask"
        @keyup.enter="addTask"
      ></v-text-field>
      <div v-for="(task, id) in tasks" :key="id">
        <v-list-item
          class="ma-2"
          @click="doneTask(task.id)"
          :class="{ 'teal lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                class="d-flex justify-space-between"
                ><span>{{ task.info }}</span>
                <span
                  ><v-icon color="primary lighten-1">mdi-calendar</v-icon
                  >{{ task.taskDate }}</span
                ></v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="modalWindRight = true"
                  >
                    <v-icon color="primary lighten-1">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list v-if="modalWindRight">
                  <v-list-item>
                    <v-btn
                      class="mx-10"
                      icon
                      color="primary"
                      dark
                      @click="editTasks(id, ModalWindow)"
                    >
                      <v-icon color="primary lighten-1"
                        >mdi-clipboard-edit</v-icon
                      >
                      Edite
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="date"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="mx-10"
                          icon
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon color="primary lighten-1"
                            >mdi-clipboard-text-clock</v-icon
                          >
                          Due Date
                        </v-btn>
                      </template>
                      <v-date-picker v-model="tasksDate" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="addDate(id)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-list-item>
                  <v-list-item>
                    <v-btn
                      class="mx-10"
                      icon
                      color="primary"
                      dark
                      @click.stop="deleteTask(task.id, ModalWindowRightFunc)"
                    >
                      <v-icon color="primary lighten-1">mdi-delete</v-icon>
                      Delete
                    </v-btn>
                    <v-list-item-title></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-btn
                      class="mx-10"
                      icon
                      color="primary"
                      dark
                      @click="sortTask()"
                    >
                      <v-icon color="primary lighten-1">mdi-sort</v-icon>
                      Sort
                    </v-btn>
                    <v-list-item-title></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list-item-group>
    <div class="my-2 d-flex justify-center">
      <v-btn color="error" dark large @click="clearTasks"> Clear All </v-btn>
    </div>
    <div class="modalmenu">
      <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <span>Edit Task</span>
            <v-spacer></v-spacer>
            <v-menu bottom left> </v-menu>
          </v-card-title>
          <v-text-field
            outlined
            label="Change Your Task"
            class="pa-4"
            hide-details
            clearable
            :value="editTask.info"
            v-model="editTask.info"
            @keyup.enter="saveTask(editTask, editTask.id, ModalWindow())"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="saveTask(editTask, editTask.id, ModalWindow())"
            >
              Save
            </v-btn>
            <v-btn color="red" text @click="ModalWindow"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "VToDo",
  data() {
    return {
      modalWindRight: false,
      editTask: { info: "", id: "", taskDate: "", done: false  },
      dialog3: false,
      items: [
        { title: "Edite", icon: "mdi-clipboard-edit" },
        { title: "Due Date", icon: "mdi-clipboard-text-clock" },
        { title: "Delete", icon: "mdi-delete" },
        { title: "Sort", icon: "mdi-sort" },
      ],
      newTaskTitle: "",
      tasks: [
        { info: "make some coffe", id: "1", taskDate:'', done: false },
        { info: "make some coffe123", id: "2", taskDate:'', done: false },
      ],
      partOfInformation: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      tasksDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    };
  },
  methods: {
    addDate(index){
this.tasks[index]['taskDate'] = this.tasksDate
this.modal = false
this.modalWindRight = false
    },
    ModalWindowRightFunc() {
      this.modalWindRight = false;
    },
    saveTask(item, id, callback) {
      this.tasks.splice(id, 1, item);
      (this.editTask = { info: "", id: "" }), callback;
    },
    editTasks(indx, callback) {
      this.editTask.info = this.tasks[indx]["info"];
      this.editTask.id = indx;
      console.log(this.editTask.info);
      console.log(this.editTask.id);
       callback();
    },
    ModalWindow() {
      if (this.dialog3 == false) {
        this.dialog3 = true;
      } else {
        this.dialog3 = false;
      }
    },
    clearTasks() {
      this.tasks = [];
    },
    doneTask(index) {
      let task = this.tasks.filter((task) => task.id === index)[0];
      console.log(task);
      task.done = !task.done;
    },
    deleteTask(id, callback) {
      this.tasks = this.tasks.filter((task) => task.id != id);
      callback();
    },
    addTask() {
      let newTask = {
        info: this.newTaskTitle,
        id: Date.now(),
        taskDate: this.date,
        done: false,
      };
      this.newTaskTitle = "";
      this.tasks.push(newTask);

      },
  },
};
</script>

<style></style>
