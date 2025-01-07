// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { exec } = require('child_process');

// Initialize the app
const app = express();
const port = 3000;

// Enable CORS (Allow access from specific origin)
app.use(cors({ origin: 'http://localhost:4200' }));  // Allow requests from Angular app on port 4200

// Body parser middleware to parse JSON body
app.use(bodyParser.json());

// Path to the local folder where data is stored
const dataDirPath = path.join(__dirname, '../front-end/src/assets/data');

// Route to get data from a specific file
app.get('/data', (req, res) => {
    const { page } = req.query; // Extract the page parameter from the query string
    const filePath = path.join(dataDirPath, `${page}.ts`);  // Construct the file path based on the page

    // Check if the file exists
    fs.exists(filePath, (exists) => {
        if (!exists) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Read the TypeScript file (assuming it's a JS-compatible export)
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to read the file' });
            }

            // Safe extraction of the content (assumes export format)
            const jsonData = data.replace('export const data = ', '').replace(';', '');

            try {
                // Try to parse the content as JSON
                const jsonContent = eval(jsonData);
                res.json(jsonContent);  // Send the data as a response
            } catch (error) {
                return res.status(500).json({ error: 'Invalid data format in the TypeScript file' });
            }
        });
    });
});

// Route to update data and save it back to the file
app.post('/data', (req, res) => {
    const {page,updatedData} = req.body;

    // The file path for saving the data
    const filePath = path.join(dataDirPath, `${page}.ts`);

    // Save the data back to the TypeScript file (replace the current data)
    const dataToSave = `export const data = ${JSON.stringify(updatedData, null, 2)};`;

    fs.writeFile(filePath, dataToSave, 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update the file' });
        }
        res.status(200).json({ message: 'File updated successfully' });
    });
});


const projectDir = path.join(__dirname, '../');

app.post('/run-git-command', (req, res) => {
  const { command } = req.body;  // Command should be provided in the request body

  if (!command) {
    return res.status(400).json({ error: 'No git command provided' });
  }

  // Run Git command
  runGitCommand(command).then((data) => {
      res.json({ success: true, message: 'Git command executed successfully', data });
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: 'Error executing git command', error });
    });
});

// Function to execute Git commands
function runGitCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: projectDir }, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr || error.message}`);
      } else {
        resolve(convertStringToJson(stdout));
      }
    });
  });
}

function convertStringToJson(stringData) {
  // Split the string by newlines to get an array of file paths
  const filePaths = stringData.split('\n').map(path => path.trim()).filter(f=>f!='')

  // Create the JSON object with the files array
  const result = {
    filesChanged: filePaths
  };

  return result;
}

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
