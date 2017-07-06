function Bike (name) {
    this._bike = name


}

Bike.prototype = {

    getName: function (){
        return this._bike
    }
}