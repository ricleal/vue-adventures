<template>
<v-app>
    <Nav />
    <v-content>
        <v-container fluid>
            <Graph />
            <Tools />
        </v-container>
        <v-container fluid>
            <Counter />
        </v-container>
    </v-content>
    <v-footer color="indigo" app inset>
        <span class="white--text"> This is the footer...</span>
    </v-footer>
</v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Graph from "./components/Graph.vue";
import Tools from "./components/Tools.vue";
import Counter from "./components/Counter.vue";

export default {
    name: "app",
    components: {
        Nav,
        Graph,
        Tools,
        Counter
    }
};
</script>

<style>

</style>
