module.exports = function check(str, bracketsConfig) {
	bracketsConfig = [];
	for (let key of str) {
		if (key === '(' || key === '{' || key === '[') {
			bracketsConfig.push(key);
		} else if (key === ')') {
			if (bracketsConfig.pop() !== '(') {
				return false;
			}
		} else if (key === '}') {
			if (bracketsConfig.pop() !== '{') {
				return false;
			}
		} else if (key === ']') {
			if (bracketsConfig.pop() !== '[') {
				return false;
			}
		} else {
			if (str.length % 2 !== 0) {
				return false;
			}
		}
	}
	return bracketsConfig.length === 0;
}
