import React, { Component } from 'react';
//This is where the buttons live

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	

	render() {
		return (
			<div>
				<button className='random' onClick={this.props.randomDog}>
					Woof!
				</button>
				<button className='randomonium' onClick={this.props.randomoniumDogs}>
					WOOF!
				</button>
			</div>
		);
	}
}

export default Buttons;
