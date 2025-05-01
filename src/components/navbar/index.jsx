import { NavLink } from 'react-router';

import './style.scss';

export default function NavBar() {
    return (
        <nav>
            <NavLink to='/'>Logan Schipansky</NavLink>
            <div className='link__container'>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </nav>
    );
}