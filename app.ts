type Combine = number | string;

const combine: Combine = ((input1: Combine, input2: Combine) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else result = input1.toString() + input2.toString();
  console.log(result);
  return result;
})(55, 24);
