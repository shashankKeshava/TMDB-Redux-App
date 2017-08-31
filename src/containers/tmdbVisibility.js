import { connect } from "react-redux";
import { getMovieList } from "../actions";
import App from "../components/App.js";
import React from "react";

class tmdbApp extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

const mapToStateToProps = state => {
    return {
        movieList: getMovieList()
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            console.log("Clicked");
        },
        dispatch: () => {
            dispatch(getMovieList);
        }
    };
};

const tmdbVisibility = connect(mapToStateToProps, mapDispatchToProps)(tmdbApp);

export default tmdbVisibility;