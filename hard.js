const express = require("express");
const app = express();
const employees = require("./employees.json");

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:employeeID", (req, res) => {
  const employeeID = parseInt(req.params.employeeID);
  const employee = employees.find((emp) => emp.employeeID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Run node and look on postman
