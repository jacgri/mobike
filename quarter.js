function Quarter (name) {
    this._name = name


}

Quarter.prototype = {

    getName: function (){
        return this._name
    }
}