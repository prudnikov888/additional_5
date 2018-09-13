module.exports = function check(str, bracketsConfig) {
    let pairs = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        pairs.push(bracketsConfig[i][0] + (bracketsConfig[i][1]));
    }
    const n = str.length / 2;
    for (i = 0; i < n; i++) {
        for (j = 0; j < pairs.length; j++) {
            str = str.replace(pairs[j], '');
        }
    }
    return str.length === 0;
};
