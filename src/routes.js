import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Repositorie from './pages/repositorie';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/repos/:id" component={Repositorie}></Route>

        </Switch>
    </BrowserRouter>
);

export default Routes;