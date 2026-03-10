export function validate(inputValue) {
  let status = "ok",
    message = "";

  if (inputValue === '') {
    status = "fail";
    message = "Tiene que ingresar un número";
  }
  if (inputValue < 1 || inputValue >= 101) {
    status = "fail";
    message = "El número tienen que estar entre 1 y 100";
  }
  return {
    status,
    message,
  };
}
