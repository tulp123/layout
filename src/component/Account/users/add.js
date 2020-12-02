import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

//
// const inputPhoneNum = e => {
//     const p = e.target.value;
//     setPhoneNum(p);
//     const isPhoneNum = validatePhone(p);
//     setErrorsPhoneNum(isPhoneNum);
// };
//
// const validatePhone = event => {
//     if (phoneNum === null) {
//         setErrorsPhoneNum('Số điện thoại là bắt buộc !');
//     } else if (!/^\d{10}$/.test(phoneNum)) {
//         setErrorsPhoneNum('Không phải là số điện thoại !');
//     }
// };


//  {/*{catchErrors && (<b style={{color: "red"}}>{catchErrors.name}</b>)}*/}
//                             {/*{errors.name && errors.name.type === "required" && (*/}
//                             {/*    <b style={{color: "red"}}>Vui lòng nhập tên nhân viên</b>)}*/}
//                             {/*{errors.name && errors.name.type === "minLength" && (*/}
//                             {/*    <b style={{color: "red"}}>Họ tên phải nhiều hơn 2 ký tự</b>)}*/}
//

//  {/*{catchErrors && (<b style={{color: "red"}}>{catchErrors.date}</b>)}*/}
//                             {/*{errors.date && errors.date.type === "required" && (*/}
//                             {/*    <b style={{color: "red"}}>Vui lòng nhập ngày sinh</b>)}*/}