import React, { Component } from 'react';
import {
    Title
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';
import Table from '../../components/Table';

class Home extends Component {
    render() {
        const data = [
            {
              "Country Name": "Afghanistan",
              Capital: "Kabul",
              Currency: "Afghani"
            },
            {
              "Country Name": "Albania",
              Capital: "Tirane",
              Currency: "Lek"
            },
            {
              "Country Name": "Algeria",
              Capital: "Algiers",
              Currency: "Dinar"
            }
        ];
        return (
          <Body>
              <Title>Listagem</Title>
              <Card>
                  <Table data={data}></Table>
              </Card>
          </Body>
        );
    }
}

export default Home;