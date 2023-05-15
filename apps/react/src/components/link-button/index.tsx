import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

interface Props {
    to: string;
    color?: 'primary' | 'warning';
}

const LinkButton: FC<PropsWithChildren<Props>> = (props) => {
    const { children, to, color = 'primary' } = props;

    // Variables
    const isPrimary = color === 'primary';
    const isWarning = color === 'warning';

    return (
        <Link
            to={to}
            className={twMerge(
                'inline-block w-auto text-white px-5 py-2 font-bold rounded transition-colors duration-300',
                isPrimary && 'bg-blue-600 hover:bg-blue-800',
                isWarning && 'bg-orange-600 hover:bg-orange-800'
            )}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
