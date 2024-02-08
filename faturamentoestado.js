const sales = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const values = Object.values(sales);
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

for (const state in sales) {
  const valueState = sales[state];
  const percentage = (valueState / sum) * 100;
  percentage[state] = percentage;
  console.log(percentage);
}



