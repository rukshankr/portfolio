<template>
    <v-app-bar app color="primary" dark flat>


        <v-btn @click="scroll('home')">
            <v-icon icon="mdi-read" color="white" left class="mr-2"></v-icon>Rukshan
        </v-btn>
        <v-spacer></v-spacer>
        <div class="text-center d-none d-sm-flex">
            <!-- <v-btn text @click="scroll('home')" color="secondary">Home</v-btn> -->
            <v-btn text @click="scroll('about')" color="secondary">About Me</v-btn>
            <v-btn text @click="scroll('portfolio')" color="secondary">Projects</v-btn>
            <v-btn text @click="scroll('blogs')" color="secondary">Blogs</v-btn>
            <v-btn text @click="scroll('interests')" color="secondary">Interests</v-btn>
            <v-btn text @click="scroll('contact')" color="secondary">Contact Me</v-btn>
        </div>
        <v-app-bar-nav-icon color="secondary" @click="drawer = !drawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer color="primary" location="right" v-model="drawer" temporary>
        <v-list nav class="mx-auto">

            <v-list-item>
                <template v-slot:prepend>
                    <v-icon color="secondary" icon="mdi-account"></v-icon>
                </template>
                <v-list-item-title class="text-secondary" @click="scroll('about'); drawer = !drawer">About
                    Me</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <v-icon color="secondary" icon="mdi-apps-box"></v-icon>
                </template>
                <v-list-item-title class="text-secondary"
                    @click="scroll('portfolio') ; drawer = !drawer">Projects</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <v-icon color="secondary" icon="mdi-post"></v-icon>
                </template>
                <v-list-item-title class="text-secondary"
                    @click="scroll('blogs') ; drawer = !drawer">Blogs</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <v-icon color="secondary" icon="mdi-palette"></v-icon>
                </template>
                <v-list-item-title class="text-secondary"
                    @click="scroll('interests'); drawer = !drawer">Interests</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <v-icon color="secondary" icon="mdi-phone"></v-icon>
                </template>
                <v-list-item-title class="text-secondary" @click="scroll('contact'); drawer = !drawer">Contact
                    Me</v-list-item-title>
            </v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const tab = ref(null);
const items = ref(['About Me', 'Projects', 'Blogs', 'Interests', 'Contact Me'])
const scroll = (refName) => {

    const element = document.getElementById(refName);
    element.scrollIntoView({ behavior: "smooth" });
};

</script>