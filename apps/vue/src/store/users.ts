import { defineStore } from 'pinia';
import ky from 'ky';
import { User } from '@types';

const useUsersStore = defineStore('usersList', {
    state: () => ({
        users: [] as User[],
        isLoading: false,
        isError: false,
    }),
    actions: {
        async fetchUsers() {
            try {
                this.isLoading = true;
                this.users = await ky.get(`${import.meta.env.VITE_APP_GITHUB_API_URL}/users?per_page=10`).json();
            } catch (error) {
                this.isError = true;
                // eslint-disable-next-line no-console
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        },
        deleteUser(id: number) {
            this.users = this.users.filter((user) => user.id !== id);
        },
    },
});

export default useUsersStore;
