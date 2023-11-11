/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let res = Array.from({length: img.length}, () => Array(img[0].length).fill(0));
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            let count = 0;
            for (let m = i - 1; m <= i + 1; m++) {
                for (let n = j - 1; n <= j + 1; n++) {
                    if (img[m] && img[m][n] !== undefined) {
                        res[i][j] += img[m][n];
                        count++;
                    }
                }
            }
            res[i][j] = Math.floor(res[i][j] / count);
        }
    }
    return res;
};