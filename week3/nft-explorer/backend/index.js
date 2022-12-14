const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json())

const dataRoutes = require('./routes/api').router;
app.use('/api', dataRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
