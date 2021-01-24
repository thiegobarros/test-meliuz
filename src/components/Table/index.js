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
import { url } from "../../actions/details";

class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const arrayGender = {
            '0': 'Genderless',
            '1': 'Male',
            '2': 'Female'
        };
        const favorite = (id) => {
            let favorites = localStorage.hasOwnProperty('favorites') ? JSON.parse(localStorage.getItem('favorites')) : new Array()
            if (favorites.includes(id)) {
                let index = favorites.indexOf(id);
                if (index > -1) favorites.splice(index, 1);
            } else {
                favorites.push(id);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        };
        return (
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
                    { this.props.data.length === 0 ? (
                        <tr>
                            <StyledEmptyTd colSpan={this.props.titles.length+1}>Empty</StyledEmptyTd>
                        </tr>
                    ):(
                        this.props.data.map((item, index) => (
                            <tr key={index}>
                                {this.props.titles.map((title, index) => {
                                    let elem = item[title];
                                    switch (title) {
                                        case 'gender':
                                            elem = arrayGender[item[title]];
                                    }
                                    return <td key={index}>{elem ?? '-'}</td>
                                })}
                                <StyledTd key={index}>
                                    <DetailsButton onClick={() => this.props.url(item['api_detail_url'])}>
                                        {/* <StyledLink to={{pathname:'/details/'+index, search:'?url='+item['api_detail_url']}}>Details</StyledLink> */}
                                        <StyledLink to={{pathname:'/details'}}>Details</StyledLink>
                                    </DetailsButton>
                                    <FavoriteButton onClick={() => favorite(item['id'])}>
                                        Star
                                    </FavoriteButton>
                                </StyledTd>
                            </tr>
                        ))
                    )}
                </tbody>
            </StyledTable>
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
        url
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Table)