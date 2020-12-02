import React, {useEffect, useState} from "react";
import {Box, Button, makeStyles, TableCell, TextField} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import data from "./data";


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
    title : {
        marginLeft: theme.spacing(25),
        backgroundColor: theme.palette.background.title,
    }
}));

const Edit = (props) => {

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

    const [customers, setCustomers] = useState(data);

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
    const [name, setName] = useState('');
    const [errorsName, setErrorsName] = useState('');
    const [email, setEmail] = useState('');
    const [errorsEmail, setErrorsEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [errorsPhoneNum, setErrorsPhoneNum] = useState('');
    const [address, setAddress] = useState('');
    const [errorsAddress, setErrorsAddress] = useState('');
    const [date, setDate] = useState('');
    const [errorsDate, setErrorsDate] = useState('');
    const [time, setTime] = useState('');
    const [errorsTime, setErrorsTime] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [selectedDate, setSelectedDate] = React.useState(new Date(customer.date));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleInputChange = event => {
        const {name, value} = event.target;
        setCustomer({...customer, [name]: value});
    };

    const saveData = () => {
       data.forEach((item) => {
           if(item.id == customer.id){
               item.name = customer.name
               item.email = customer.email
               item.phone = customer.phone
               item.address = customer.address
               item.country = customer.country
               item.age = customer.age
               item.date = customer.date
               item.time = customer.time
           }
       })
        setCustomer(data);
        {props.handClose()}
    }

    // const inputName = event => {
    //     let fullName = event.target.value;
    //     setName(fullName);
    //     const a = validateName(fullName);
    //     setErrorsName(a);
    // };
    //
    // const validateName = e => {
    //     if (name === '') {
    //         setErrorsName('Họ và Tên là bắt buộc !');
    //     }
    // };
    //
    // const inputAge = event => {
    //     let age = event.target.value;
    //     setAge(age);
    //     const a = validateAge(age);
    //     setErrorsAge(a);
    // };
    //
    // const validateAge = e => {
    //     if (age === '') {
    //         setErrorsAge('Tuổi là bắt buộc!');
    //     }
    // };
    //
    // const inputPhoneNum = e => {
    //     let p = e.target.value;
    //     setPhoneNum(p);
    //     const isPhoneNum = validatePhoneNum(p);
    //     setErrorsPhoneNum(isPhoneNum);
    // };
    //
    // const validatePhoneNum = event => {
    //     if (phoneNum === '') {
    //         setErrorsPhoneNum('Số điện thoại là bắt buộc !');
    //     } else if (!/^\d{10}$/.test(phoneNum)) {
    //         setErrorsPhoneNum('Không phải là số điện thoại !');
    //     }
    // };
    //
    // const handleInputChangeEmail = e => {
    //     const email = e.target.value;
    //     setEmail(email);
    //     const isEmail = validateEmail(email);
    //     setErrorsEmail(isEmail);
    // };
    //
    // const validateEmail = event => {
    //     if (email === '') {
    //         setErrorsEmail('Email là bắt buộc !');
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         setErrorsEmail('Email không hợp lệ !');
    //     }
    // };

    return (
        <div className={classes.root}>
            <Dialog open={props.isOpen} onClose={props.handClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className={classes.title}>Thay đổi thông tin nhân viên</DialogTitle>
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
                        required
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
                        required
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
                        required
                    />
                    <TextField
                        margin="dense"
                        name="date"
                        label="Ngày sinh"
                        type="date"
                        fullWidth
                        value={customer.date}
                        format="MM/dd/yyyy"
                        onChange={handleInputChange}
                        variant={"outlined"}
                        required
                    />
                    <TextField
                        margin="dense"
                        name="country"
                        label="Quê quán"
                        type="text"
                        fullWidth
                        value={customer.country}
                        onChange={handleInputChange}
                        variant={"outlined"}
                    />
                    {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                    {/*    <Grid container justify="space-between">*/}
                    {/*        <KeyboardDatePicker*/}
                    {/*            disableToolbar*/}
                    {/*            variant="outlined"*/}
                    {/*            format="MM/dd/yyyy"*/}
                    {/*            margin="normal"*/}
                    {/*            id="date-picker-inline"*/}
                    {/*            label="Ngày sinh"*/}
                    {/*            value={selectedDate}*/}
                    {/*            onChange={handleDateChange}*/}
                    {/*            KeyboardButtonProps={{*/}
                    {/*                'aria-label': 'change date',*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    </Grid>*/}
                    {/*</MuiPickersUtilsProvider>*/}
                    <TextField
                        margin="dense"
                        name="address"
                        label="Address"
                        type="text"
                        fullWidth
                        value={customer.address}
                        // value={`${customer.street}, ${customer.state}, ${customer.city}, ${customer.country}`}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handClose} variant={"outlined"} color="primary">
                        Đóng
                    </Button>
                    <Button onClick={saveData} variant={"outlined"} color="primary">
                        Sửa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Edit;

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