// Import necessary modules
const express = require('express');
const multer = require('multer');
const sql = require('mssql');

const app = express();
const port = 3000;

// Configuration for multer (used for handling file uploads)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Azure SQL Database configuration
const config = {
  user: 'HCSS',
  password: 'Vsai@2004',
  server: 'wad-project.database.windows.net',
  database: 'data_storage',
  options: {
    encrypt: true, // Use encryption for security
  },
};

// Endpoint for handling image uploads
app.post('/uploadImage', upload.single('imageFile'), async (req, res) => {
  try {
    // Connect to the Azure SQL Database
    await sql.connect(config);

    // Convert the image file to base64 for storing in the database
    const imageBuffer = req.file.buffer.toString('base64');

    // Insert the image data into the database
    const result = await sql.query`INSERT INTO Images (Title, ImageData) VALUES (${req.body.imageTitle}, ${imageBuffer})`;

    // Check if the insertion was successful
    if (result.rowsAffected[0] === 1) {
      res.status(200).send('Image uploaded successfully!');
    } else {
      res.status(500).send('Failed to upload image.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    // Close the database connection
    await sql.close();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
