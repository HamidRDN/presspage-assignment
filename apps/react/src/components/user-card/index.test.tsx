import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import UserCard from '.';
import userEvent from '@testing-library/user-event';
import type { Props } from '.';

describe('UserCard', () => {
    it('renders UserCard', async () => {
        const mockCallBack = vi.fn();
        const props: Props = {
            id: 1,
            login: 'foo',
            avatar_url: 'https://foo.bar',
            html_url: 'https://foo.baz',
            onDeleteClick: mockCallBack,
        };
        const user = userEvent.setup();
        render(<UserCard {...props}>bar baz</UserCard>);
        const userCard = screen.getByTestId('card');
        expect(userCard).toBeInTheDocument();
        expect(userCard).toHaveTextContent(props.login);
        const avatarImage = screen.getByRole('img');
        expect(avatarImage).toBeInTheDocument();
        expect(avatarImage).toHaveAttribute('src', props.avatar_url);
        const githubProfileLink = screen.getByText('View User Profile');
        expect(githubProfileLink).toBeInTheDocument();
        expect(githubProfileLink).toHaveAttribute('href', props.html_url);
        const spyGithubLink = vi.spyOn(user, 'click');
        await user.click(githubProfileLink);
        expect(spyGithubLink).toHaveBeenCalledOnce();
        const deleteButton = screen.getByRole('button');
        expect(deleteButton).toBeInTheDocument();
        expect(deleteButton).toHaveTextContent(/delete/i);
        const spyDeleteButton = vi.spyOn(user, 'click');
        await user.click(deleteButton);
        expect(spyDeleteButton).toHaveBeenCalledOnce();
        expect(mockCallBack).toHaveBeenCalledOnce();
    });
});
