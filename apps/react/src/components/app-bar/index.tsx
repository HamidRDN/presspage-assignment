import { Link } from 'react-router-dom';
import Logo from '@assets/images/logo.png';

const AppBar = () => {
    return (
        <header className="flex bg-blue-50 h-16 border-b items-center">
            <div className="px-6">
                <Link to="/" className="inline-block">
                    <img src={Logo} alt="logo" className="w-10 h-10" />
                </Link>
            </div>
            <div className="text-gray-900 text-lg">{import.meta.env.VITE_APP_TITLE}</div>
        </header>
    );
};

export default AppBar;
