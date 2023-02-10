const nums = [2, 6, 3, 6, 3, 4, 7, 3, 4, 3, 2];

// task: find all that occur more than once
// expected result: 2, 6, 3, 4

const similarNums = [];

const compareNums = (index, numToCompare = null) => {
	const num = nums[index];
	if (num === numToCompare) {
		similarNums.push(num);
	}
	if (index < nums.length - 1) {
		compareNums(index + 1, num);
	}
};

compareNums(0);
console.log(similarNums);
