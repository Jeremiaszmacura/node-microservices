import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';

import LoginForm from "../components/users/LoginForm";
import { UserContext, AdminContext } from "../UserContext";
import styles from './Login.module.css'

const LoginPage = () => {

    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const {user, setUser} = useContext(UserContext);
    // eslint-disable-next-line no-unused-vars
    const {admin, setAdmin} = useContext(AdminContext);

    const [loginError, setLoginError] = useState(null);

    const loginHandler = (loginData) => {
        fetch(
            'http://localhost:4000/users/login',
            {
                method: 'POST',
                body: JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include'
            }
        )
        .then(res => {
            if (res.ok) {
                console.log('[CLIENT] login - fetch successful');
            } else {
                console.log('[CLIENT] login - fetch NOT successful');
            }
            res.json().then((data) => {
                if (data.message === "Successfully Authenticated") {
                    setUser(data);
                    if (data.role === 'admin') setAdmin(data.body.role);
                    localStorage.setItem('userInStorage', JSON.stringify(data));
                    localStorage.setItem('roleInStorage', JSON.stringify(data.body.role));
                    navigate('/');
                } else {
                    setLoginError(data);
                    console.log(data)
                }
            });
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <section>
            <div className={styles.errorCard}>
                <Card>
                    <div className={styles.errorMessage}>
                        {loginError && <p>{loginError.error}</p>}
                    </div>
                    <LoginForm onLogin={loginHandler} />
                </Card>
            </div>
            
        </section>
    );
}

export default LoginPage;