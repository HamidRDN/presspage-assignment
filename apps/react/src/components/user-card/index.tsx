import { FC } from 'react';
import { User } from '@types';

export interface Props extends User {
    onDeleteClick: (userId: number) => void;
}

const UserCard: FC<Props> = (props) => {
    const { login, html_url, avatar_url, onDeleteClick, id } = props;

    return (
        <div data-testid="card" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 pb-6">
            <div className="h-40 overflow-hidden">
                <img src={avatar_url} alt={login} className="w-full rounded" />
            </div>
            <div className="px-6 py-5 font-bold text-lg">{login}</div>
            <div className="px-4 flex flex-row justify-between">
                <a href={html_url} target="_blank" className="py-2 px-4 text-sm bg-blue-200 rounded hover:bg-blue-100 transition-colors">
                    View User Profile
                </a>
                <button className="bg-red-400 py-2 px-4 rounded text-white hover:bg-red-500 transition-colors" onClick={() => onDeleteClick(id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default UserCard;
