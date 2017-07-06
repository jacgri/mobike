function Quarter (name) {
    this._quarter = name


}

Quarter.prototype = {

    getName: function (){
        return this._quarter
    }
}