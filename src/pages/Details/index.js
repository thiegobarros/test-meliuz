import React, { Component } from 'react';
import api from '../../Api';
import {
  Title,
  StyledButton,
  StyledInput,
  StyledSelect,
  Styledlabel,
  StyledDiv,
  StyledDivItens,
  StyledDivResponsive
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {
  edit
} from "../../actions/data";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      details: this.props.toDetails,
      length: Object.keys(this.props.toDetails).length,
      name: this.props.toDetails.name,
      gender: this.props.toDetails.gender,
      real_name: this.props.toDetails.real_name,
      aliases: this.props.toDetails.aliases,
      birth: this.props.toDetails.birth
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    if (document.getElementById('desc') != null) {
      document.getElementById('desc').innerHTML += this.state.details.description ?? '<h2>No Description</h2>';
    }
  }

  editChar = () => {
    this.state.details.name = this.state.name;
    this.state.details.gender = this.state.gender;
    this.state.details.real_name = this.state.real_name;
    this.state.details.aliases = this.state.aliases;
    this.state.details.birth = this.state.birth;
    this.props.edit(this.state.details);
    this.toggleState();
  }

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const arrayGender = {
      '0': 'Genderless',
      '1': 'Male',
      '2': 'Female'
    };
    return (
      <Body>
          <Title>{this.state.details.name} Details</Title>
          <Card>
            <StyledDivResponsive>
              <Link to='/'>
                <StyledButton>
                  <i className="fas fa-reply"></i> Back
                </StyledButton>
              </Link>
              <StyledButton onClick={this.toggleState}>
                <i className="fas fa-edit"></i> Edit
              </StyledButton>
              {this.state.isModalOpen && (
                <Modal
                  id="modal"
                  title="Edit Character"
                  isOpen={this.state.isModalOpen}
                  onClose={this.toggleState}
                  onSave={this.editChar}
                >
                  <div className="box-body">
                    <Styledlabel>Name</Styledlabel><br/>
                    <StyledInput name="name" value={this.state.name} onChange={this.handleInputChange}></StyledInput><br/>
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
              {
                this.state.length > 0
                ? (
                  <div>
                    <StyledDiv>
                      <StyledDivItens>
                        <h1>Name</h1>
                        <p>{this.state.details.name ?? 'No Name'}</p>
                      </StyledDivItens>
                      <StyledDivItens>
                        <h1>Real Name</h1>
                        <p>{this.state.details.real_name ?? 'No Real Name'}</p>
                      </StyledDivItens>
                      <StyledDivItens>
                        <h1>Gender</h1>
                        <p>{arrayGender[this.state.details.gender] ?? 'No Gender'}</p>
                      </StyledDivItens>
                      <StyledDivItens>
                        <h1>Birth</h1>
                        <p>{this.state.details.birth ?? 'No Birth'}</p>
                      </StyledDivItens>
                      <StyledDivItens>
                        <h1>Aliases</h1>
                        <p>{this.state.details.aliases ?? 'No Aliases'}</p>
                      </StyledDivItens>
                    </StyledDiv>
                    <div id="desc">
                      <h1>Description</h1>
                    </div>
                  </div>
                )
                : ''
              }
            </StyledDivResponsive>
            
          </Card>
      </Body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    toDetails: state.toDetails
  }
}

const mapDispatchToProps = () => {
  return {
    edit
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Details);