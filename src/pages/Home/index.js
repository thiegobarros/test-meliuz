import React, { Component } from 'react';
import api from '../../Api';
import {
    Title
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';
import Table from '../../components/Table';

class Home extends Component {

    state = {
      listagem: []
    }

    async componentDidMount() {
      const response = await api.get('');
      this.setState({
        listagem: response.data.results
      })
    }

    render() {
        const { listagem } = this.state;

        const titles = [
          "name", "gender", "real_name", "aliases", "birth"
        ]
        return (
          <Body>
              <Title>Character Listing</Title>
              <Card>
                  <Table titles={titles} data={listagem}></Table>
              </Card>
          </Body>
        );
    }
}

export default Home;