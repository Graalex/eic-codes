const express = require('express');
const rotator = require('file-stream-rotator');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');

const conf = require('./config.js')

const app = express();
const logDir = __dirname + '/logs';

fs.existsSync(logDir) || fs.mkdirSync(logDir);
let logStream = rotator.getStream({
	date_format: 'YYYY-MM-DD',
	filename: logDir + '/access-%DATE%.log',
	frequency: 'daily',
	verbose: false
});

app.use(cors());
app.use(morgan('combined', {stream: logStream}));

let port = conf.server.listenPort || 9090;
app.listen(port, () => {
	console.log('EIC api service start at port ' + port);
});

module.exports = app;