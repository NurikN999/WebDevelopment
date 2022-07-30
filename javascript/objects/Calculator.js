/**
 * read() - accepts 2 number
 * sum() - sum 2 values of class
 * mul() - multiply 2 values of class
 * @constructor
 */

function Calculator(){
    let num1;
    let num2;
    this.read = function(){
        this.num1 = Number(prompt('Enter your first number: ', 1));
        this.num2 = Number(prompt('Enter your second number: ', 2));
    }

    this.sum = function(){
        return this.num1 + this.num2;
    }

    this.mul = function(){
        return this.num1 * this.num2;
    }
}