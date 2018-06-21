<template>
<v-app>
  <v-navigation-drawer app></v-navigation-drawer>
  <Nav />

  
  <v-content>
    <v-container fluid>

   
        <Nav />
        <Graph />    
        <Skills />
  

  </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>

</template>

<script>
import Nav from "./components/Nav.vue";
import Graph from "./components/Graph.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "app",
  components: {
    Nav,
    Graph,
    Skills
  }
};
</script>

<style>
</style>
