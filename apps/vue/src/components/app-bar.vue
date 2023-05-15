<script setup lang="ts">
import logo from '@assets/images/logo.png';

const appTitle = import.meta.env.VITE_APP_TITLE;
</script>

<template>
    <v-app-bar flat color="app-bar-background" class="app-bar">
        <v-app-bar-nav-icon>
            <router-link to="/" class="app-bar-logo"><v-img :width="28" :src="logo"></v-img></router-link>
        </v-app-bar-nav-icon>
        <v-app-bar-title class="app-bar-title">{{ appTitle }}</v-app-bar-title>
    </v-app-bar>
</template>

<style scoped>
.app-bar {
    border-bottom: 2px solid #dee7f6;
}

.app-bar-title {
    color: #326485;
    font-size: 1.125rem;
}
</style>
