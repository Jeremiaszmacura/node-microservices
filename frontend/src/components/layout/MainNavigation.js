import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';
import { UserContext, AdminContext } from '../../UserContext';

const MainNavigation = () => {

    const { user, setUser } = useContext(UserContext);
    const { admin, setAdmin } = useContext(AdminContext);

    const logOut = () => {
        fetch(
            'http://localhost:4000/users/logout',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include'
            }
        ).then(res => {
            if (res.ok) {
                console.log('[CLIENT] logout - fetch successful');
            } else {
                console.log('[CLIENT] logout - fetch NOT successful');
            }
            res.json().then(data => console.log('[CLIENT] logout - ' + data.message));
        });
        localStorage.clear();
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Node Microservices</div>
            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <Link className={styles.a} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/page2'>Page 2</Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/page3'>Page 3</Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/register'>Register</Link>
                    </li>
                </ul>
            </nav>
            {user ? (
                <Link onClick={ () => {logOut(); setUser(null); setAdmin(null)} } to={'/'} ><button>Logout</button></Link>
            ) : (
                <Link to='/login'><button>Login</button></Link>
            )}
        </header>
    )
}

export default MainNavigation;