const { SORT_LOW, SORT_HIGH, SORT_POP_LOW, SORT_POP_HIGH, SORT_YEAR } = require("./actionTypes.js");

module.exports = {
    yearFilter: {
        displayName: 'Year',
        payload: 2010,
        type: SORT_YEAR
    },
    ratingFilter: {
        displayName: 'Sort By',
        payload: [{
            type: SORT_LOW,
            label: "Rating: Low",
            value: "Rating: Low"
        }, {
            type: SORT_HIGH,
            value: "Rating: High",
            label: "Rating: High"
        }, {
            type: SORT_POP_LOW,
            value: "Popularity: Low",
            label: "Popularity: Low"
        }, {
            type: SORT_POP_HIGH,
            value: "Popularity: High",
            label: "Popularity: High"
        }]
    }
}