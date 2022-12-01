/* let person = ['Ali', 'Ahmed', 'Mali', 'sali'];
function likes(names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    
    let data = templates[idx].replace(/{name}|{n}/g, function (val) {
        console.log(val)
        let result = val === '{name}' ? names.shift() : names.length;
        return result;
    });
    // console.log(data)
    return data
}
likes(person) */

/* function disemvowel(str) {
    let result = str.replace(/[aeiou]/gi, '')
    console.log(result)
    return str;
}

disemvowel("This website is for losers LOL!") */

/* function duplicateCount(text) {
    try{ return text.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
    catch(e){ return 0; } // if TypeError
    
 }

duplicateCount("aabbcdefffsgwwa") */


/* function sumTwoSmallestNumbers(numbers) {  
    //  a = Math.min(...numbers); 
    // const index = numbers.indexOf(a);
    // numbers.splice(index,1)
    // b = Math.min(...numbers); 
    // return a + b 

    
  console.log([5,3,2,6,44,55,23] - [5,3,2,6,44,55,23]);

}

sumTwoSmallestNumbers([15, 28, 4, 2, 43]) */


/* function spinWords(string) {
    //TODO Have fun :)
    let newStr = string.split(" ")
    // let correctStr = newStr.filter((x) => x.length > 5)
    
    // var array3 = newStr.filter(function(obj) { return correctStr.indexOf(obj) == -1; });


    return newStr.map((v,k) => {

        let result = v.length >= 5 ? v.split("").reverse() : v
        let _result = typeof result === "string";
        let newdata = (!_result) ? result.join("") : result
        return newdata;
        // console.log(array3.join("") + " " + v.split('').reverse().join(''))
       /*  console.log(array3 +" "+ correctStr.join(" ").split('').reverse().join(''))
        return array3 +" "+ correctStr.join(" ").split('').join('') */
//}).join(" ")


/*  const re = / /g;
 const stringArray = string.split(" ")
 
 let result = (
 [stringArray.map(element => {
   return (element.length >= 5 ? 
           [...element].reverse().join(" ").replace(re, "") 
           : element)
 })]
 )[0].join(" ") */

// console.log(result)


// }
// spinWords("Hey fellow warriors") */


/* function humanReadable(seconds) {
    var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
    console.log(seconds / 3600)
    // return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)
  }
  
  function formatDate(n){
    var number = Number.parseInt(n)
    console.log(number)

    return number > 9? number : '0'+number;
  }

  humanReadable(3600) */
/*   var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        console.log(i+1)
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

console.log(twoSum([15, 7, 11, 2],9)) */

// console.log(twoSum([3, 2, 4],6))


/**
 * @param {string} s
 * @return {number}
 */
/* var romanToInt = function (s) {
    let roman = ["I", "V", "X", "L", "C", "D", "M"]
    let numbers = [1, 5, 10, 50, 100, 500, 1000]
    let result = 0
    for (var i = 0; i < s.length; i++) {
        let cur = roman.indexOf(s[i]);
        let next = roman.indexOf(s[i+1]);
        let romanIdx = roman.indexOf(s[i])
        let integer = numbers[romanIdx]
        result += integer
    }
    console.log(result)
    return result
}; */
/* var romanToInt = function(s) {

    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i=0; i < s.length; i++){
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next){
            result += next - cur // IV -> 5 - 1 = 4
            i++
        } else {
            result += cur
        }
    }

    return result; 
};
romanToInt(['M', 'C', 'M','X','C','I','V']) */


/* 
let bubbleSort = function (arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
                swapped = true
            }
        }
    } while (swapped)
}
let arr = [8, 3, 5, -6, -3, -9, -1, 5, 6]
bubbleSort(arr)
console.log(arr)
 */
// let ar = [1, 2, 3];
// function simpleArraySum(ar) {
//     // Write your code here
//     /* let result = 0
//     for(let i =0; i < ar.length; i++){
//         result += ar[i]
//     }
//     return result */
//     let result = ar.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//     })
//     return result;

// }

// simpleArraySum(ar)
// console.log(simpleArraySum(ar))

/* let a = [17, 28, 30];
let b = [99, 16, 8];
// let a = [5, 6, 7]
// let b = [3, 6, 10]
function compareTriplets(a, b) {
    
    let aliceSum = 0
    let bobSum = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceSum += 1
        } else {
            if (a[i] < b[i]) {
                bobSum += 1
            }
        }
    }
    return [aliceSum, bobSum];
    console.log([aliceSum, bobSum])
}

compareTriplets(a, b) */
/* let ar = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ];
function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for(let i =0; i< ar.length; i++ ){
        sum += ar[i];
    }
    console.log(sum)
    return sum;

}
aVeryBigSum(ar) */
// let arr = [-4, 3, -9, 0, 4, 1];
/* let arr = [1, 2, 3, -1, -2, -3, 0, 0];
function plusMinus(arr) {
    let positive = []
    let negative = []
    let zero = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] > 0){
            positive.push(arr[i])
        }

        if(arr[i] < 0){
            negative.push(arr[i])
        }
        
        if(arr[i] == 0){
            zero.push(arr[i])
        }
    }
    let positiveProp = positive.length / arr.length
    let negativeProp = negative.length / arr.length
    let zeroProp = zero.length / arr.length

    // return `${positive \n  negative \n  zeroProp}`
    console.log(positiveProp)
    console.log(negativeProp)
    console.log(zeroProp)

}

plusMinus(arr) */
/* 

function staircase(n) {
    // Write your code here
    let space = "";
    let final = ""
    for (let i = 1; i <= n; i++) {
        space += ""
        for (let j = 1; j <= n - i; j++) {
            final += "#";
            console.log(final)
        }
    }
}
staircase(4) */
