function reverseString(str) {
	// console.log(str);
	// console.log(str[0]);
	if (str.length <= 1) return str;
	return reverseString(str.slice(1)) + str[0];
	// return str[0];
}
console.log(reverseString('halloworld'));
