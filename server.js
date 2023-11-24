const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let receivedDataFromESP32 = ''; 

app.post('/esp32data', (req, res) => {
  receivedDataFromESP32 = req.body.data;
  console.log('Data received from ESP32:', receivedDataFromESP32);
  res.send('Data received successfully');
});

app.get('/getdata', (req, res) => {
  res.json({ data: receivedDataFromESP32 });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
