// NOMOR 1

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
