function Bike (currentQuarter) {
    this._currentLocation = currentQuarter
}

Bike.prototype = {

    getCurrentLocation: function (){
        return this._currentLocation
     },

     cycle: function(newQuarter){
        this.currentLocation = newQuarter
        return "This Bike is now in the " + this.currentLocation
     }
}
