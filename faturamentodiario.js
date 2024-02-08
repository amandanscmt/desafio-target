const data = require("./data.json");

const checkValue = () => {
  const values = data.map((item) => item.valor);

  const minValue = Math.min(...values.filter((values) => values !== 0));
  const maxValue = Math.max(...values);

  console.log(`O menor valor diário encontrado foi ${minValue}`);
  console.log(`O maior valor diário encontrado foi ${maxValue}`);
};

checkValue();

const checkAverage = () => {
  const values = data.map((item) => item.valor);

  const totalValues = values.reduce((acc, curr) => acc + curr, 0);
  const average = totalValues / values.length;

  const daysAboveAverage = data.filter(item => item.valor > average).length;

  console.log(daysAboveAverage);
};

checkAverage();
