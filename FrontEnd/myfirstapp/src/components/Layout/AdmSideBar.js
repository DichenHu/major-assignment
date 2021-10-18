import React, { useState } from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

function hasChildren(item) {
    const { items: children } = item;

    if (children === undefined) {
        return false;
    }

    if (children.constructor !== Array) {
        return false;
    }

    if (children.length === 0) {
        return false;
    }

    return true;
}

const menu = [
    {
        icon: <HomeOutlinedIcon />,
        title: "Orders",
        items: [
            {
                title: "Tracking orders",
                to: "/payment/paypal",
            },
            {
                title: "cancel Orders",
                to: "/payment/mastercard",
            },
        ],
    },
    {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Account manage and book manage",
        items: [
            {
                title: "Account Manage",
                items: [
                    {
                        title: "Aprove accounts",
                        to: "/thedowtheory",
                    },
                    {
                        title: "remove account",
                        to: "/chart",
                    },

                ],
            },
            {
                title: "Book management",
                items: [
                    {
                        title: "Book review",
                        to: "/thedowtheory",
                    },
                    {
                        title: "add Book",
                        to: "/chart",
                    },
                    {
                        title: "delete book",
                        to: "/trendlines",
                    },
                    {
                        title: "Support & Resistance",
                        to: "/sandr",
                    },
                ],
            },
            {
                title: "csv files",
                items: [
                    {
                        title: "select the file",
                        to: "/thedowtheory",
                    },
                ],
            },
        ],
    },
    {
        icon: <TrendingUpOutlinedIcon />,
        title: "Options",
    },
    {
        icon: <DescriptionOutlinedIcon />,
        title: "Blog",
    },
];

export default function CollapseSideBar() {
    return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
    return (
        <Link to={item.to}>
            <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
        </Link>
    );
};

const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <React.Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children.map((child, key) => (
                        <MenuItem key={key} item={child} />
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    );
};
