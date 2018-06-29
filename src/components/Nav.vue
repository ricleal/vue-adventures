<template>
<div>
    <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo"  dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{message}}</v-toolbar-title>
    </v-toolbar>
</div>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            message: "This will will be the Navigation",
            drawer: null
        }
    }
}
</script>

<style>

</style>
