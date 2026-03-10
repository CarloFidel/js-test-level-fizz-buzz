export function fizzBuzz(num) {
  let output, status, message;

  if (num % 3 === 0) {
    status = "ok";
    message = "El número es divisible por 3";
    output = "Fizz";
  }
  if (num % 5 === 0) {
    status = "ok";
    message = "El número es divisible por 5";
    output = "Buzz";
  }
  if (num % 5 === 0 && num % 3 === 0) {
    status = "ok";
    message = "El número es divisible por 5 y por 3";
    output = "fizzBuzz";
  }
  if (num % 5 !== 0 && num % 3 !== 0) {
    status = "ok";
    message = "El número No es divisible ni por 3 ni por 5";
    output = num;
  }

  return {
    status: status,
    message: message,
    data: {
      input: num,
      output: output,
    },
  };
}
