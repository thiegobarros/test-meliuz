import React, { Component } from 'react';
import {
  Title
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    }
  }

  render() {
    return (
      <Body>
          <Title>Datails of {this.state.id}</Title>
          <Card>
          </Card>
      </Body>
    );
  }
}

export default Details;