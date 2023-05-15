<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import useUsersStore from '@store/users';

const usersStore = useUsersStore();

const { users, isLoading, isError } = storeToRefs(usersStore);

onMounted(() => {
    usersStore.fetchUsers();
});
</script>

<template>
    <h4 class="text-h4">List of the users</h4>
    <v-container class="mt-10">
        <v-row v-if="isLoading">
            <v-col v-for="index in 10" :key="index" cols="12" sm="5">
                <v-card>
                    <v-skeleton-loader type="card,actions" />
                </v-card>
            </v-col>
        </v-row>
        <v-alert v-else-if="isError" text="Sorry something went wrong. Please try again later." variant="tonal" type="error" />
        <v-row v-else data-testid="cards-container">
            <v-col v-for="user in users" :key="user.id" cols="12" sm="5">
                <v-card>
                    <v-img :src="user.avatar_url" height="200px" cover></v-img>
                    <v-card-title>
                        {{ user.login }}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="primary" :href="user.html_url" target="_blank">View User Profile</v-btn>
                        <v-spacer />
                        <v-btn size="small" color="surface-variant" variant="text" icon="mdi-delete" @click="usersStore.deleteUser(user.id)" />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
