/**
 * constructor-function Accumulator accepts starting value. When we call read() method, we add prompt value to our class value
 * @param startingValue
 * @constructor
 */

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += Number(prompt('How much we need add to our starting value?: ' , 0));
    }
}