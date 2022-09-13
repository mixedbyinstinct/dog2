const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

app.use(express.static(path.join(__dirname, './dist')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
})

app.listen(port, () => console.log('server listening on port ' + port));