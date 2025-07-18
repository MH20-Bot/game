const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Memory Match Game running at http://localhost:${PORT}`);
});
