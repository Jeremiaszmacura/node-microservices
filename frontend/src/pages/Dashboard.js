import { Link } from 'react-router-dom';

import Card from '../components/ui/Card'
import styles from './Dashboard.module.css'

const DashboardPage = () => {

    return (
        <div className={styles.dashboardPage}>
            <Card>
                <h1>Admin Dashboard Page</h1>
                <div className={styles.actions}>
                    <ul>
                        <li>
                            <Link to='/dashboard/my-account'><button>Manage My Account</button></Link>
                        </li>
                        <li>
                            <Link to='/dashboard/all-users'><button>Manage All Users</button></Link>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    );
}

export default DashboardPage;