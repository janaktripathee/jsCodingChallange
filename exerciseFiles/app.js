//==================================1============================================
//this will be the best solution if only there are 3 elements in an array but we dont know how many elements 
//will be inside an array so this is not good for now but just for reference leaving here
// function sumNumbers(numbers){
//     return numbers[0]+ numbers[1]+number[2] ;  //0(1)
// }


//for example lets calculate the time complexity for this numbers =[1, 3, 10, 50];

function sumNumbers(numbers){
    let result = 0; //1
    for (const number of numbers){   //1
        console.log('....') //4=>n
        result +=number; //4=>n
    }
    return result; //1
//     //return numbers.reduce((sum, curNum)=> sum + curNum, 0)
 }


// T = 1+1+1+1+1*n + 1*n = 4 +2n
//after removing coefficient T= 2n
//T= n =>0(n)=>Linear Time Complexity;

console.log(sumNumbers([3,5,6]));

//==============================================================================


//=====================================2=========================================

//Return the nth element of the fibonacci sequence eg fib(4) yields 5;
//[1,1,2,3,5,8,13,21,...]

function fib(n){
    const numbers = [1, 1]; //1
    for( let i =2; i < n+1; i++){ //1
        numbers.push(numbers[i -2] + numbers[i-1]) //n-1
    }
    return numbers;
}

// T = 1+ 1+ n -1+ 1=>0(n) ==Linear time complexity.

console.log(fib(6));
//==============================================================================


//==================================3============================================

//Determine whether an input number is a prime number
//isPrime(9) //false
//isPrime(5) //true


function isPrime(number){
    for( let i = 2; i < Math.sqrt(number) ; i++){  //1
        if(number % i === 0){    //n
            return false   //1
        }
    }
    return true; //1
}

//Best case:number =1 Or number = 2 =>o(1);
//Averate Case : O(n) (Improved :0(sqrt(n)));
//Worst Case: number = 27,277 => O(n) (Improved :O(sqrt(n)))


//T = 1+1+1 +1 =>4=>0(n);

console.log(isPrime(9));
console.log(isPrime(2));


//Write two algorithms:

//1 The first algorithm should take an array of numbers as input and return the minimum value in the array
//(i.e the smallest number)
//2 The second (independent) algorithm should take a number as input and return 'true' if it's an even number,
//"false" for odd numbers
//Also Define the time Complexities and possible cases for both algorithms.



// minArrayValue(['2','3','300','30'])

//==============================================================================

//==================================4============================================

function getMin(numbers){
    let currentMin = numbers[0]; //1
    for (const num of numbers){ //1
        if(num < currentMin){  //0 (best case), 2(worst case), 1(avg case)
            currentMin = num;
        }
    }
    return currentMin; //1

}

//Best Case :[1,2,3]
//Worst Case:[3,2,1]
//average Case: [2,1,3]

//==============================================================================
//==================================5============================================

function isEven(number){
    return number % 2 ===0;
   
}

console.log(isEven(30))

console.log(isEven(34))

console.log(isEven(3))



//==============================================================================
//===================================6===========================================
//Determine whether an input number is a power of two
//isProwerOfTwo(8) //true;
//isPowerOfTwo(5)  //false;

//Note :Divide number and future division results by two , until 1 is reached and check
//if the remainder is always 0;


function isProwerOfTwo(number){
    if(number<1){
        return false;
    }
    let dividedNumber = number;
    while (dividedNumber !==1){
        if(dividedNumber % 2 !== 0){
            return false;
        }
        dividedNumber = dividedNumber/2
    }
    return true;
}   




//==============================================================================

//==================================6============================================

//Calculate the factorial of a number
// fact(3);

function fact(num){
    let number =1;
    for ( let i =2 ; i <= num ; i ++){
        number = num * i ;
    }
    return number;
}

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));


//factorial using recursive method;

function factorial(number){
    if(number ===1){
        return 1;
    }
    return number * factorial(number -1)
}

console.log(factorial(3))