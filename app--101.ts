const number1: number = 5;
const number2: number = 2.9;
const printResult = true;
const passedPhrase = 'Ahoy sailor o/';

const add = ((
  n1: number = number1,
  n2: number = number2,
  showResult: boolean = printResult,
  phrase: string = passedPhrase,
) => {
  if (!showResult) console.log(n1 + n2);
  else return `${phrase}: ${n1 + n2}`;
})();
