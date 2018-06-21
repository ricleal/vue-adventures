<template>
<v-form v-model="valid">

    <v-container grid-list-md>
        <v-layout row>
            <v-flex xs8>
                <v-text-field id="from" name="from" label="From" v-model.number="from">

                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs8>
                <v-text-field id="to" name="to" label="To" v-model.number="to"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs8>
                <v-text-field id="steps" name="steps" label="Steps" v-model.number="steps"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs8>
                <v-text-field name="arange" label="Arange" v-model.number="arange" disabled></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs8>
                <v-btn v-on:click="sendToAnotherComponent" color="info">Send to another component</v-btn>
            </v-flex>
        </v-layout>
    </v-container>

    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">ARange</h3>
														<div>  {{arange}}</div> 
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</v-form>
</template>

<script>
import { EventBus } from '../main.js';

export default {
    name: "tools",
    data: () => ({
        valid: false,
        from: 1,
        to: 100,
        steps: 100
		}),
		methods: {
			sendToAnotherComponent: function (event) {
				if (event) {
					console.log(event);
				}

			}
		},
    computed: {
        arange: function () {
            if (this.to && this.from && this.steps) {
                var increment = (this.to - this.from) / this.steps;
                var result = [];
                var i = 0;
                for (i = this.from; i <= this.to; i += increment) {
                    result.push(parseFloat(i.toFixed(2)));
                }
								//console.log(result);
								EventBus.$emit('arange', result);
                return result;
            }
        }
		}
		
};
</script>

<style scoped>

</style>
