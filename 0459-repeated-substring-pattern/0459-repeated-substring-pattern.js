/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length;
    let lps = new Array(len).fill(0);
    let j = 0;

    computeLPSArray(s, len, lps);

    let lps_len = lps[len - 1];

    return lps_len > 0 && len % (len - lps_len) == 0;
};

function computeLPSArray(s, str_len, lps) {
    let i = 1;
    let sub_len = 0;
    lps[0] = 0; // lps[0] is always 0

    while (i < str_len) {
        if (s[i] == s[sub_len]) {
            sub_len++;
            lps[i] = sub_len;
            i++;
        } else {
            if (sub_len != 0) {
                sub_len = lps[sub_len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}