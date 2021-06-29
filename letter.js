function Letter (char) {
    this.visible = !/[a-zəüiğöışç1-9]/i.test(char)
    this.char = char
}
Letter.prototype.toString = function () {
    if(this.visible === true) {
        return this.char
    }
    return "_"
}

Letter.prototype.solution = function () {
    return this.char
}

Letter.prototype.guess = function (myGuess) {
    if(myGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true
        return true
    }
    return false
}

// var a = new Letter('e')

// a.guess('r');

// console.log(a.toString());

module.exports = Letter