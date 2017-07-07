function Location() {
    this._bikes = []
}

Location.prototype = {
    addQuarter: function(quarters) {
        this._bikes.push(quarters)
        return
    },
    getLocation: function () {
        return this._bikes
    }
}