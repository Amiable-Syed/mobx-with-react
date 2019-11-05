import React, { Component } from 'react'

export class SplashPage extends Component {
	///
	constructor(props) {
		super(props);
		this.SplashPageTimer = null;
	}

    componentDidMount() {
		// Create a timer to switch away from the splash page after a short delay.
		this.SplashPageTimer = setTimeout(this.OnSplashPageTimeout, 2000);
	}

	componentWillUnmount() {
		this.SplashPageTimer = null;		// Remove the reference to the timer to GC can deallocate it.
	}

	OnSplashPageTimeout = () => {
		this.props.history.replace("/");
	}
	render() {
		return (
			<div>
				<h1>Welcome to the Instructor Rating App!</h1>
				<div>Now loading...</div>
			</div>
		);

	}

}
