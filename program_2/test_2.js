const fs = require("fs");
const locations = {};
const locationFile = fs.readFileSync("location.txt", "utf-8");
const locationLines = locationFile.trim().split("\n");
for (const line of locationLines) {
  const [id, name] = line.split(",");
  locations[id] = name.trim();
}

const salesByLocation = {};
const salesByPerson = {};
const salesFile = fs.readFileSync("sales_location.txt", "utf-8");
const salesLines = salesFile.trim().split("\n");
for (const line of salesLines) {
  const [id, name, amount] = line.split(",");
  const locationName = locations[id];
  const salesAmount = parseInt(amount);
  if (!salesByLocation[locationName]) {
    salesByLocation[locationName] = 0;
  }
  salesByLocation[locationName] += salesAmount;
  if (!salesByPerson[name]) {
    salesByPerson[name] = 0;
  }
  salesByPerson[name] += salesAmount;
}

console.log("Sales By Location\tSales Number");
for (const locationName of Object.keys(salesByLocation)) {
  console.log(`${locationName}\t\t${salesByLocation[locationName]}`);
}
console.log("\nSales By Person\tSales Number");
for (const name of Object.keys(salesByPerson)) {
  console.log(`${name}\t\t${salesByPerson[name]}`);
}
