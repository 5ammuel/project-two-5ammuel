import React, { Component } from 'react';
import Buttons from './Buttons';
import Welcome from './Welcome';
import Dogs from './Dogs';
import './App.css';
//This is where the app is laid out.

class App extends Component {
	constructor() {
		super();
		this.state = {
			images: [],
		};
	}

	componentDidMount() {
		if (this.state.images.length === 0) {
			fetch('https://dog.ceo/api/breeds/image/random')
				.then((res) => {
					return res.json();
				})
				.then((dogData) => {
					this.setState({ images: [dogData.message] });
					console.log(dogData);
				})
				.catch((err) => {
					return 'Error';
				});
		}
	}

	randomDog=() => {
		console.log('You clicked Rdog');
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((res) => {
				return res.json();
			})
			.then((dogData) => {
				this.setState({ images: [dogData.message] });
			})
			.catch((err) => {
				return 'Error';
			});
	}

	randomoniumDogs=() => {
		fetch('https://dog.ceo/api/breeds/image/random/11')
			.then((res) => {
				return res.json();
			})
			.then((dogData) => {
				this.setState({ images: dogData.message });
				console.log(dogData);
			})
			.catch((err) => {
				return 'Error';
			});
	}

	render() {
		return (
			<main className='home'>
				<Welcome />
				<div className='doggy'>
					<Dogs images={this.state.images} />
				</div>

				<div className='buttonSection'>
					<Buttons
						randomDog={this.randomDog}
						randomoniumDogs={this.randomoniumDogs}
					/>
				</div>
			</main>
		);
	}
}

export default App;
