import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import VToDo from "../components/VToDo.vue";
import VDay from "../components/VDay.vue";
import VMonth from "../components/VMonth.vue";
import VYear from "../components/VYear.vue";
import VWeek from "../components/VWeek.vue";
import VTest from "../components/VTest.vue";


Vue.use(VueRouter);

const routes = [
{
  path:'/',
  name:'VToDo',
  component: VToDo,
},
{
  path:'/day',
  name:'VDay',
  component: VDay,
},
{
  path:'/week',
  name:'VWeek',
  component: VWeek,
},
{
  path:'/month',
  name:'VMonth',
  component: VMonth,
},
{
  path:'/year',
  name:'VYear',
  component: VYear,
},
{
  path:'/test',
  name:'VTest',
  component: VTest,
},

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
