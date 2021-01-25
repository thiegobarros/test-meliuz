import React, { Component } from 'react';
import api from '../../Api';
import {
    Title,
    StyledDivSearch,
    StyledInputSearch,
    StyledButton,
    StyledInput,
    StyledSelect,
    Styledlabel
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import { connect } from "react-redux";
import {
  get,
  add,
  filter
} from "../../actions/data";
import {
  set,
  search
} from "../../actions/table";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      name: "",
      gender: 0,
      real_name: "",
      aliases: "",
      birth: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      name: "",
      gender: 0,
      real_name: "",
      aliases: "",
      birth: ""
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
    this.toggleState();
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

  search = () => {
    this.props.search(true);
  }

  clear = () => {
    this.props.search(false);
    let searchField = document.getElementById("search");
    searchField.value = "";
  }

  filterData = (event) => {
    if (event.target.value.length < 3) return;
    this.props.filter(event.target.value);
  }

  render() {
    const titles = [
      "name", "gender", "real_name", "aliases", "birth"
    ];

    return (
      <Body>
        <Title>Character Listing</Title>
        <Card>
          <StyledButton onClick={this.toggleState}>
            <i className="fas fa-plus"></i> Add
          </StyledButton>
          <StyledButton onClick={this.viewFav}>
          <i className="fas fa-star"></i> Favorites
          </StyledButton>
          {this.state.isModalOpen && (
            <Modal
              id="modal"
              title="Add Character"
              isOpen={this.state.isModalOpen}
              onClose={this.toggleState}
              onSave={this.addChar}
            >
              <div className="box-body">
                <Styledlabel>Name</Styledlabel><br/>
                <StyledInput required name="name" value={this.state.name} onChange={this.handleInputChange}></StyledInput><br/>
                <Styledlabel>Real Name</Styledlabel><br/>
                <StyledInput name="real_name" value={this.state.real_name} onChange={this.handleInputChange}></StyledInput><br/>
                <Styledlabel>Gender</Styledlabel><br/>
                <StyledSelect name="gender" value={this.state.gender} onChange={this.handleInputChange}>
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                  <option value={0}>Genderless</option>
                </StyledSelect><br/>
                <Styledlabel>Aliases</Styledlabel><br/>
                <StyledInput name="aliases" value={this.state.aliases} onChange={this.handleInputChange}></StyledInput><br/>
                <Styledlabel>Birth</Styledlabel><br/>
                <StyledInput name="birth" value={this.state.birth} onChange={this.handleInputChange}></StyledInput><br/>
              </div>
            </Modal>
          )}
          <StyledDivSearch>
            <StyledButton onClick={this.clear}>
              <i className="fas fa-trash"></i> Clear
            </StyledButton>
            <StyledInputSearch id="search" onChange={this.filterData}></StyledInputSearch>
            <StyledButton onClick={this.search}>
              <i className="fas fa-search"></i> Search
            </StyledButton>
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
    tableFavorites: state.tableFavorites,
    searchData: state.searchData
  }
}

const mapDispatchToProps = () => {
  return {
    get,
    add,
    setFavorites: set,
    search,
    filter
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Home);