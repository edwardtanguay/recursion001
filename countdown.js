const countdownItems = [];

const countdown = (num) => {
	countdownItems.push(num);
	if (num > 0) {
		countdown(num - 1);
	} else {
		countdownItems.push('blast off');
	}
};
countdown(10);
console.log(countdownItems);
