import React, { useState } from 'react';
import {
    Box,
    Container,
    makeStyles
} from '@material-ui/core';
import data from './data';
import ListUser from "./listUser";
import Page from "../../Page";
import Add from "./addUser";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

function handleClick(event) {
    // event.preventDefault();
}

const User = () => {
    const classes = useStyles();
    const [customers] = useState(data);

    return (
        <Page
            className={classes.root}
            title="Employee"
        >
            <Container>
                <Box mt={3}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="https://fastwork.vn/" onClick={handleClick}>
                            FastWork
                        </Link>
                        <Link color="inherit" href="/app/user" onClick={handleClick}>
                            Giám sát
                        </Link>
                        <Link
                            color="textPrimary"
                            href="/app/user"
                            onClick={handleClick}
                            aria-current="page"
                        >
                            Nhân viên
                        </Link>
                    </Breadcrumbs>
                    <ListUser customers={customers} />
                </Box>
            </Container>
        </Page>
    );
};

export default User;
