import AppBar from '@components/app-bar';
import { Outlet } from 'react-router-dom';

const LayoutMain = () => (
    <div>
        <AppBar />
        <Outlet />
    </div>
);

export default LayoutMain;
