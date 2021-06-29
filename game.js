var chalk = require("chalk")
var inquirer = require("inquirer")
const Letter = require('./letter')
const Word = require('./word')
const chooseWord = require('./words')

function Game () {
    var self = this

    this.play = function(){
        this.remainingChances = 10
        this.nextWord()
    }

    this.nextWord = function(){
        var word = chooseWord()
        if(typeof word === 'undefined'){
            console.log(chalk.bgGreen("You found all the words, game over. Congratulations."));
            return
        }
        this.randWord = word[0]
        this.randWordExp = word[1]
        this.askedWord = new Word(this.randWord)
        this.makeGuess()
    }
    this.makeGuess = function(){
        this.askForLetter().then(function(){
            if(self.remainingChances < 1){
                console.log(chalk.bgRed(' You don\'t have chance. Word is: ', self.askedWord.solution()+ ' '));
                self.askForPlayAgain()
            }else if(self.askedWord.correctAnswer()){
                console.log(chalk.bgCyan(' You found the whole word: ' + self.askedWord.solution() + ' '));
                self.remainingChances = 10
                self.nextWord()
            }else{
                self.makeGuess()
            }
        })
    }

    this.askForPlayAgain = function(){
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'playAgain',
                message: `Play again?`
            }
        ]).then(function(answer){
            if(answer.playAgain){
                self.play()
            }else{
                self.end()
            }
        })
    }

    this.askForLetter = function(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'choice',
                message: `Word: ${self.askedWord.toString()} / Explanation: ${self.randWordExp}`,
                validate: function(val){
                    return /[a-zəüiğöışç]/gi.test(val)
                }
            }
        ]).then(function(answer){
            var isLetterFound  = self.askedWord.guess(answer.choice)
            if(isLetterFound){
                console.log(chalk.green("Yes, you found it!"))
            }else{
                self.remainingChances--
                console.log(chalk.red("Wrong guess :("))
                console.log(`You have: ${self.remainingChances} chances`);

            }
        })
    }

    this.end = function(){
        console.log("BYE!");
        process.exit(0)
    }


}

module.exports = Game


// var a = new Word('Salamlama')

// a.guess('s')
// a.guess('a')
// a.guess('l')
// a.guess('m')

// console.log(a.toString());
