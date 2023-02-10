function findDuplicates(arr, index = 0, duplicates = []) {
  if (index === arr.length) {
    return duplicates;
  }

  let current = arr[index];
  let restOfArray = arr.slice(index + 1);
  if (restOfArray.includes(current) && !duplicates.includes(current)) {
    duplicates.push(current);
  }

  return findDuplicates(arr, index + 1, duplicates);
}

let numbers = [1, 2, 3, 4, 5, 3, 1, 2, 6];
let duplicates = findDuplicates(numbers);
console.log(duplicates);