import React, { Component } from "react";
import {
    StyledTable,
    DetailsButton,
    StyledLink,
    StyledTd,
    StyledEmptyTd,
    FavoriteButton
} from './styles';
import { connect } from "react-redux";
import { character } from "../../actions/details";
import {
    remove,
    edit
} from "../../actions/data";

class Table extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(this.props.tableFavorites)
    }

    render() {
        const arrayGender = {
            '0': 'Genderless',
            '1': 'Male',
            '2': 'Female'
        };
        
        const favorite = (elem) => {
            elem.favorite = true;
            this.props.edit(elem);
            console.log(this.props.data);
        };

        const remove = (id) => {
            this.props.remove(id);
        }

        return (
            <div>
                <p>{Object.keys(this.props.data).length} Character(s)</p>
                <StyledTable>
                    <thead>
                        <tr>
                            {this.props.titles.map((title, index) => (
                                <th key={index}>{title.replace('_', ' ').toUpperCase()}</th>
                            ))}
                            <th>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        { Object.keys(this.props.data).length === 0 ? (
                            <tr>
                                <StyledEmptyTd colSpan={this.props.titles.length+1}>Empty</StyledEmptyTd>
                            </tr>
                        ):(
                            this.props.data.map((item, index) => (
                                <tr item={item} key={item['id']} style={{visibility: this.props.tableFavorites && !item['favorite'] ? 'collapse' : 'visible'}}>
                                    {this.props.titles.map((title, index) => {
                                        let elem = item[title];
                                        switch (title) {
                                            case 'gender':
                                                elem = arrayGender[item[title]];
                                        }
                                        return <td key={index}>{elem ?? '-'}</td>
                                    })}
                                    <StyledTd key={index}>
                                        <DetailsButton onClick={() => this.props.character(item)}>
                                            <StyledLink to={{pathname:'/details'}}>Details</StyledLink>
                                        </DetailsButton>
                                        <FavoriteButton onClick={() => favorite(item)}>
                                            Star
                                        </FavoriteButton>
                                        <FavoriteButton onClick={() => remove(item['id'])}>
                                            Trash
                                        </FavoriteButton>
                                    </StyledTd>
                                </tr>
                            ))
                        )}
                    </tbody>
                </StyledTable>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      toDetails: state.toDetails,
      data:  state.data,
      tableFavorites: state.tableFavorites
    }
  }
  
const mapDispatchToProps = () => {
    return {
        character,
        remove,
        edit
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Table)