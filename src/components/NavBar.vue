<template>
    <v-app-bar app color="primary" dark flat class="px-12">
        <v-btn >
            <v-icon icon="mdi-read" color="white" left class="mr-2"></v-icon>Rukshan
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')" color="blue-lighten-3">Home</v-btn>
        <v-btn text @click="scroll('about')" color="blue-lighten-3">About Me</v-btn>
        <v-btn text @click="scroll('portfolio')" color="blue-lighten-3">Projects</v-btn>
        <v-btn text @click="scroll('blogs')" color="blue-lighten-3">Blogs</v-btn>
        <v-btn text @click="scroll('interests')" color="blue-lighten-3">Interests</v-btn>
        <v-btn text @click="scroll('contact')" color="blue-lighten-3">Contact  Me</v-btn>
    </v-app-bar>
</template>

<script setup>
const scroll = (refName) => {
    const element = document.getElementById(refName); 
    element.scrollIntoView({behavior: "smooth"});
};

</script>