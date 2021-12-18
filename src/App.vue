<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
   <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            To-Do
          </v-list-item-title>
          <v-list-item-subtitle>
            menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in navigationItems"
          :key="item"
          link
          @click="Navigation(item.path)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My To-Do Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    navigationItems: [
      {path:'/', name: "To-do" },
      { path: '/day', name: "Day" },
      {path:'/week', name: "Week" },
      {path:'/month', name: "Month" },
      {path:'/year', name: "Year" },
      {path:'/test', name: "Test" }],
  }),
    methods: {
    Navigation(navigation){
this.$router.push(navigation)
    },}
};
</script>
