function findDuplicates(arr) {
  let result = [];
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (frequency[number]) {
      result.push(number);
    } else {
      frequency[number] = 1;
    }
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5, 3, 1, 6, 2, 6];
let duplicates = findDuplicates(numbers);
console.log(duplicates);
