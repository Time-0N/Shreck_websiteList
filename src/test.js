const s = "asdasdas asdasd"
let substring = "";
for(let i = 0; i < s.length; i++) {
    if (i % 4 === 0) {
        substring = substring + " ";
    }
    substring += s[i]
}

const newValue = substring.split(" ");
const filteredValues = newValue.filter((v) => v !== '');
console.log(filteredValues);
for (let j = 0; j < filteredValues.length; j++) {

}
console.log(filteredValues.length);



    function levensteinDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;



        const matrix = Array.from({ length: m + 1}, () => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) {
            matrix[i][0] = i;
        }

        for (let j = 0; j <= n; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const point = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] +1,
                    matrix[i - 1][j - 1] + point
                );
            }
        }
        return matrix[m][n];
    }