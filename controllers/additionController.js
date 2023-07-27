import { saveResult } from "../core/database/DBController.js";

export const addition = (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;

  // Save the result to the database using the imported function
  saveResult(result);

  res.send(`The addition result is: ${result}`);
};
export const subtraction= (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 - num2;

  // Save the result to the database using the imported function
  saveResult(result);

  res.send(`The subtraction result is: ${result}`);
};
export const multipication = (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;

  // Save the result to the database using the imported function
  saveResult(result);

  res.send(`The multipication result is: ${result}`);
};
export const division= (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 / num2;

  // Save the result to the database using the imported function
  saveResult(result);

  res.send(`The division result is: ${result}`);
};

