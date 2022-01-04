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
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "VToDo",
  data() {
    return {
      newTaskTitle:'',
      tasks: [
        { info: "make a vue course https://www.youtube.com/watch?v=4XTy6ucbLNg&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw", id: "1", done: false },
        { info: "finish my 'To Do application'", id: "2", done: false },
        { info: "finish vuetify", id: "3", done: false },
      ],
      partOfInformation: "",
    };
  },
  methods: {
    doneTask(index) {
      let task = this.tasks.filter((task) => task.id === index)[0];
      console.log(task);
      task.done = !task.done;
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id != id)
    },
    addTask(){
let newTask = {
  info: this.newTaskTitle,
  id: Date.now(),
  done: false
}
this.newTaskTitle = ""
this.tasks.push(newTask)
    }
  },
};
</script>

<style></style>
