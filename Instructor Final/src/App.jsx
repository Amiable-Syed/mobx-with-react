
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import { SplashPage } from './SplashScreen';
import MainPage from './MainPage';
import UiStore from "./stores/UiStore";
/// App
export default class App extends Component {
	///
	render() {

		return (
			<main>
				<BrowserRouter>
					<Switch>
						<Route exact path="/splash" render={ props => <SplashPage {...props} /> } />
						<Route exact path="/" render={ props => <MainPage {...props} store={UiStore} /> } />
					</Switch>
					<Redirect from="/*" to="/splash" />
				</BrowserRouter> 
			</main>
		);

	}

}
