/* let integers = [24, 85, 0];
const arrayPacking = integers => {
   
    while (integers.length < 4)
        integers.push(0);
    return integers[3] << 24 | integers[2] << 16 | integers[1] << 8 | integers[0];
  };
  arrayPacking(integers) */

/* const breakChocolate = (n, m) => {
  if(((n*m)-1) < 0) {
    return 0
    } else {
    return (n*m)-1
  }
  
};

breakChocolate(2,5) */


/*  const dnaComplement = dna => {
   let objData = {"A":"T","T":"A","C":"G","G":"C","ATTGC":"TAACG","":""}
   var arr = [];
   for (var i=0; i < dna.length; i++) {
       arr[i] = objData[dna[i]];
   }
   return arr.join('');
 };

 dnaComplement("A") */


/* const countBinarySubstrings = s => {
    let now = 1, old = 0, result = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            now++
        }
        else {
            result += Math.min(now, old)
            old = now
            now = 1
        }
    }
    console.log(result + Math.min(now, old));
    return result + Math.min(now, old)

};

countBinarySubstrings("00110") */


/* const cyclicString = s => {

    var arr = s.split("");
    for (var i = 1; i < arr.length; i++) {
        if (isSub(arr.slice(0, i), arr.slice(i))) {
            return i;
        }
    }
    console.log(arr.length)
    return arr.length;
};

function isSub(sub, candidate) {
    for (var i = 0; i < candidate.length; i++) {
      if (candidate[i] !== sub[i % sub.length]) {
        return false;
      }
    }
    return true;
  }
cyclicString("aadddaaa") */

// let s = "STreSS";
// const firstNonRepeatingLetter = s => {
//     string = s.replace(/\s/g, "");


//     //for (let i = 0; i < s.length; i++) {
//         let result = [...string].find((character)=>{
//             return string.match(new RegExp(character, "gi")).length === 1
//         })
//         console.log(result)
//         return result;
//         // console.log([...string].find((character) => string.match(new RegExp(character, "gi")).length === 1))
//    // }
//     // console.log(nonRepeat)

//     // You can add the `|| ""` in the next line to get a default output of the empty string, if no character is unique. Otherwise, `undefined` is returned.
//     // console.log([...string].find((character) => string.match(new RegExp(character, "gi")).length === 1))
//     // return [...string].find((character) => string.match(new RegExp(character, "gi")).length === 1) /* || "" */;
//     // return "";
// };

// firstNonRepeatingLetter(s)


/**
 * Compresses a number by counting the occurrences of each number.
 *
 * @param {number} number - The number to encode with the "look and say" algorithm.
 * @returns {number} The result of applying the look-and-say sequence to the input.
*/
/*const lookSay = number => {
    var num = number.toString().split("");
    var counters = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] === num[i - 1]) {
            continue;
        }
        var current = num[i];
        var counter = 1;
        var j = i + 1
        while (current === num[j]) {
            counter += 1;
            j += 1;
        }
        counters.push(counter);
        counters.push(current);
    }
    return (counters.join(""));
};

let N = 3;

lookSay(N)*/
