// Sample in-memory database to store the results (replace this with a real database in production)
let results = [];

// Function to save the result to the database
export const saveResult = (result) => {
  results.push(result);
};

// Function to get all results from the database
export const getAllResults = () => {
  return results;
};
