import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={ <Login /> } />
    <Route path="/recipes" element={ <MainPage /> } />
  </Routes>
);

export default Router;
