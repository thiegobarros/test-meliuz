import React, { Component } from "react";
import {
    StyledTable,
    DetailsButton,
    StyledLink,
    StyledTd,
    StyledEmptyTd
} from './styles'

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                    { this.props.data.length == 0 ? (
                        <tr>
                            <StyledEmptyTd colSpan={this.props.titles.length+1}>Empty</StyledEmptyTd>
                        </tr>
                    ):(
                        this.props.data.map((item, index) => (
                            <tr key={index}>
                                {this.props.titles.map((title, index) => (
                                    <td key={index}>{item[title] ?? '-'}</td>
                                ))}
                                <StyledTd>
                                    <DetailsButton>
                                        <StyledLink to={'/details/'+index}>Details</StyledLink>
                                    </DetailsButton>
                                </StyledTd>
                            </tr>
                        ))
                    )}
                </tbody>
            </StyledTable>
        );
    }
}

export default Card