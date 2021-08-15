// function numberOfItems(arr, item) {
//   let count = 0;
//   for (let element of arr) {
//     if (Array.isArray(element)) {
//       count = count + numberOfItems(element, item);
//     }
//     if (element === item) {
//       count++;
//     }
//   }
//   return count;
// }

// var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
// console.log(numberOfItems(arr, 25));
// console.log(numberOfItems(arr, "apple"));

// function johnMary(wordsArg) {
//   let johnCount = 0;
//   let maryCount = 0;
//   let words = wordsArg.split("&");
//   for (let word of words) {
//     if (/john/i.test(word)) {
//       johnCount++;
//     }
//     if (/mary/i.test(word)) {
//       maryCount++;
//     }
//   }
//   if(!johnMary || maryCount) return false
//   return johnCount === maryCount ? true : false;
// }

// console.log(johnMary("john&Mary"));

// async function runSequentially(functions) {
//   let results = [];
//   for (let fn of functions) {
//     try {
//       const response = await fn();
//       results.push(response);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   }
//   return Promise.resolve(results);
// }

// let counter = 1;
// function incrementCounterAsync() {
//   return new Promise((resolve, reject) => {
//     counter += 1;
//     resolve(counter);
//   });
// }
// let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
// if (promise) {
//   promise
//     .then((result) => console.log(result))
//     .catch((error) => console.log("Error: " + error));
// }
// module.exports.runSequentially = runSequentially;

/**
 * @param {number[]} numbers An array of numbers.
 * @return {number[]} An array of unique numbers.
 */
function findUniqueNumbers(numbers) {
  const uniqueMap = new Map();

  //   Looping and storing values in a hashMap
  for (let num of numbers) {
    const inMap = uniqueMap.get(num);
    if (inMap) {
      uniqueMap.set(num, false);
    } else {
      uniqueMap.set(num, true);
    }
  }
  //   Getting the unique elements and returning the output
  let output = [];
  uniqueMap.forEach((val, key) => {
    console.log(val, key);
    if (val) {
      output.push(key);
    }
  });
  return output;
}

let result = findUniqueNumbers([1, 2, 1, 3]);
console.log(result);
