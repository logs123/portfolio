import { Outlet } from 'react-router';
import NavBar from '../components/navbar/index.jsx';
import Footer from '../components/footer/index.jsx';

import * as styles from './style.module.scss';

export default function Layout() {
    return (
        <div className={styles.container}>
            <NavBar />
            <main className={styles.mainContainer}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}