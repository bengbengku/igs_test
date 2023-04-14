const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Input number: ", (input) => {
  readline.question("Sort (asc/desc): ", (order) => {
    const numbers = input.split(",").map((str) => parseInt(str.trim()));
    if (order === "asc") {
      numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
      numbers.sort((a, b) => b - a);
    } else {
      console.log("Invalid!");
      readline.close();
      return;
    }
    console.log(numbers.join(" -> "));
    readline.close();
  });
});
