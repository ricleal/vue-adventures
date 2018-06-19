<template>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>This is the title</title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <div id="app">
    <Goals />
    <Graph />    
    <Skills />
  </div>
</body>

</html>
</template>

<script>
import Goals from "./components/Goals.vue";
import Graph from "./components/Graph.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "app",
  components: {
    Goals,
    Graph,
    Skills
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}
</style>
