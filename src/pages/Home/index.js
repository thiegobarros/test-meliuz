import React, { Component } from 'react';
import api from '../../Api';
import {
    Title,
    StyledDivSearch,
    StyledInputSearch,
    StyledButtonSearch
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';
import Table from '../../components/Table';
import { connect } from "react-redux";
import { add } from "../../actions/data";

class Home extends Component {

  async componentDidMount() {
    await api.get('characters')
    .then(response => {
      this.props.add(response.data.results);
    });
  }

  render() {
    const titles = [
      "name", "gender", "real_name", "aliases", "birth"
    ];

    return (
      <Body>
        <Title>Character Listing</Title>
        <Card>
          <StyledDivSearch>
            <StyledInputSearch></StyledInputSearch>
            <StyledButtonSearch>Search</StyledButtonSearch>
          </StyledDivSearch>
          <Table titles={titles} data={this.props.data}></Table>
        </Card>
      </Body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = () => {
  return {
    add
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Home);