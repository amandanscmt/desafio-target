invertString = (string) => {
  let invertedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString;
};

const myString = "Meu nome é Amanda!";
const myInvertedString = invertString(myString);
console.log(myInvertedString);