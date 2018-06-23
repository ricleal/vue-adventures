<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Graph</h3>
                    <div>{{message}}</div>
                    <!-- <div>X: {{x}}</div> -->
                    <!-- <div>Y: {{y}}</div> -->
                    <div>data: {{data}}</div>
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
            x: [],
            y: []
        }
    },
    created() {
        EventBus.$on('tools-x', val => {
            //console.log(val);
            this.x = val;
        });
        EventBus.$on('tools-y', val => {
            //console.log(val);
            this.y = val;
        });
    },
    computed: {
        data: function(){
            if (this.x.length > 0 && this.y.length > 0){
                return this.x.map( (v, i) => ( 
                    { x: v, y: this.y[i]}) );
                
            }
        }
    }
}
</script>

<style>

</style>
