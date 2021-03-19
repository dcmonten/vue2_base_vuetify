<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar
      app
      absolute
      color="primary"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{ name: 'Home' }" icon>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'About' }" icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Guest",
};
</script>

<style></style>
