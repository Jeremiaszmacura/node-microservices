import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Layout from './components/layout/Layout';

const App = () => {
    return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<HomePage />}>
          </Route>    
          <Route path='/page2' exact element={<Page2 />}>
          </Route>     
          <Route path='/page3' exact element={<Page3 />}>
          </Route>    
        </Routes>
      </Layout>
    );
}

export default App;