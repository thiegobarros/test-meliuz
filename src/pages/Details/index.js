import React, { Component } from 'react';
import api from '../../Api';
import {
  Title
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';
import { connect } from "react-redux";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      length: 0
    }
  }

  async componentDidMount() {
    const response = await api.get('character/'+this.props.toDetails.slice(-10));
    this.setState({
      details: response.data.results,
      length: Object.keys(response.data.results).length
    });
    document.getElementById('desc').innerHTML += this.state.details.description ?? '<h2>No Description</h2>';
  }

  render() {
    const titles = [
      "name", "gender", "real_name", "aliases", "birth", "description"
    ];
    return (
      <Body>
          <Title>Details of {this.state.details.name}</Title>
          <Card>
            <div>
              {
                this.state.length > 0
                ? (
                  <div>
                    <h1>Name</h1>
                    <input defaultValue={this.state.details.name ?? ''}></input>
                    <h1>Gender</h1>
                    <input defaultValue={this.state.details.gender ?? ''}></input>

                    <h1>Real Name</h1>
                    <input defaultValue={this.state.details.real_name ?? ''}></input>

                    <h1>Aliases</h1>
                    <input defaultValue={this.state.details.aliases ?? ''}></input>

                    <h1>Birth</h1>
                    <input defaultValue={this.state.details.birth ?? ''}></input>

                    <div id="desc">
                      <h1>Description</h1>
                    </div>
                  </div>
                )
                : ''
              }
            </div>
            
          </Card>
      </Body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDetails: state.toDetails
  }
}

export default connect(mapStateToProps)(Details);