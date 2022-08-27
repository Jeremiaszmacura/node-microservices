import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.body}>
            <div className={styles.box}>
                <div className={styles.glass}></div>
                <div className={styles.content}>
                    <h2>Glowing Border</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    </p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.glass}></div>
                <div className={styles.content}>
                    <h2>Glowing Border</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    </p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.glass}></div>
                <div className={styles.content}>
                    <h2>Glowing Border</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;