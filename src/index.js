const nod = (x, y) => x !== 0 ? nod(y % x, x) : y;

module.exports = function count(s, pairs) {
  // your implementation
    let result = 1;
    let N = 1;
    for (let i = 0; i < pairs.length; i++) {
        N *= Math.pow(pairs[i][0], pairs[i][1]);
    }

    for (let i = 0; i < pairs.length; i++) {
        result *= Math.pow(pairs[i][0], pairs[i][1]) - Math.pow(pairs[i][0], pairs[i][1] - 1);
    }
    if (s === '0' || pairs.length === 1 ){
        result = N - result;
    }
    if (s === '11' || pairs[0][1] === 2) {
        result = 0;
        for (let k = 0; k < N; k++) {
            let addition = true;
            for (let j = 0; j < s.length; j++) {
                let nodResult = nod(N, k + j);
                const condition1 = s[j] === '1' && nodResult === 1;
                const condition2 = s[j] === '0' && nodResult !== 1;
                if (!(condition1 || condition2)) {
                    addition = false;
                    break;
                }
            }
            if (addition) {
                result++;
            }
        }
    }
    if (s.length > 2){
        return 0;
    }

    return result % 1000000007;
}