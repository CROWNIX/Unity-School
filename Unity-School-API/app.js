require('dotenv').config();
require('./utils/db');

const {API_NAME, API_HOST, API_PORT} = process.env;
const port = API_PORT || 5000;
const apiName = API_NAME || 'Unity School API';
const express = require('express');
const chalk = require('chalk');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const adminRoute = require('./routes/adminRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const fileupload = require('express-fileupload');

app.use(express.static('public'));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:9009'}));
app.use(express.json({limit: '50mb'}));
app.use(fileupload());
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use('/api', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/admin', adminRoute);

app.listen(port, () => {
    console.log(`${apiName} | Listening at\n\n ${chalk.white.bold('Local:')} ${chalk.green(`http://${API_HOST}:${port}`)}\n`);
});
