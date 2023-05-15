import { useQuery, useQueryClient } from '@tanstack/react-query';
import ky from 'ky';
import { User } from '@types';
import UserCard from '@components/user-card';
import { useCallback } from 'react';

const PageUsers = () => {
    // General
    const queryClient = useQueryClient();

    // Callbacks
    const fetchUsers = async (): Promise<User[]> => ky.get(`${import.meta.env.VITE_APP_GITHUB_API_URL}/users?per_page=10`).json();

    const onDeleteClick = useCallback(
        async (userId: number) => {
            const currentData = queryClient.getQueryData<User[]>(['users']);
            if (currentData) {
                queryClient.setQueryData(
                    ['users'],
                    currentData.filter((user) => user.id !== userId)
                );
            }
        },
        [queryClient]
    );

    // Query
    const { isLoading, isError, data } = useQuery<User[]>(['users'], fetchUsers);

    return (
        <div className="flex flex-col gap-4 mt-6 px-6">
            <h4 className="text-xl font-bold">List of the users</h4>
            {isError && <div className="rounded bg-red-400 text-white py-4 px-6 text-sm">Sorry something went wrong. Please try again later.</div>}
            {isLoading && <div className="rounded bg-blue-400 text-white py-4 px-6 text-sm animate-pulse">Loading...</div>}
            {data && (
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mb-10" data-testid="cards-container">
                    {data.map((user) => (
                        <div className="flex-auto max-w-sm" key={user.id}>
                            <UserCard onDeleteClick={onDeleteClick} {...user} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PageUsers;
