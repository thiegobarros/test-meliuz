import React, {Component} from 'react';
import {
    Container
} from './styles';

class Body extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}

export default Body;