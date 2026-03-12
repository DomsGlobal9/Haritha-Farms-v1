const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

const filePath = "./requests.xlsx";

app.post("/submit", (req, res) => {
  const { name, phone, date, message } = req.body;

  const newData = [
    {
      Name: name,
      Phone: phone,
      Date: date,
      Message: message,
    },
  ];

  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets["Requests"] || XLSX.utils.json_to_sheet([]);

    const existingData = XLSX.utils.sheet_to_json(worksheet);

    const updatedData = [...existingData, ...newData];

    const newWorksheet = XLSX.utils.json_to_sheet(updatedData);

    workbook.Sheets["Requests"] = newWorksheet;
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet(newData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Requests");
  }

  XLSX.writeFile(workbook, filePath);

  res.json({ message: "Saved successfully" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
