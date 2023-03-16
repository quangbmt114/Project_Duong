import { publicRoutes } from './routes';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import './color.css'
import DefaultLayout from './Component/Layout/DefaultLayout';

function App() {
 
  return (
   <Router>
        <div className='App'>
            <Routes>
                {publicRoutes.map((route,index)=>{
                  const Layout = route.layout || DefaultLayout
                  const Page = route.component
                  return <Route key={index} path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>}
                  />
                })}
        </Routes>
        </div>
   </Router>
  );
}

export default App;
