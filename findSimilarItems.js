const nums = [2, 6, 3, 6, 3, 4, 7, 3, 4, 3, 2];

// task: find all that occur more than once
// expected result: 2, 6, 3, 4

const similarNums = [];
const findObj = {};
for (const num of nums) {
	if (findObj[num]) {
		if (!similarNums.includes(num)) {
			similarNums.push(num);
		}
	}
	findObj[num] = 'found';
}

console.log(findObj);
console.log(similarNums);
