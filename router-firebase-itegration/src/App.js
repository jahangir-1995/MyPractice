import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
