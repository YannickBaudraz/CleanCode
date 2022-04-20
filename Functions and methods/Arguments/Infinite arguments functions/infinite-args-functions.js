function sumUp(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

const total = sumUp(10, 19, -3, 22, 5, 100);
// const total = sumUp([10, 19, -3, 22, 5, 100]);
