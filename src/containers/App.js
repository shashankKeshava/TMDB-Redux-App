import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";

import { getMovieList, sortByRating } from "../actions";
import MovieTiles from "../components/movieTiles.js";
import {
    Navbar,
    Image,
    NavItem,
    Nav,
    DropdownButton,
    MenuItem
} from "react-bootstrap";
import Select from "react-select";
import BMDBHeader from "../components/bmdbHeader.js";
const fields = require("../utils/config.js");

class tmdbApp extends React.Component {
    handleRatingChange = (item, e) => {
        this.props.sortByRating(item, this.props.movieList);
    }
    _sortRating = () => {
        let sortItems = [];
        return (
            <Select
                value="Select"
                placeholder={fields.ratingFilter.displayName}
                options={fields.ratingFilter.payload}
                className={"BMDB-rating-filter"}
            />
        )
    }
    _sortYear = () => {
        let yearMenuItem = [];
        let initYear = fields.yearFilter.payload;
        while (initYear <= 2017) {
            yearMenuItem.push({ label: initYear, value: initYear, type: fields.yearFilter.type });
            initYear++;
        }
        return (
            <Select
            value="Select"
            placeholder={fields.yearFilter.displayName}
            options={yearMenuItem}
            className={"BMDB-year-filter"}
            />
        );
    }
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.getMovieList();
    }
    render() {
        return (
            <div>
                <BMDBHeader />
                <div>
                    {this._sortRating()}
                    {this._sortYear()}
                </div>
                <MovieTiles
                    isLoading={this.props.isLoading}
                    movieList={this.props.movieList}
                    _fetchMovieList={this.props.getMovieList}
                />
            </div>
        );
    }
}

const mapToStateToProps = state => {
    return {
        movieList: state.fetchReducer.movieList,
        isLoading: state.fetchReducer.isLoading
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            getMovieList,
            sortByRating
        },
        dispatch
    );

const tmdbVisibility = connect(mapToStateToProps, mapDispatchToProps)(tmdbApp);

export default tmdbVisibility;