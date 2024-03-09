import {Routes, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' exact component={Home} />
            </Routes>
        </div>
    )
}
export default Main;