const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT;
const cityRouter = require('./routes/Route').router;
const app = express();

app.use(express.json());
app.use('/api', cityRouter);


app.listen(PORT, () => console.log(`Server was started, PORT=${PORT}}`));