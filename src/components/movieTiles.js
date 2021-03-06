import React, { Component } from "react";
import request from "superagent";
import {
    Navbar,
    Image,
    NavItem,
    Nav,
    DropdownButton,
    MenuItem
} from "react-bootstrap";
import "./movieTiles.less";
import BMDBImage from "../img/logo.png";
import Test from "../test/test.js";
import config from "../utils/config.js";

class MovieTiles extends Component {
    _showMovieTabs = (e = []) => {
        let showMovieTabs = [];
        if (this.props.isLoading) {
            return (
                <div className={"movieTabsparent"}>
                    <h3>Loading Movies....</h3>
                </div>
            );
        }
        if (!this.props.isLoading && !e.length) {
            return (
                <div className={"movieTabsparent"}>
                    <h3>No Movies Found that match the search criteria</h3>
                </div>
            );
        }
        showMovieTabs = e.map((item, index) => {
            return (
                <div key={index} className={"movieTabsChild"}>
                    <img
                        className={"movieTabsChild-Img"}
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                    <div className={"movieTabsChild-wrapper"}>
                        <p className={"movieTabsChild-date"}>
                            {config.yearFilter.dateFormatter(item.release_date)}
                        </p>
                        <p className={"movieTabsChild-language"}>
                            {item.original_language}
                        </p>
                        <p className={"movieTabsChild-title"}>
                            {item.title}
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div className={"movieTabsparent"}>
                {showMovieTabs}
            </div>
        );
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this._showMovieTabs(this.props.movieList)}
            </div>
        );
    }
}

export default MovieTiles;