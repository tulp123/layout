import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    makeStyles, TableCell, TableBody
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Add from "./addUser";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from '@material-ui/icons/AddBox';
import red from "@material-ui/core/colors/red";
import DeleteIcon from "@material-ui/icons/Delete";
import green from "@material-ui/core/colors/green";
import data from "./data";

const useStyles = makeStyles((theme) => ({
    root: {},
    importButton: {
        marginRight: theme.spacing(1)
    },
    exportButton: {
        marginRight: theme.spacing(1)
    },
    deleteButton: {
        marginLeft: theme.spacing(2)
    }
}));

const Toolbar = ({ className, ...rest }) => {

    const initUser = {
        id:'',
        name: '',
        email: '',
        phone: '',
        age: '',
        address:'',
        city: '',
        country: '',
        state: '',
        street: '',
        date: '',
        time: ''
    }

    const classes = useStyles();
    const [add, setAdd] = useState(false);
    const [searchUser, setSearchUser] = useState("");
    const [user, setUser] = useState("");
    const [customer, setCustomer] = useState(initUser);

    useEffect(() => {

    })

    const onChangeSearchUser = e => {
        const searchUser = e.target.value;
        const a = data.filter(product => {
            return product.name.toLowerCase().includes(searchUser.toLowerCase());
        })
        setSearchUser(searchUser);
        setCustomer(a)
        console.log(a)
        item.name = customer.name
        item.email = customer.email
        item.phone = customer.phone
        item.address = customer.address
        item.country = customer.country
        item.age = customer.age
        item.date = customer.date
        item.time = customer.time
    };

    //add
    const OpenAdd = () => {
        setAdd(true)
    };

    const CloseAdd = () => {
        setAdd(false)
    };

    // const OpenDelete = (customer) => {
    //     const customerId = customer.id;
    //     let a = customers.filter(lpt => lpt.id !== customerId)
    //     setCustomers(a)
    //     console.log(a)
    // }

    return (
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Box
                display="flex"
                justifyContent="flex-end"
            >
                <Button className={classes.importButton}>
                    Import
                </Button>
                <Button className={classes.exportButton}>
                    Export
                </Button>
                <Button color={"primary"} variant={"contained"} onClick={OpenAdd}>
                    Add
                </Button>
                <Add handOpenAdd={add}
                     handCloseAdd={CloseAdd}
                />
                <Button
                    color="primary"
                    variant="contained"
                    className={classes.deleteButton} disabled={"disabled"}>
                    Delete
                </Button>
            </Box>
            <Box mt={3}>
                <Card>
                    <CardContent>
                            <Box maxWidth={500}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                fontSize="small"
                                                color="action"
                                            >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Search customer"
                                value={searchUser}
                                variant="outlined"
                                onChange={onChangeSearchUser}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

Toolbar.propTypes = {
    className: PropTypes.string
};

export default Toolbar;
