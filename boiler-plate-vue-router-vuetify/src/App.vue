<template>
<v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
        <v-list dense>
            <v-list-tile to="/">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/foo">
                <v-list-tile-action>
                    <v-icon>help</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Foo</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/about">
                <v-list-tile-action>
                    <v-icon>tab</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>About</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid fill-height>
            <router-view></router-view>
        </v-container>
    </v-content>
    <v-footer color="indigo" app>
        <span class="white--text"> Footer ... </span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null
    }),
    props: {
        source: String
    }
}
</script>
