import React, { Component } from 'react';
import './App.css';
import BMDBHeader from './bmdbHeader.js';
import BMDBImage from '../img/logo.png';
import { Navbar, Image, NavItem, Nav, DropdownButton, MenuItem } from 'react-bootstrap';

let initYear = 2010;
const sortRating = ["Rating: Low", "Rating: High", "Popularity: Low", "Popularity: High"];

class App extends Component {
    constructor(props) {
        super(props);
    }

    _sortRating = () => {
        let sortItems = [];
        sortItems = sortRating.map((item, index) => {
            return (`<MenuItem id=${index}>${item}</MenuItem>`);
        })
        return (<DropdownButton title={"Sort By"} className={"BMDB-rating-filter"} id={"BMDB-rating-filter"}>
            {sortItems}
          </DropdownButton>);
    }
    _sortYear = () => {
        let yearMenuItem = [];
        while (initYear <= 2017) {
            yearMenuItem.push(`<MenuItem id=${initYear}>${initYear}</MenuItem>`);
            initYear++;
        }
        return (<DropdownButton title={"Sort By"} className={"BMDB-year-filter"} id={"BMDB-year-filter"}>
                {yearMenuItem}
                </DropdownButton>);
    }
    render() {
        return (
            <div>
              <Navbar>
              <Navbar.Header>
              <Image className={'header-logo'} src={BMDBImage}/>
              </Navbar.Header>
              <Nav className={"header-pullright"}>
                <NavItem>{"POPULAR"}</NavItem>
                <NavItem>{"FAVORITES"}</NavItem>
              </Nav>
              </Navbar>
               <div>
               {this._sortRating}
               {this._sortYear}
               </div>
            </div>
        );
    }
}

export default App;