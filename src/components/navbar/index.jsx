import { NavLink } from 'react-router';
import Initials from '../../assets/initials.png';

import * as styles from './style.module.scss';

export default function NavBar() {
    return (
        <nav className={styles.container}>
            <NavLink to='/'>
                <img src={Initials} width={50} height={50}/>
            </NavLink>
            <div className={styles.link__container}>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/experience'>Experience</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
            </div>
        </nav>
    );
}