<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> To-Do </v-list-item-title>
          <v-list-item-subtitle> menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav >
        <v-list-item
                  v-for="(item, id) in navigationItems"
          :key="id"
          link
          @click="Navigation(item.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark prominent src="../public/sky.jpg">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-app-bar-title>My-To-Do-Aplication</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension >
        <v-tabs align-with-title  class="hide">
          <v-tab

          v-for="nav in navigationItems"
          :key="nav.name"
          @click="Navigation(nav.path)"
          >
           {{nav.name}}</v-tab>
        </v-tabs>
      </template>
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
      { path: "/", name: "Your profile", icon: "mdi-human-greeting" },
      { path: "/day", name: "Day", icon: "mdi-calendar-today" },
      { path: "/week", name: "Week", icon: "mdi-calendar-week" },
      { path: "/month", name: "Month", icon: "mdi-calendar-month-outline" },
      { path: "/year", name: "Year", icon: "mdi-calendar-account" },
      { path: "/test", name: "Test", icon: "mdi-history" },
    ],
  }),
  methods: {
    Navigation(navigation) {
      this.$router.push(navigation);
    },
  },
};
</script>
<style>

@media (max-width: 650px) {
.hide{
display: none;}
}
</style>