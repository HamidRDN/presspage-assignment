<script setup lang="ts">
import AppBar from '@components/app-bar.vue';
</script>

<template>
    <v-layout>
        <AppBar />
        <v-main>
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
    </v-layout>
</template>
