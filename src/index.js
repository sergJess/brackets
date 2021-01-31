module.exports = function check(str, bracketsConfig) {
    if (typeof str === 'string' && str.length % 2 === 0 && Array.isArray(bracketsConfig)) {
        let length = str.length;
        let stack = [];
        let lastIndex = 0;
        const pairBrackets = {
            '(': ')',
            '[': ']',
            '{': '}',
            '1': '2',
            '3': '4',
            '5': '6'
        }
        const unPairBrackets = {
            '|': '|',
            '7': '7',
            '8': '8'
        }

        for (let i = 0; i < length; i++) {
            if (pairBrackets[str[i]] || (unPairBrackets[str[i]] !== unPairBrackets[stack[stack.length - 1]])) {
                stack.push(str[i]);
                continue;
            }
            if (stack.length) {
                lastIndex = stack[stack.length - 1];
                if ((str[i] === pairBrackets[lastIndex] || str[i] === unPairBrackets[lastIndex])) stack.pop();

            }
        }
        return (!stack.length);

    }
    return false;
}