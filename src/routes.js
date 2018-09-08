import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from './components/pages';
import Home from './components/home';

const Routes = () => {
        return(
            <div>
                <Home/>
                <Switch>
                    <Route path="/artist/:id"  component={Page}/>
                </Switch>
            </div>
        )
}

export default Routes;