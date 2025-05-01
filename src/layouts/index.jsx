import { Outlet } from 'react-router';
import NavBar from '../components/navbar/index.jsx';

import './style.scss';

export default function Layout() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
}