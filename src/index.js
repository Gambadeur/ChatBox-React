import React from 'react';
var ReactDOM = require ('react-dom')
//CSS
import './index.css';
//Components
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
import App from './components/App'
// Rooter
import { BrowserRouter, Match, Miss } from 'react-router';


const Root = () =>{
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Connexion} />
                <Match exactly pattern="/pseudo/:pseudo" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render (<Root />, document.getElementById('root'));