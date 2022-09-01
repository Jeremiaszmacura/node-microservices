import { useContext } from 'react';

import Card from '../../components/ui/Card'
import styles from './MyAccountDashboard.module.css'
import { UserContext, AdminContext } from '../../UserContext';


const MyAccountDashboardPage = () => {

    const { user } = useContext(UserContext);
    const { admin } = useContext(AdminContext);

    return (
        <div>
            <Card>
                <h1>Account Details</h1>
            </Card>
            <Card>
                <div className={styles.largeField}>
                    <div className={styles.smallField}>
                        <p className={styles.title}>Username: </p>
                        <p>{user.body.name}</p>
                        <p>Edit</p>
                    </div>
                    
                    <div className={styles.smallField}>
                        <p className={styles.title}>Email: </p>
                        <p>{user.body.email}</p>
                        <p>Edit</p>
                    </div>
                    <div className={styles.smallField}>
                        <p className={styles.title}>Role: </p>
                        {admin ? (<><p>admin</p><p>Edit</p></>):(<p>user</p>)}
                    </div>
                    
                </div>
            </Card>
        </div>
    );
}

export default MyAccountDashboardPage;