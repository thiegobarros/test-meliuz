import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import {
    StyledTable,
    StyledTd,
    StyledEmptyTd,
    FavoriteButton,
    TrashButton,
    TableResponsive
} from './styles';
import { connect } from "react-redux";
import { character } from "../../actions/details";
import {
    remove,
    edit
} from "../../actions/data";

const posto = withRouter(({ history, location }) =>{

})
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
        
        const favorite = (elem) => {
            elem.favorite = !elem.favorite;
            this.props.edit(elem);
        };

        const remove = (id) => {
            this.props.remove(id);
        }

        const toDetails = (item) => {
            this.props.character(item);
            this.props.history.push('/details');
        }

        return (
            <TableResponsive>
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
                                <tr item={item} key={item['id']} style={{
                                    visibility: (this.props.tableFavorites && !item['favorite']) || (this.props.searchData && !item['filtered']) ? 'collapse' : 'visible',
                                    cursor:"pointer"
                                }}>
                                    {this.props.titles.map((title, index) => {
                                        let elem = item[title];
                                        switch (title) {
                                            case 'gender':
                                                elem = arrayGender[item[title]];
                                        }
                                        return <td key={index} onClick={()=>toDetails(item)}>{elem ?? '-'}</td>
                                    })}
                                    <StyledTd key={index}>
                                        <FavoriteButton onClick={() => favorite(item)} style={{color: item['favorite'] ? '#fc0' : '#ccc'}}>
                                            <i title="Favorite" className="fas fa-star"></i>
                                        </FavoriteButton>
                                        <TrashButton onClick={() => remove(item['id'])}>
                                            <i title="Remove" className="fas fa-trash"></i>
                                        </TrashButton>
                                    </StyledTd>
                                </tr>
                            ))
                        )}
                    </tbody>
                </StyledTable>
            </TableResponsive>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      toDetails: state.toDetails,
      data:  state.data,
      tableFavorites: state.tableFavorites,
      searchData: state.searchData
    }
  }
  
const mapDispatchToProps = () => {
    return {
        character,
        remove,
        edit
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(withRouter(Table))