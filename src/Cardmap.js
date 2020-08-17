import React, { Component } from 'react';
import Cards from "./Cards";
class Cardmap extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Cards />
            </div>
        );
    }
}

export default Cardmap;