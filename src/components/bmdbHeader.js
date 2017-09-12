/*BMDB Search Header*/

import React, { Component } from "react";
import { Navbar, Image, NavItem, Nav, FormGroup, FormControl } from "react-bootstrap";
import BMDBImage from "../img/logo.png";
import "./bmdbHeader.css";

class BMDBHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar className={"BNDBHeader"}>
                <Navbar.Header>
                    <Image className={"header-logo"} src={BMDBImage} />
                </Navbar.Header>
                <Nav className={"header-pullright"}>
                    <NavItem>
                        {"POPULAR"}
                    </NavItem>
                    <NavItem>
                        {"FAVORITES"}
                    </NavItem>
                    <NavItem>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" onChange={this.props.searchMovie}/>
                        </FormGroup>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default BMDBHeader;