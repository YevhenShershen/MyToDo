<template>
  <v-list subheader flat>
    <v-list-item-group v-model="settings" multiple>
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
                >{{ task.info }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark icon v-bind="attrs" v-on="on">
                    <v-icon color="primary lighten-1">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-btn
                      class="mx-10"
                      icon
                      color="primary"
                      dark
                      @click="dialog3 = !dialog3"
                    >
                      <!-- @click="editTask( task.id, changeDialog3)" -->
                      <v-icon color="primary lighten-1"
                        >mdi-clipboard-edit</v-icon
                      >
                      Edite
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn
                      class="mx-10"
                      icon
                      color="primary"
                      dark
                      @click="dateTask(task.id)"
                    >
                      <v-icon color="primary lighten-1"
                        >mdi-clipboard-text-clock</v-icon
                      >Due Date
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn
                      class="mx-10"
                      icon
                      color="primary"
                      dark
                      @click.stop="deleteTask(task.id)"
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
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list-item-group>
    <div class="my-2">
      <v-btn color="error" dark large @click="clearTasks"> Clear All </v-btn>
    </div>
    <div>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="modalmenu">
        <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span>Edit Task</span>
            <v-spacer></v-spacer>
            <v-menu
              bottom
              left
            >
            </v-menu>
          </v-card-title>
       <v-text-field
            outlined
            :label="idTask"
            class="pa-4"
            hide-details
            clearable
            v-model="idTask"
            @keyup.enter="changeTask"
            ></v-text-field>
                    <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog3 = false"
            >
              Close
            </v-btn>
                      </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <span>Edit Task</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-text-field
            outlined
            :label="idTask"
            class="pa-4"
            hide-details
            clearable
            v-model="idTask"
            @click:append="changeTask"
            @keyup.enter="changeTask"
          ></v-text-field>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog3 = false">
              Сhange
            </v-btn>
            <v-btn color="error" text> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
    </div>
  </v-list>
</template>

<script>
export default {
  name: "VToDo",
  data() {
    return {
      idTask: "",
      dialog3: false,
      items: [
        { title: "Edite", icon: "mdi-clipboard-edit" },
        { title: "Due Date", icon: "mdi-clipboard-text-clock" },
        { title: "Delete", icon: "mdi-delete" },
        { title: "Sort", icon: "mdi-sort" },
      ],
      newTaskTitle: "",
      tasks: [
        { info: "make some coffe", id: "1", done: false },
        { info: "make some coffe123", id: "2", done: false },
      ],
      partOfInformation: "",
    };
  },
  methods: {
    editTask(index) {
      console.log(index);
    },
    //     changeDialog3(){
    // this.dialog3 = true
    //     },
    clearTasks() {
      this.tasks = [];
    },
    doneTask(index) {
      let task = this.tasks.filter((task) => task.id === index)[0];
      console.log(task);
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id != id);
    },
    addTask() {
      let newTask = {
        info: this.newTaskTitle,
        id: Date.now(),
        done: false,
      };
      this.newTaskTitle = "";
      this.tasks.push(newTask);
    },
  },
};
</script>

<style></style>
