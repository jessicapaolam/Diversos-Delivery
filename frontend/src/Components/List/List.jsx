import React, { Component } from 'react'
import ApiService from "../../Services/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';

class ListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            message: null
        }
        this.details = this.details.bind(this);
        this.reloadList = this.reloadList.bind(this);
    }

    componentDidMount() {
        this.reloadList();
    }

    reloadList() {
        ApiService.fetchAllData()
            .then((res) => {
                this.setState({data: res.data.result})
            });
    }

    details(id) {
        window.localStorage.setItem("userId", id);
        // this.props.history.push('/details');
    }

    render() {
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
                        {this.state.data.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                                <TableCell align="right" onClick={() => this.details(row.id)}><CreateIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default ListComponent;