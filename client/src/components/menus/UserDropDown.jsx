import React from "react";

import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

import ButtonList from "../buttons/ButtonList";
import history from "../../history";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
      }}
      transformOrigin={{
          vertical: "top",
          horizontal: "center",
      }}
      {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: "var(--primary-red)",
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            }
        }
    }
}))(MenuItem);

const UserDropDown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <div style={{ float: "right" }}>
            <IconButton
                href=""
                style={{ color: "white", padding: "13px 12px" }}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>

            <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={() => history.push("/")}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </StyledMenuItem>

                <StyledMenuItem onClick={() => history.push("/profile")}>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </StyledMenuItem>
                <ButtonList />
            </StyledMenu>
        </div>
    );
};

export default UserDropDown;