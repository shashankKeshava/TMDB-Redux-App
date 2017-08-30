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
import "./App.css";
import BMDBHeader from "./bmdbHeader.js";
import BMDBImage from "../img/logo.png";
import Test from "../test/test.js";
import tmdbVisibility from "../containers/tmdbVisibility";

let initYear = 2010;
const sortRating = [
    "Rating: Low",
    "Rating: High",
    "Popularity: Low",
    "Popularity: High"
];

class App extends Component {
    _showMovieTabs = e => {
        let showMovieTabs = [];
        showMovieTabs = e.results.map((item, index) => {
            return (
                <div key={index} className={"movieTabsChild"}>
                    <img
                        className={"movieTabsChild-Img"}
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                    <div className={"movieTabsChild-wrapper"}>
                        <p className={"movieTabsChild-date"}>
                            {item.release_date}
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
        this.setState({
            showMovies: (
                <div className={"movieTabsparent"}>
                    {showMovieTabs}
                </div>
            )
        });
    };
    _fetchPopularMovies = () => {
        let popularMovies;
        // Use Fetch To make API Calls
        request
            .get(
                "https://api.themoviedb.org/3/movie/popular?api_key=a0bc683500a8905f2d1868a85a282281&language=en-US&page=1"
            )
            .end((err, res) => {
                popularMovies = this._showMovieTabs(res.body);
            });

        const hostname =
            "https://api.themoviedb.org/3/movie/popular?api_key=a0bc683500a8905f2d1868a85a282281&language=en-US&page=1";
        const options = {
            method: "GET",
            port: null
        };
        fetch(hostname, options).then(res => {
            console.log("Fetch", res);
        });
    };

    _sortRating = () => {
        let sortItems = [];
        sortItems = sortRating.map((item, index) => {
            return (
                <MenuItem key={index.toString()}>
                    {item}
                </MenuItem>
            );
        });
        return (
            <DropdownButton
                title={"Sort By"}
                className={"BMDB-rating-filter"}
                id={"BMDB-rating-filter"}
            >
                {sortItems}
            </DropdownButton>
        );
    };
    _sortYear = () => {
        let yearMenuItem = [];
        while (initYear <= 2017) {
            yearMenuItem.push(
                <MenuItem key={initYear.toString()}>
                    {initYear}
                </MenuItem>
            );
            initYear++;
        }
        return (
            <DropdownButton
                title={"Sort By"}
                className={"BMDB-year-filter"}
                id={"BMDB-year-filter"}
            >
                {yearMenuItem}
            </DropdownButton>
        );
    };
    constructor(props) {
        super(props);
        this.state = {
            showMovies: null
        };
    }

    componentDidMount = () => {
        this._fetchPopularMovies();
    };
    render() {
        return (
            <div>
                <BMDBHeader />
                <div>
                    {this._sortRating()}
                    {this._sortYear()}
                </div>
                {this.state.showMovies}
                <tmdbVisibility />
            </div>
        );
    }
}

export default App;