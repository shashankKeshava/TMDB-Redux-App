import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";

import { getMovieList, sortByRating, sortByYear } from "../actions";
import { UNSORT } from "../utils/actionTypes.js";
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
    handleRatingChange = item => {
        this.props.sortByRating(!!item ? item.type : UNSORT, this.props.movieList);
        this.setState({
            ratingSeletedValue: !!item ? item.value : null
        });
    };
    handleYearChange = item => {
        this.props.sortByYear(!!item ? item.type : UNSORT, !!item ? item.label : null, this.props.movieList);
        this.setState({
            yearSelectedValue: !!item ? item.label : null
        });
    };
    _sortRating = () => {
        let sortItems = [];
        return (
            <Select
                autofocus
                searchable={this.state.searchable}
                disabled={this.state.disabled}
                clearable={this.state.clearable}
                value={this.state.ratingSeletedValue}
                placeholder={fields.ratingFilter.displayName}
                options={fields.ratingFilter.payload}
                className={"BMDB-rating-filter"}
                onChange={this.handleRatingChange}
            />
        );
    };
    _sortYear = () => {
        let yearMenuItem = [];
        let initYear = fields.yearFilter.payload;
        while (initYear <= 2017) {
            yearMenuItem.push({
                label: initYear,
                value: initYear,
                type: fields.yearFilter.type
            });
            initYear++;
        }
        return (
            <Select
                autofocus
                searchable={this.state.searchable}
                disabled={this.state.disabled}
                clearable={this.state.clearable}
                value={this.state.yearSelectedValue}
                placeholder={fields.yearFilter.displayName}
                options={yearMenuItem}
                className={"BMDB-year-filter"}
                onChange={this.handleYearChange}
            />
        );
    };
    _movieSection = () => {
        if (this.props.sortedMovies.payload.length) {
            return (
                <MovieTiles
                    isLoading={this.props.isLoading}
                    movieList={this.props.sortedMovies.payload}
                    _fetchMovieList={this.props.getMovieList}
                />
            );
        }
        return (
            <MovieTiles
                isLoading={this.props.isLoading}
                movieList={this.props.movieList}
                _fetchMovieList={this.props.getMovieList}
            />
        );
    };
    constructor(props) {
        super(props);
        this.state = {
            clearable: true,
            disabled: false,
            searchable: true,
            ratingSelectedValue: null,
            yearSelectedValue: null,
            sortedMovies: null
        };
    }
    componentDidMount = () => {
        this.props.getMovieList();
    };
    render() {
        return (
            <div>
                <BMDBHeader />
                <div>
                    {this._sortRating()}
                    {this._sortYear()}
                </div>
                {this._movieSection()}
            </div>
        );
    }
}

const mapToStateToProps = state => {
    return {
        pageNumber: state.fetchReducer.movieList.page,
        sortedMovies: {
            type: state.sortReducer.type,
            payload: state.sortReducer.sortedList || []
        },
        type: state.fetchReducer.movieList.type,
        movieList: state.fetchReducer.movieList.results,
        isLoading: state.fetchReducer.isLoading
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            getMovieList,
            sortByRating,
            sortByYear
        },
        dispatch
    );

const tmdbVisibility = connect(mapToStateToProps, mapDispatchToProps)(tmdbApp);

export default tmdbVisibility;