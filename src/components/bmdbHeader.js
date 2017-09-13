/*BMDB Search Header*/

import React, { Component } from "react";
import {
    Navbar,
    Image,
    NavItem,
    Nav,
    FormGroup,
    FormControl
} from "react-bootstrap";
import BMDBImage from "../img/logo.png";
import "./bmdbHeader.less";

class BMDBHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar className={"BNDBHeader"}>
                <div className={"BNDBHeader-wrap"}>
                    <Navbar.Header>
                        <Image className={"BNDBHeader-logo"} src={BMDBImage} />
                    </Navbar.Header>
                    <Nav className={"BNDBHeader-tabs"}>
                        <NavItem>
                            {"POPULAR"}
                        </NavItem>
                        <NavItem>
                            {"FAVORITES"}
                        </NavItem>
                        <NavItem>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    onChange={this.props.searchMovie}
                                />
                            </FormGroup>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default BMDBHeader;