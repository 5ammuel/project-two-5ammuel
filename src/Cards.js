import React, {Component} from "react";

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
            cardeo: "",
            cardeb: "",
		};
    }
    
	componentDidMount() {
		fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
		.then((res) => res.json())
		.then((results) => {
		this.setState({ 
            cardeo: results.cards[2].value,
            cardeb: results.cards[1].value });
		});
	}

	render() {
		return (
        <div>
            <li>

            </li>
        </div>
        )
	}
}

export default Cards;