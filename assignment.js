/*
first problem;
Simple addition, subtraction, multiplication, division
*/


function mindGame(number){
    if (number < 0){
        return 'you have entered a negative number.'
    }
    else if (typeof(number) !== 'number'){
        return 'you have entered a string value.'
    }
    else{
        let multipliedValue = number * 3;
        let additionValue = multipliedValue + 10;
        let devisedValue = additionValue / 2;
        let subtractedValue = devisedValue - 5;

        return subtractedValue;
    }
}




/*
second problem;
An operation performed inside a function to extract some even-odds.
*/


function evenOdd(input){
    if (typeof(input) !== 'string'){
        return 'please insert a string value.';
    }
    else if (input.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}






/*
third problem;
A simple subtraction and a multiplication are performed inside a function and output is then produced.
*/


function isLGSeven(number){
    let negativeNumber = number - 7;
    if(negativeNumber>=7){
        let powerReturn = number * 2;

        return powerReturn;
    }
    else{
        return negativeNumber;
    }
}






/*
fourth problem;
It is checked negative data inside of array.
*/


function findingBadData(numbers){
    let result = [];
    for(let i = 0; i <numbers.length; i++){
        if(numbers[i] < 0){
            result.push(numbers[i]);
        }
    }
    return result.length;
}






/*
fifth problem;
Three friends played inside the function as a miniature.
*/


function gemsToDiamond(firstFrindJem, secondFrindJem, thirdFrindjem){
    let firstFriendJems = firstFrindJem * 21;
    let secondFriendJems = secondFrindJem * 32;
    let thirdFrindJems = thirdFrindjem * 43;
    let totalFriendJems = firstFriendJems + secondFriendJems + thirdFrindJems;
    if(totalFriendJems>2000){
        let negativeJems = totalFriendJems - 2000;
        return negativeJems;
    }
    else{

        return totalFriendJems;
    }
}
