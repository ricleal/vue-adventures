<template>
<div class="text-xs-center">
    <v-badge>
        <v-icon large color="grey lighten-1">hourglass_empty</v-icon>
        <span slot="badge">{{counter}}</span>

    </v-badge>
</div>
</template>

<script>

import {
    eventBus
} from '../main.js';

export default {
    name: "counter",
    computed: {
        counter: function () {
            return this.$store.getters.counter
        }
    },
    created() {
        eventBus.$on('tools-y', () => {
            this.increment();
        });
    },
    methods: {
        increment: function () {
            this.$store.commit('increment')
        },
        decrement: function () {
            this.$store.commit('decrement')
        }
    },
}
</script>

<style>

</style>
