import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes, {object} from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar, Box, Card, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography,
    makeStyles, Button, TextField
} from '@material-ui/core';
import Edit from "./editUser";
import Add from "./addUser";
import {Search as SearchIcon} from 'react-feather';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Toolbar from "./Toolbar";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import Details from "./detail";
import data from "./data";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {},
    editButton: {
        marginRight: theme.spacing(3)
    },
    addButton: {
        marginLeft: theme.spacing(134)
    },
    avatar: {
        marginRight: theme.spacing(2)
    }
}));


const ListUser = ({className, ...rest}) => {

    const [customers, setCustomers] = useState(data);
    const classes = useStyles();
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [customer, setCustomer] = useState('');

    // useEffect(() => {
    //     OpenDelete(customer);
    // }, [OpenDelete]);


    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = customers.map((customer) => customer.id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
        debugger
    };

    const CloseEdit = () => {
        setEdit(false)
    };

    //edit
    const OpenEdit = (customer) => {
        console.log(customer)
        setEdit(true);
        setCustomer(customer)
        // return (
    };

    const OpenDelete = (customer) => {
        const customerId = customer.id;
        let a = customers.filter(lpt => lpt.id !== customerId)
        setCustomers(a)
        console.log(a)
    }

    const DeleteAll = (customer) => {
        let a = customers.filter(cus => cus == customer)
    }

    return (
        <div>
            <Edit value={customer}
                  handClose={CloseEdit} isOpen={edit}/>

            <Toolbar/>
            <Card
                className={clsx(classes.root, className)}
                {...rest}
            >
                <PerfectScrollbar>
                    <Box minWidth={1050}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedCustomerIds.length === customers.length}
                                            color="primary"
                                            indeterminate={
                                                selectedCustomerIds.length > 0
                                                && selectedCustomerIds.length < customers.length
                                            }
                                            onChange={handleSelectAll}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        Name
                                    </TableCell>
                                    <TableCell>
                                        Giới tính
                                    </TableCell>
                                    <TableCell>
                                        Ngày sinh
                                    </TableCell>
                                    <TableCell>
                                        Tuổi
                                    </TableCell>
                                    <TableCell>
                                        Email
                                    </TableCell>
                                    <TableCell>
                                        Địa chỉ
                                    </TableCell>
                                    <TableCell>
                                        Quê quán
                                    </TableCell>
                                    <TableCell>
                                        Số điện thoại
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*{customers && customers.map((customer,index) => (*/}
                                {customers.slice(0, limit).map((customer) => (
                                    <TableRow
                                        hover
                                        key={customer.id}
                                        selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                                                onChange={(event) => handleSelectOne(event, customer.id)}
                                                value="true"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                alignItems="center"
                                                display="flex"
                                            >
                                                <Typography
                                                    color="textPrimary"
                                                    variant="body1"
                                                >
                                                    {customer.name}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            {customer.sex}
                                        </TableCell>
                                        <TableCell>
                                            {moment(customer.date).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            {customer.age}
                                        </TableCell>
                                        <TableCell>
                                            {customer.email}
                                        </TableCell>
                                        <TableCell>
                                            {customer.address}
                                            {/*{`${customer.address.street}, ${customer.address.state}, ${customer.address.city}, ${customer.address.country}`}*/}
                                        </TableCell>
                                        <TableCell>
                                            {customer.country}
                                        </TableCell>
                                        <TableCell>
                                            {customer.phone}
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primary" onClick={() => OpenEdit(customer)}><EditIcon
                                                fontSize="small"/></Button>
                                            <Button color="secondary" onClick={() => OpenDelete(customer)}><DeleteIcon
                                                fontSize="small" style={{color: red[500]}}/></Button>
                                            {/*<button onClick={(event) => {*/}
                                            {/*    setName(sName);*/}
                                            {/*    cycle++;*/}
                                            {/*}} value={name}>*/}
                                            {/*    Search*/}
                                            {/*</button>*/}
                                            {/*<Edit value={customer} key={customer.id}*/}
                                            {/*      handClose={CloseEdit}*/}
                                            {/*      isOpen={edit}/>*/}
                                            {/*<Details value={customer} handClose={CloseEdit} isOpen={edit}/>*/}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </PerfectScrollbar>
                <TablePagination
                    component="div"
                    count={customers.length}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>
        </div>

    );
};

ListUser.propTypes = {
    className: PropTypes.string,
    customers: PropTypes.array.isRequired
};

export default ListUser;
