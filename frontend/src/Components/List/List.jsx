import React, { Component } from 'react'
// import ApiService from "../../Services/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ListComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nome Lojista</TableCell>
                            <TableCell>Data Criação</TableCell>
                            <TableCell>Nome Cliente</TableCell>
                            <TableCell>Valor Total</TableCell>
                            <TableCell>Valor Pendente</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {this.state.list.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right">{row.store}</TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                                <TableCell align="right">{row.customer.name}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right" onClick={() => this.details(row._id)}><CreateIcon /></TableCell>

                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const ListQuery = gql `
query orderList {
    orders {
        _id
        reference        
    }
}
`;

export default graphql(ListQuery, { name: 'orderList' })(ListComponent);