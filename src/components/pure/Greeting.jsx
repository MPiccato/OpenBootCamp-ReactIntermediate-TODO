import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            age: 44
        }

    }
    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name}!
                </h1>
                <h2>
                    tu edad es {this.state.age}
                </h2>
            </div>
        );
    }
}


Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired

};


export default Greeting;
