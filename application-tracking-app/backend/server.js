const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { request } = require('express');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {  useCreateIndex: true, useUnifiedTopology:true }
);
//UseNewUrlParser: true,
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const applicationRouter = require('./routes/applications');
const userRouter = require('./routes/users');

app.use('/applications', applicationRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
});