import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, HashRouter, BrowserRouter} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import "./vendor/animate.css";
import "./sass/main.scss";

// Link for examples
import ReactTransition from './Examples/ReactTransition/ReactTransition';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/example" component={ ReactTransition } />
            <Route path="/" component={ App } />
        </Switch>
    </HashRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
