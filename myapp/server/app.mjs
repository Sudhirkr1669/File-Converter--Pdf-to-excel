// const express = require('express');
import express from "express";
// const fs = require('fs');
// const pdf = require('pdf-parse');
// const ExcelJS = require('exceljs');

const app = express();
const port =  8000; // You can change the port if needed

// Serve a simple HTML form to upload a PDF file
app.get('/uploadfile', (req, res) => {
  res.json(
    // `<form action="/convert" method="post" enctype="multipart/form-data">
    //   <input type="file" name="pdfFile" accept=".pdf">
    //   <button  type="submit">Convert to Excel</button>
    // </form>`
    // <h1>hello how are you</h1>

    {message:"hello how are you ?"}
  );
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

// Handle the file upload and conversion
// app.post('/convert', async (req, res) => {
//   try {
//     if (!req.files || !req.files.pdfFile) {
//       return res.status(400).send('Please select a PDF file for conversion.');
//     }

//     const pdfFile = req.files.pdfFile;

//     // Read PDF file and extract text
//     const pdfData = await pdf(pdfFile.data);
//     const pdfText = pdfData.text;

//     // Create an Excel workbook and worksheet
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('PDF Data');

//     // Split the extracted text into lines and add them to the Excel worksheet
//     const lines = pdfText.split('\n');
//     lines.forEach((line, rowIndex) => {
//       worksheet.addRow([line]);
//     });

//     // Set headers for download
//     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.setHeader('Content-Disposition', 'attachment; filename=converted.xlsx');

//     // Stream the Excel workbook to the response
//     await workbook.xlsx.write(res);

//     res.end();
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('An error occurred during conversion.');
//   }
// });

// // Start the Express server
