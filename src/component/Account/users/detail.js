import React, {useEffect, useState} from "react";
import {Box, Button, makeStyles, TableCell, TextField} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";


const useStyles = makeStyles((theme) => ({
    root: {},
    editButton: {
        marginRight: theme.spacing(3)
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Details = (props) => {

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

    useEffect(() => {
        if (props.value !== 1) {
            initUser.id = props.value.id
            initUser.name = props.value.name
            initUser.email = props.value.email
            initUser.phone = props.value.phone
            initUser.address = props.value.address
            initUser.country = props.value.country
            initUser.age = props.value.age
            initUser.date = props.value.date
            initUser.time = props.value.time
            setCustomer(initUser)
        }
    }, [props])


    const [customer, setCustomer] = useState(initUser);
    const classes = useStyles();

    const handleInputChange = event => {
        const {name, value} = event.target;
        setCustomer({...customer, [name]: value});
    };

    const handleAddressChange = event => {
        const [name, value] = event.target;
        setCustomer({...customer, [name]: value});
        console.log(customer)
    };

    return (
        <div className={classes.root}>
            <Dialog open={props.isDetail} onClose={props.CloseDetail} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thông tin nhân viên chi tiết</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={customer.name}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        disabled={"disabled"}
                    />
                    <TextField
                        margin="dense"
                        name="age"
                        label="Tuổi của bạn"
                        type="text"
                        fullWidth
                        value={customer.age}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        disabled={"disabled"}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="text"
                        fullWidth
                        value={customer.email}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        disabled={"disabled"}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        value={customer.phone}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        disabled={"disabled"}
                    />
                    <TextField
                        margin="dense"
                        name="date"
                        label="Ngày sinh"
                        type="date"
                        fullWidth
                        value={customer.date}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        disabled={"disabled"}
                    />
                    <TextField
                        margin="dense"
                        name="address"
                        label="Address"
                        type="text"
                        fullWidth
                        value={customer.address}
                        // value={`${customer.street}, ${customer.state}, ${customer.city}, ${customer.country}`}
                        onChange={handleAddressChange}
                        variant={"outlined"}
                        disabled={"disabled"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.CloseDetail} variant={"outlined"} color="primary">
                        Đóng
                    </Button>
                    <Button onClick={props.CloseDetail} variant={"outlined"} color="primary">
                        Sửa
                    </Button>
                    <Button onClick={props.CloseDetail} variant={"outlined"} color="primary">
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Details;

/*
 <Button className={classes.editButton}
                            color="primary"
                            variant="contained"
                            onClick={OpenEdit}>
                        Edit Employee
                    </Button>
                    {customers.slice(0, limit).map((customer) => (
                        <Edit isOpen={edit}
                              handClose={CloseEdit}
                              value={customer}/>
                    ))}

                     <Button
                        color="inherit"
                        variant="contained"
                        onClick={OpenAdd}>
                        Add employee
                    </Button>
                    <Add handOpenAdd={add}
                         handCloseAdd={CloseAdd}/>

 */