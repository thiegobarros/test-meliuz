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
import Modal from '../../components/Modal';
import { connect } from "react-redux";
import {
  get,
  add
} from "../../actions/data";
import {
  set
} from "../../actions/table";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      name: "",
      gender: "",
      real_name: "",
      aliases: "",
      birth: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  async componentDidMount() {
    if (Object.keys(this.props.data).length === 0) {
      await api.get('characters')
      .then(response => {
        this.props.get(response.data.results);
      });
    }
  }

  addChar = () => {
    this.props.add(
    {
      name: this.state.name,
      gender: this.state.gender,
      real_name: this.state.real_name,
      aliases: this.state.aliases,
      birth: this.state.birth,
      id: 2000 + Math.floor((9999 - 2000) * Math.random())
    });
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  viewFav = () => {
    this.props.setFavorites();
  }

  render() {
    const titles = [
      "name", "gender", "real_name", "aliases", "birth"
    ];

    return (
      <Body>
        <Title>Character Listing</Title>
        <Card>
          <button onClick={this.toggleState}>Add</button>
          <button onClick={this.viewFav}>favorites</button>
          {this.state.isModalOpen && (
            <Modal
              id="modal"
              title="Add Character"
              isOpen={this.state.isModalOpen}
              onClose={this.toggleState}
              onSave={this.addChar}
            >
              <div className="box-body">
                <label>Name</label><br/>
                <input name="name" value={this.state.name} onChange={this.handleInputChange}></input><br/>
                <label>Gender</label><br/>
                <select name="gender" value={this.state.gender} onChange={this.handleInputChange}>
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                  <option value={0}>Genderless</option>
                </select><br/>
                <label>Real Name</label><br/>
                <input name="real_name" value={this.state.real_name} onChange={this.handleInputChange}></input><br/>
                <label>Aliases</label><br/>
                <input name="aliases" value={this.state.aliases} onChange={this.handleInputChange}></input><br/>
                <label>Birth</label><br/>
                <input name="birth" value={this.state.birth} onChange={this.handleInputChange}></input><br/>
              </div>
            </Modal>
          )}
          <StyledDivSearch>
            <StyledInputSearch></StyledInputSearch>
            <StyledButtonSearch>Search</StyledButtonSearch>
          </StyledDivSearch>
          <Table titles={titles}></Table>
        </Card>
      </Body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    tableFavorites: state.tableFavorites
  }
}

const mapDispatchToProps = () => {
  return {
    get,
    add,
    setFavorites: set
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Home);