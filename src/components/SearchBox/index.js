import React, { Component } from "react";
import {
    Container
} from './styles';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { character } from "../../actions/details";


class SearchBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const toDetails = (item) => {
            this.props.character(item);
            this.props.history.push('/details');
        }

        return (Object.keys(this.props.data).length === 0 ? ("") :
            <Container>
                <ul>
                    {this.props.data.map(item => {
                        return <li onClick={()=>toDetails(item)}>{item.name}</li>
                    })}
                </ul>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      toDetails: state.toDetails
    }
}

const mapDispatchToProps = () => {
    return {
        character
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(withRouter(SearchBox))