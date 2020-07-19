<template>
    <v-app dark>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar clipped-left fixed app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>
                AUTO Machine Elements Project
            </v-toolbar-title>
            <v-spacer />
            <v-btn outlined color="rgba(50, 50, 50,0.8)" v-if="!$auth.loggedIn">
                Đăng nhập
                <v-icon right> mdi-login</v-icon>
            </v-btn>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
        <v-navigation-drawer v-model="rightDrawer" right temporary fixed>
            <v-list>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon light>
                            mdi-repeat
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-title
                        >Switch drawer (click me)</v-list-item-title
                    >
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-footer app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                {
                    icon: "mdi-star",
                    title: "Giới thiệu",
                    to: "/",
                },
                {
                    icon: "mdi-cog-box",
                    title: "Chế tạo",
                    to: "/meproject",
                },
            ],
            rightDrawer: false,
        }
    },
}
</script>
