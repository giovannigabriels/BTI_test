// NOMOR 1
function tes(n) {
  for (let i = 1; i < n + 1; i++) {
    let j = 1;
    while (j <= n + 3) {
      console.log(j);
      if (i == j) {
        console.log("**");
        j += 2;
      }
      j += 1;
    }
    console.log("");
  }
}
tes(5);
// nomor 2
let array = [10, 7, 5, 8, 11, 9, 1];
function selisih(arr) {
  let temp = 0;
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > temp) {
      temp = Math.abs(arr[i] - arr[i + 1]);
      first = arr[i];
      second = arr[i + 1];
    }
  }
  let output = `${temp} (${first} dan ${second})`;
  return output;
}

console.log(selisih(array));
