import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Node Microservices</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/page2'>Page 2</Link>
                    </li>
                    <li>
                        <Link to='/page3'>Page 3</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;