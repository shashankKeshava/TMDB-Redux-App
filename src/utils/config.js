const {
    SORT_LOW,
    SORT_HIGH,
    SORT_POP_LOW,
    SORT_POP_HIGH,
    SORT_YEAR,
    SEARCH_MOVIE
} = require("./actionTypes.js");

const months = {
    01: "Jan",
    02: "Feb",
    03: "Mar",
    04: "Apr",
    05: "May",
    06: "Jun",
    07: "Jul",
    08: "Aug",
    09: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
};

module.exports = {
    yearFilter: {
        displayName: "Year",
        payload: 2010,
        type: SORT_YEAR,
        dateFormatter: movieDate => {
            const newDate = movieDate.split("-");
            return `${newDate[2]} ${months[newDate[1]]} ${newDate[0]}`;
        }
    },
    ratingFilter: {
        displayName: "Sort By",
        payload: [{
                type: SORT_LOW,
                value: "rating-low",
                label: "Rating: Low"
            },
            {
                type: SORT_HIGH,
                value: "rating-high",
                label: "Rating: High"
            },
            {
                type: SORT_POP_LOW,
                value: "pop-low",
                label: "Popularity: Low"
            },
            {
                type: SORT_POP_HIGH,
                value: "pop-high",
                label: "Popularity: High"
            }
        ]
    },
    searchFilter: {
        displayName: "Search Movies",
        type: SEARCH_MOVIE
    }
};