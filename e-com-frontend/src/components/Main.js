import {Routes, Switch, Route } from 'react-router-dom';
import Home from './home/Home';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route  path='/'  element={<Home/>} />
            </Routes>
        </div>
    )
}
export default Main;