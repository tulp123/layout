import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import clsx from 'clsx';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    makeStyles, Input, TableCell
} from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {useForm} from 'react-hook-form'
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import data from './data';

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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing(1),
    },
    formControl: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        minWidth: 120,
    },
    title : {
        marginLeft: theme.spacing(25),
        color: theme.green,
    }
}));

const Add = (props) => {

    const initAdd = {
        name: '',
        age: '',
        phone: '',
        email: '',
        address: '',
        street: '',
        state: '',
        city: '',
        country: '',
        time: '',
        date: ''
    };

    const classes = useStyles();
    const [error, setError] = useState(false);
    const [user, setUser] = useState(initAdd);
    const [catchErrors, setCatchErrors] = useState({});
    const [value, setValue] = useState('female');
    const [helperText, setHelperText] = useState('');
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
    const [errorsAge, setErrorsAge] = useState('');

    let navigate = useNavigate();

    const validateUser = (value) => {
        let error = {};
        if (!value.name) {
            error.name = "Vui lòng nhập tên nhân viên";
        }
        if (!value.age) {
            error.age = "Vui lòng nhập tuổi nhân viên";
        }
        if (!value.phone) {
            error.phone = "Vui lòng nhập số điện thoại";
        } else if (!/^\d{10}$/.test(value.phone)) {
            error.phone = "Số điện thoại bạn nhập không đúng";
        }
        if (!value.email) {
            error.email = "Vui lòng nhập email";
        } else if (!/\S+@\S+\.\S+/.test(value.email)) {
            error.email = "Email bạn nhập không đúng";
        }
        if (!value.street) {
            error.street = "Vui lòng nhập địa chỉ";
        }
        if (!value.date) {
            error.date = "Vui lòng nhập ngày sinh";
        }
        if (!value.time) {
            error.time = "Vui lòng nhập giờ làm việc";
        }
        return error;
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const inputName = event => {
        let fullName = event.target.value;
        setName(fullName);
        const a = validateName(fullName);
        setErrorsName(a);
    };

    const validateName = e => {
        if (name === '') {
            setErrorsName('Họ và Tên là bắt buộc !');
        }
    };

    const inputAge = event => {
        let age = event.target.value;
        setAge(age);
        const a = validateAge(age);
        setErrorsAge(a);
    };

    const validateAge = e => {
        if (age === '') {
            setErrorsAge('Tuổi là bắt buộc!');
        }
    };

    const inputPhoneNum = e => {
        let p = e.target.value;
        setPhoneNum(p);
        const isPhoneNum = validatePhoneNum(p);
        setErrorsPhoneNum(isPhoneNum);
    };

    const validatePhoneNum = event => {
        if (phoneNum === '') {
            setErrorsPhoneNum('Số điện thoại là bắt buộc !');
        } else if (!/^\d{10}$/.test(phoneNum)) {
            setErrorsPhoneNum('Không phải là số điện thoại !');
        }
    };

    const handleInputChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
        const isEmail = validateEmail(email);
        setErrorsEmail(isEmail);
    };

    const validateEmail = event => {
        if (email === '') {
            setErrorsEmail('Email là bắt buộc !');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorsEmail('Email không hợp lệ !');
        }
    };

    const inputDate = event => {
        let date = event.target.value;
        setDate(date);
        const a = validateDate(date);
        setErrorsDate(a);
    };

    const validateDate = e => {
        if (date === '') {
            setErrorsDate('Ngày sinh là bắt buộc !');
        }
    };

    const inputTime = event => {
        let time = event.target.value;
        setTime(time);
        const a = validateTime(time);
        setErrorsTime(a);
    };

    const validateTime = e => {
        if (time === '') {
            setErrorsTime('Ca làm việc là bắt buộc !');
        }
    };

    const inputAddress = event => {
        let address = event.target.value;
        setAddress(address);
        const a = validateAddress(address);
        setErrorsAddress(a);
    };

    const validateAddress = e => {
        if (address === '') {
            setErrorsAddress('Địa chỉ là bắt buộc !');
        }
    };

    const save = () => {
        navigate('#')
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [state, setState] = useState({
        age: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleSelectChange = (event) => {
        setGender(event.target.value);
    };

    const {register, handleSubmit} = useForm();
    const onSubmit = (event) => {
        // setCatchErrors(validateUser(user))
        // if (value === 'Nam') {
        //     setError(false);
        // } else if (value === 'Nữ') {
        //     setError(true);
        // } else {
        //     setHelperText('Bắt buộc phải chọn giới tính');
        // }
        console.log(event)
        console.log(register)
        {props.handCloseAdd()}
    }

    const form = useForm({
        mode: 'all',
    });

    return (
        <div
            className={classes.root}
        >
                <Box display="flex" justifyContent="flex-end">
                    <Dialog open={props.handOpenAdd} onClose={props.handCloseAdd} aria-labelledby="form-dialog-title" onSubmit={handleSubmit(onSubmit)}>
                        <DialogTitle id="form-dialog-title" className={classes.title}>Thêm mới nhân viên</DialogTitle>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                label="Họ tên"
                                type="text"
                                name="name"
                                fullWidth
                                value={name}
                                onChange={inputName}
                                onBlur={validateName}
                                variant={"outlined"}
                                required
                                ref={register({required: true})}
                                onSubmit={handleSubmit(onSubmit)}
                            />
                            {errorsName && (<b style={{color: "red"}}>{errorsName}</b>)}
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-between">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="outlined"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        name="Ngày sinh"
                                        label="Ngày sinh"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <TextField
                                margin="dense"
                                id="age"
                                label="Tuổi"
                                type="number"
                                name="age"
                                fullWidth
                                value={age}
                                onChange={inputAge}
                                onBlur={validateAge}
                                variant={"outlined"}
                                ref={register({required: true})}
                            />
                            {/*{errorsAge && (<b style={{color: "red"}}>{errorsAge}</b>)}*/}
                            {/*{catchErrors && (<b style={{color: "red"}}>{catchErrors.age}</b>)}*/}
                            <div>
                                <FormControl variant={"outlined"} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Giới tính</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={gender}
                                        onChange={handleSelectChange}
                                        label="Gender"
                                    >
                                        <MenuItem value={"Nam"}>Nam</MenuItem>
                                        <MenuItem value={"Nữ"}>Nữ</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <TextField
                                margin="dense"
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                fullWidth
                                onChange={handleInputChangeEmail}
                                onBlur={validateEmail}
                                value={email}
                                variant={"outlined"}
                                required
                                ref={register({required: true})}
                            />
                            {errorsEmail && (<b style={{color: "red"}}>{errorsEmail}</b>)}
                            {/*{catchErrors && (<b style={{color: "red"}}>{catchErrors.email}</b>)}*/}
                            {/*{errors.email && errors.email.type === "required" && (*/}
                            {/*    <b style={{color: "red"}}>Vui lòng nhập email</b>)}*/}
                            <TextField
                                margin="dense"
                                id="email"
                                label="Địa chỉ"
                                name="street"
                                type="text"
                                fullWidth
                                value={address}
                                onChange={inputAddress}
                                onBlur={validateAddress}
                                variant={"outlined"}
                                required
                                ref={register({required: true})}
                            />
                            {errorsAddress && (<b style={{color: "red"}}>{errorsAddress}</b>)}
                            {/*{catchErrors && (<b style={{color: "red"}}>{catchErrors.street}</b>)}*/}
                            <TextField
                                margin="dense"
                                id="phone"
                                label="Số điện thoại"
                                type="text"
                                name="phone"
                                fullWidth
                                value={phoneNum}
                                onChange={inputPhoneNum}
                                onBlur={validatePhoneNum}
                                variant={"outlined"}
                                required
                                ref={register({required: true})}
                            />
                            {errorsPhoneNum && (<b style={{color: "red"}}>{errorsPhoneNum}</b>)}
                            {/*{catchErrors && <b style={{color: "red"}}>{catchErrors.phone}</b>}*/}
                            {/*{errors.phone && errors.phone.type === "required" && (*/}
                            {/*    <b style={{color: "red"}}>Vui lòng nhập điện thoại của bạn</b>)}*/}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={props.handCloseAdd} variant="outlined" color="primary">
                                Đóng
                            </Button>
                            <Button type={"submit"} variant="outlined" color="primary" onClick={onSubmit}>
                                Thêm
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
        </div>
    );
};

Add.propTypes = {
    className: PropTypes.string
};

export default Add;

// import React, { useState } from 'react';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import {
//     Box,
//     Button,
//     Card,
//     CardContent,
//     CardHeader,
//     Divider,
//     Grid,
//     TextField,
//     makeStyles
// } from '@material-ui/core';
//
// const states = [
//     {
//         value: 'alabama',
//         label: 'Alabama'
//     },
//     {
//         value: 'new-york',
//         label: 'New York'
//     },
//     {
//         value: 'san-francisco',
//         label: 'San Francisco'
//     }
// ];
//
// const useStyles = makeStyles(() => ({
//     root: {}
// }));
//
// const Add = (props, { className, ...rest }) => {
//     const classes = useStyles();
//     const [values, setValues] = useState({
//         firstName: 'Katarina',
//         lastName: 'Smith',
//         email: 'demo@devias.io',
//         phone: '',
//         state: 'Alabama',
//         country: 'USA'
//     });
//
//     const handleChange = (event) => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value
//         });
//     };
//
//     return (
//         <Dialog
//             autoComplete="off"
//             noValidate
//             className={clsx(classes.root, className)}
//             {...rest}
//             open={props.handOpenAdd} onClose={props.handCloseAdd}
//         >
//             <Card>
//                 <CardHeader
//                     subheader="The information can be edited"
//                     title="Profile"
//                 />
//                 <Divider />
//                 <CardContent>
//                     <Grid
//                         container
//                         spacing={3}
//                     >
//                         <Grid
//                             item
//                             md={6}
//                             xs={12}
//                         >
//                             <TextField
//                                 fullWidth
//                                 helperText="Please specify the first name"
//                                 label="First name"
//                                 name="firstName"
//                                 onChange={handleChange}
//                                 required
//                                 value={values.firstName}
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid
//                             item
//                             md={6}
//                             xs={12}
//                         >
//                             <TextField
//                                 fullWidth
//                                 label="Last name"
//                                 name="lastName"
//                                 onChange={handleChange}
//                                 required
//                                 value={values.lastName}
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid
//                             item
//                             md={6}
//                             xs={12}
//                         >
//                             <TextField
//                                 fullWidth
//                                 label="Email Address"
//                                 name="email"
//                                 onChange={handleChange}
//                                 required
//                                 value={values.email}
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid
//                             item
//                             md={6}
//                             xs={12}
//                         >
//                             <TextField
//                                 fullWidth
//                                 label="Phone Number"
//                                 name="phone"
//                                 onChange={handleChange}
//                                 type="number"
//                                 value={values.phone}
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid
//                             item
//                             md={6}
//                             xs={12}
//                         >
//                             <TextField
//                                 fullWidth
//                                 label="Country"
//                                 name="country"
//                                 onChange={handleChange}
//                                 required
//                                 value={values.country}
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid
//                             item
//                             md={6}
//                             xs={12}
//                         >
//                             <TextField
//                                 fullWidth
//                                 label="Select State"
//                                 name="state"
//                                 onChange={handleChange}
//                                 required
//                                 select
//                                 SelectProps={{ native: true }}
//                                 value={values.state}
//                                 variant="outlined"
//                             >
//                                 {states.map((option) => (
//                                     <option
//                                         key={option.value}
//                                         value={option.value}
//                                     >
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </TextField>
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//                 <Divider />
//                 <Box
//                     display="flex"
//                     justifyContent="flex-end"
//                     p={2}
//                 >
//                     <Button
//                         color="primary"
//                         variant="contained"
//                     >
//                         Thêm
//                     </Button>
//                     <Button
//                         color="primary"
//                         variant="contained">
//                         Đóng
//                     </Button>
//                 </Box>
//             </Card>
//         </Dialog>
//     );
// };
//
// Add.propTypes = {
//     className: PropTypes.string
// };
//
// export default Add;
