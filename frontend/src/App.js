import { useState, useMemo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Layout from './components/layout/Layout';
import { UserContext, AdminContext } from './UserContext';

const App = () => {

  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const value2 = useMemo(() => ({ admin, setAdmin }), [admin, setAdmin]);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("userInStorage");
    const roleFromStorage = localStorage.getItem("roleInStorage");
    if (userFromStorage) {
        const userFromStorageParsed = JSON.parse(userFromStorage)
        setUser(userFromStorageParsed);
    }
    if (roleFromStorage) {
        const roleFromStorageParsed = JSON.parse(roleFromStorage)
        setAdmin(roleFromStorageParsed);
    }
  }, []);

  return (
    <UserContext.Provider value={value}>
      <AdminContext.Provider value={value2}>
        <Layout>
          <Routes>
            <Route path='/' exact element={<HomePage />}>
            </Route>    
            <Route path='/page2' exact element={<Page2 />}>
            </Route>     
            <Route path='/page3' exact element={<Page3 />}>
            </Route>
            <Route path='/register' exact element={<RegisterPage />}>
            </Route>  
            <Route path='/login' exact element={<LoginPage />}>
            </Route>  
          </Routes>
        </Layout>
      </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;