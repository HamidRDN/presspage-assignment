import { render, screen } from '@testing-library/react';
import LinkButton from '.';
import { BrowserRouter } from 'react-router-dom';

describe('LinkButton', () => {
    it('renders LinkButton', () => {
        render(<LinkButton to="/foo">bar baz</LinkButton>, { wrapper: BrowserRouter });
        const linkButton = screen.getByText(/bar baz/i);
        expect(linkButton).toBeInTheDocument();
        expect(linkButton).toHaveAttribute('href', '/foo');
    });
});
