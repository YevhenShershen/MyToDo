<template>
  <div id="app">
    <form @submit.prevent="pushInformation">
      <input type="text" v-model="arrObject.name" placeholder="name" />
      <input
        type="text"
        v-model="arrObject.secondName"
        placeholder="second name"
      />
      <input type="text" v-model="arrObject.age" placeholder="age" />
      <button>Push</button>
    </form>
    <div>
      <span>{{ name }} {{ secondName }} {{ age }}</span>

      -------------------------------
      <div v-for="(item, id) in arrData" :key="id">
        <span
          ><h3>
            id:{{ id + 1 }} Name:{{ item.name }};  Surname:{{
              item.secondName
            }};
            Age:{{ item.age }}
          </h3>
          <v-btn @click="deleteItem(id)" elevation="2" class="mr-4" >Delete</v-btn>
          <v-btn @click="toUpperText(item, id)" elevation="2">Upper</v-btn></span
        >
      </div>
      <v-btn @click="clearArr" elevation="2" class="mt-4">Clear All</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
arrIndex: {},
      arrData: [
        {
          name: "Vasia",
          secondName: "Vasiczkin",
          age: "33",
        },
        {
          name: "Marta",
          secondName: "Kowalska",
          age: "22",
        },
      ],
      arrObject: {
        name: "",
        secondName: "",
        age: "",
      },
    };
  },
  components: {},
  methods: {
    clearArr() {
      this.arrData = [];
    },
    toUpperText(elem, index) {

for( let id in this.arrData[index]){
this.arrData[index][id].toUpperCase()
// console.log(typeof(this.arrData[index][id].toUpperCase()) )
console.log(elem.id )
console.log(this.arrData[index])
// this.arrData.splice(index, 1, this.arrIndex)
}
    },
    deleteItem(index) {
      console.log(index);
      this.arrData.splice(index, 1);
    },
    pushInformation() {
      this.arrData.push(this.arrObject);
      this.arrObject = { name: "", secondName: "", age: "" };
    },
  },
};
</script>

<style></style>
