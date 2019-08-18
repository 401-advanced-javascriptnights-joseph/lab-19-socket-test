'use strict';

const theWord = require('./theword');

const io = require('socket.io-client');

// const socket = io.connect('http://localhost:3000');

const socket = io.connect('http://socketserver19-env.ea3kkrybef.us-west-2.elasticbeanstalk.com/');

socket.on('the-bird', theWord);

