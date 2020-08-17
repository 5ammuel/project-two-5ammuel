import React, { Component } from 'react';
//This is where images are called
class DogHouse extends Component {
	constructor() {
		super();
		this.state = {
			images: [],
		};
	}

	
	render() {
		return (
			<div>
				<img src={this.props.url} alt='Good pupper!' />
			</div>
		);
	}
}

export default DogHouse;
