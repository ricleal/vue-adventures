<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Graph</h3>
                    <div>{{message}}</div>
                    <div>{{arange}}</div>
                </div>
            </v-card-title>
            <v-card-actions>
            </v-card-actions>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import {
    EventBus
} from '../main.js';

export default {
    name: "graph",
    data() {
        return {
            message: "This is a graph",
            arange: []
        }
    },
    created() {
        EventBus.$on('arange', arange => {
            console.log(arange);
            this.arange = arange;
        });
    }
}
</script>

<style>

</style>
