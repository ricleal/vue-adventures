<template>
<v-app>
  <v-navigation-drawer app></v-navigation-drawer>
  <Nav />
  <v-content>
    <v-container fluid>
        <Graph />    
        <Tools />
  </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>

</template>

<script>
import Nav from "./components/Nav.vue";
import Graph from "./components/Graph.vue";
import Tools from "./components/Tools.vue";

export default {
  name: "app",
  components: {
    Nav,
    Graph,
    Tools
  }
};
</script>

<style>
</style>
