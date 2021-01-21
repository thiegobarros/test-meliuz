import React, { Component } from "react";
import {
    StyledTable,
    DetailsButton,
    StyledLink,
    StyledTd
} from './styles'

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const titles=Object.keys(this.props.data[0]);
        return (
            <StyledTable>
                <thead>
                    <tr>
                        {titles.map((title, index) => (
                            <th key={index}>{title}</th>
                        ))}
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((item, index) => (
                        <tr key={index}>
                            {titles.map((title, index) => (
                                <td key={index}>{item[title]}</td>
                            ))}
                            <StyledTd>
                                <DetailsButton>
                                    <StyledLink to={'/details/'+index}>Detalhes</StyledLink>
                                </DetailsButton>
                            </StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        );
    }
}

export default Card