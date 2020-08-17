import React, { Component } from 'react';
//This is where the buttons live

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	

	render() {
		return (
			<div className="buttonRow">
				<button className='random' onClick={this.props.randomDog}>
					Woof!
				</button>
				<button className='randomonium' onClick={this.props.randomoniumDogs}>
					CORGI MODE
				</button>
			</div>
		);
	}
}

export default Buttons;
