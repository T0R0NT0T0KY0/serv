const express = require("express");
const path = require("path");
require('dotenv').config();
const PORT = process.env.PORT;
const userRouter = require('./routes/Route');
const pathSegments = path.resolve();
const app = express();

app.use(express.json());
app.use('/api', userRouter);


app.listen(PORT, () => console.log(`Server was started, PORT=${PORT}`));