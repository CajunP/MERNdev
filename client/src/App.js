import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/layouts/Navbar';
import Landing from '../src/components/layouts/Landing';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';

const App = () => (
    <Router>
        <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
        </Fragment>
        <section className="container">
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </section>
    </Router>
);
export default App;
