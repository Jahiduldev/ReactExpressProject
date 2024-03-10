import {Routes, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Register from './user/Register'
import Login from './user/Login'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route  path='/'  element={<Home/>} />
                <Route  path='/login'  element={<Login/>} />
                <Route  path='/register'  element={<Register/>} />
            </Routes>
        </div>
    )
}
export default Main;