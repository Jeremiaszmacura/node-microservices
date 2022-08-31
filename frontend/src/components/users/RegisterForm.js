import { useRef } from 'react';

import styles from './LoginForm.module.css';

const RegisterForm = (props) => {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const repeatPasswordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const registerData = {
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
        };

        props.onRegister(registerData);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <h1 className={styles.heading}>Register</h1>
            <div className={styles.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' required id='name' ref={nameInputRef} />
                </div>
            <div className={styles.control}>
                <label htmlFor='email'>Email</label>
                <input type='text' required id='email' ref={emailInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' required id='password' ref={passwordInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor='repeatPassword'>Repeat password</label>
                <input type='password' required id='repeat-password' ref={repeatPasswordInputRef} />
            </div>
            <div className={styles.actions}>
                <button>Register</button>
            </div>
        </form>
    );

}

export default RegisterForm;