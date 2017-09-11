const {
    SORT_LOW,
    SORT_HIGH,
    SORT_POP_LOW,
    SORT_POP_HIGH,
    SORT_YEAR,
    SEARCH_MOVIE
} = require("./actionTypes.js");

const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
};

module.exports = {
    yearFilter: {
        displayName: "Year",
        payload: 2010,
        type: SORT_YEAR,
        dateFormatter: movieDate => {
            const formattedDate = new Date(movieDate);
            return `${formattedDate.getDate()} ${months[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`;
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