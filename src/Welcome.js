import React, { Component } from 'react';
//This is where the Title of the page lives

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1>Welcome to the Dog House!</h1>
				<h2>
					<p>Click "Woof!" to see a new doggo!</p>
					<p>Click "CORGI MODE" for corgi's only!</p>
				</h2>
			</div>
		);
	}
}

export default Welcome;
