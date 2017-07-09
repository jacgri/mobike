function Bike (name, quarter) {
    this._name = name
    this._quarter = quarter
}

Bike.prototype = {

    getName: function (){
        return "The " +  this._name + " is in the " + this._quarter
    },

    //changeQuarter: function(){
      //  this._name.Quarter._name
    //}
}
