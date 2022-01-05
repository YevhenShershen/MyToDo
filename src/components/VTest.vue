<template>
  <div id="app">

    <form @submit.prevent="pushInformation" class="form-field">
      <input type="text" v-model="informationObj.name" placeholder="name" class="mr-4" />
      <input
        type="text" v-model="informationObj.secondName" placeholder="second name"
      />
      <input type="text" v-model="informationObj.age" placeholder="age" />
      <button class="push">Push</button>
    </form>
    <div>

      <div v-for="(item, id) in arrData" :key="id">
        <span
          ><h3>
            id:{{ item.id }} Name:{{ item.name }}; Surname:{{
              item.secondName
            }}; Age:{{ item.age }}
          </h3>
          <v-btn @click="deleteItem(id)" elevation="2" class="mr-4">Delete</v-btn>
          <v-btn @click="toUpperText(id)" elevation="2">Upper</v-btn></span
        >
      </div>
      <v-btn @click="clearArr" elevation="2" class="mt-4" v-if="arrData != !arrData">Clear All</v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {

      informationObj: {
        name: "",
        secondName: "",
        age: "",
      },
      arrData: [
        { name: "Vasia2", secondName: "Vasiczkin", age: "33" },
        { name: "Marta", secondName: "Kowalska", age: "22" },
      ],
    };
  },
  components: {},
  methods: {
    clearArr() {
      this.arrData = [];
    },
        toUpperText(index) {

    for( let elem in this.arrData[index]){
       console.log(elem)
      // console.log(this.arrData[index])
 this.informationObj[elem] = this.arrData[index][elem].toUpperCase();
    // console.log(this.informationObj.elem  )
    // console.log(this.informationObj[elem])

      }
       this.arrData.splice(index, 1, this.informationObj )
         this.informationObj = {
        name: "",
        secondName: "",
        age: "",
    }
        },
        deleteItem(index) {
          console.log(index);
          this.arrData.splice(index, 1);
        },
    pushInformation() {
      this.arrData.push(this.informationObj);
         this.informationObj = {
        name: "",
        secondName: "",
        age: "",
    }
    },
      },
};
</script>

<style>
.push{
 background: burlywood;
 border-radius:5px;
 border: 1px solid;
 padding: 5px 20px;
}
</style>
