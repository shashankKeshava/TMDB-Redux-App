module.exports = {
    fields: [{
        yearFilter: {
            displayName: 'Year',
            payLoad: [2010, 2011, 2012, 2014]
        },
        ratingFilter: {
            displayName: 'Sort By',
            payload: [
                "Rating: Low",
                "Rating: High",
                "Popularity: Low",
                "Popularity: High"
            ]
        }
    }],
    actionTypes: {
        Test: 'TEST'
    }
}