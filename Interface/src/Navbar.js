// noinspection JSDuplicatedDeclaration

import park from "./Park.svg";
import React from "react";
import ham from './Ham.svg';
import {render} from "@testing-library/react";



const Navbar = () =>{
    return (
        <nav className="navbar">

            <img id="img2" src={park}></img>
            <br/>
            <div className={"links"}>
            <a id="1" href={"/"}>Home</a>
            <a id="2" href={"/Park"}>New Page</a>
            <a id="2" href={"/Park1"}>New Page1</a>
            </div>
            <img id="img4" src={ham}></img>

            function BasicMenu(props) {
            const [anchorEl, setAnchorEl] = React.useState(null);
            const open = Boolean(anchorEl);
            const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
            const handleClose = () => {
            setAnchorEl(null);
        };
            <div>
            <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            Dashboard
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
            >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            </div>
        }

            <hr></hr>

        </nav>
    );

}

    export default Navbar;
