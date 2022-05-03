import React from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { JournalScreen } from '../components/auth/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
     <Route path='/auth' component={ AuthRouter } />
					<Route exact path='/' component={ JournalScreen } />
					<Redirect to='auth/login' />
				</Switch>
			</div>
		</Router>
	);
};