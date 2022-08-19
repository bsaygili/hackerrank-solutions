var arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  const arrlength = arr.length;
  var positive = 0;
  var negative = 0;
  var zero = 0;

  for (let i = 0; i < arrlength; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log(
    (positive / arrlength).toFixed(6),
    "\n",
    (negative / arrlength).toFixed(6),
    "\n",
    (zero / arrlength).toFixed(6)
  );
}
plusMinus(arr);
