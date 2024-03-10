import {Routes, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Register from './user/Register'
import Login from './user/Login'
import UserDetails from './UserDetails';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route  path='/'  element={<Home/>} />
                <Route  path='/login'  element={<Login/>} />
                <Route  path='/register'  element={<Register/>} />
                <Route  path='/userDetails/:id'  element={<UserDetails/>} />
            </Routes>
        </div>
    )
}
export default Main;