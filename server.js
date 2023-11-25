const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let sensorData = ''; // Variable to store received sensor data

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/data', (req, res) => {
  sensorData = req.body.sensorValue; // Assuming ESP32 sends 'sensorValue'
  console.log('Data received from ESP32:', sensorData);
  res.send('Data received successfully');
});

app.get('/getdata', (req, res) => {
  res.json({ sensorData });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});