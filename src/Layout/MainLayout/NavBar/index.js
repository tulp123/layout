import React, {useEffect} from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography,
    makeStyles
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AppsIcon from '@material-ui/icons/Apps';
import NavItem from "./NavItem";
import theme from "../../../theme";
import {blue} from "@material-ui/core/colors";

const items = [
    {
        href: '/app/monitor',
        icon: AppsIcon,
        title: 'Giám sát'
    },
    {
        href: '/app/user',
        icon: PersonIcon,
        title: 'Nhân viên'
    },
    {
        href: '/app/form',
        icon: AssignmentIcon,
        title: 'Đơn từ'
    },
    {
        href: '/app/timekeeping',
        icon: MessageIcon,
        title: 'Bảng công'
    },
];

const configs = [
    {
        href: '/app/configuration',
        icon: SettingsIcon,
        title: 'Cấu hình chung'
    },
    {
        href: '/app/item',
        icon: ListAltIcon,
        title: 'Danh mục'
    }
];

const devices = [
    {
        href: '/app/lotus',
        icon: NotificationsActiveIcon,
        title: 'Lotus'
    },
    {
        href: '/app/technosoft',
        icon: SettingsIcon,
        title: 'Technosoft'
    }
];

const useStyles = makeStyles(() => ({
    mobileDrawer: {
        width: 256
    },
    desktopDrawer: {
        width: 256,
        top: 64,
        height: 'calc(100% - 64px)'
    },
    avatar: {
        cursor: 'pointer',
        width: 64,
        height: 64
    },
    check: {
        marginLeft: theme.spacing(2),
        backgroundColor: theme.blue,
    }
}));

const NavBar = ({onMobileClose, openMobile}) => {
    const classes = useStyles();
    const location = useLocation();
    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const setting = (
        <Box p={2}>
            <span className={classes.check}>Cấu hình</span>
            <List>
                {configs.map((config) => (
                    <NavItem
                        href={config.href}
                        key={config.title}
                        title={config.title}
                        icon={config.icon}
                    />
                ))}
            </List>
        </Box>
    )

    const content = (
        <Box p={2}>
            <span className={classes.check}>Giám sát</span>
            <List>
                {items.map((item) => (
                    <NavItem
                        href={item.href}
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                    />
                ))}
            </List>
        </Box>
    )

    const device = (
        <Box p={2}>
            <span className={classes.check}>Thiết bị</span>
            <List>
                {devices.map((device) => (
                    <NavItem
                        href={device.href}
                        key={device.title}
                        title={device.title}
                        icon={device.icon}
                    />
                ))}
            </List>
        </Box>
    )
    return (
        <Drawer
            anchor="left"
            classes={{paper: classes.desktopDrawer}}
            open
            variant="persistent"
        >
            <Divider/>
            {content}
            <Divider/>
            {setting}
            <Divider/>
            {device}
        </Drawer>
    );
};

NavBar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

NavBar.defaultProps = {
    onMobileClose: () => {
    },
    openMobile: false
};


export default NavBar;



