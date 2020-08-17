import React from 'react';
import DogHouse from './DogHouse';
//This is where images will be formatted to display
const Dogs = (props) => {
	const showImages = () => {
		return props.images.map((image) => {
			return <DogHouse url={image} />;
		});
	};
	return (
		<div>
			<section className="imageHolster">{showImages()}</section>
		</div>
	);
};

export default Dogs;
