const Letter = require('./letter')

function Word (word) {
    this.letters = word.split('').map(function(char){
        return new Letter(char)
    })
}

// var c1 = process.argv[2]

// a = new Word(c1)

// a.letters.map(function(letter){
//     letter.guess('a')
//     console.log(letter.toString());
// })

Word.prototype.solution = function() {
    return this.letters.map(function(letter){
        return letter.solution()
    }).join('')
}

Word.prototype.toString = function() {
    return this.letters.join(' ')
}

Word.prototype.guess = function(char){
    var letterFound = false
    this.letters.forEach(letter => {
        if(letter.guess(char)){
        letterFound = true
        }
    });

    return letterFound
}

Word.prototype.correctAnswer = function(){
    return this.letters.every(function(letter){
        return letter.visible
    })
}

module.exports = Word