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
            <Navbar className={"BMDBHeader"}>
                <div className={"BMDBHeader-wrap"}>
                    <Navbar.Header>
                        <Image className={"BMDBHeader-logo"} src={BMDBImage} />
                    </Navbar.Header>
                    <Nav className={"BMDBHeader-tabs"}>
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