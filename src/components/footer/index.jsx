import LinkedIn from '../../assets/linkedin.png';
import GitHub from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';

import * as styles from './style.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p>&copy; 2025 Logan Schipansky</p>
            <ul className={styles.linkContainer}>
                <li>
                    <a href='https://www.linkedin.com/in/loganschipansky/' target='_blank'>
                        <img src={LinkedIn} width={20}/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/logs123' target='_blank'>
                        <img src={GitHub} width={20} />
                    </a>
                </li>
                <li>
                    <a href='mailto:loganschipansky@gmail.com'>
                        <img src={Gmail} width={20} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}