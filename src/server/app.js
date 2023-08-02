const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const _debug = require('debug');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
// const { run } = require('./utils/setupUtil');
// const AppRouter = require('./routes');
require('dotenv/config');
(async () => {
    const app = express();
    // enable this if you run behind a proxy (e.g. nginx)
    const debug = _debug('student-enrollment');
    const isDev = process.env.NODE_ENV === 'development';


    app.use(
        compression({
            filter: function (req, res) {
                if (req.headers['x-no-compression']) {
                    // don't compress responses with this request header
                    return false;
                }
                // fallback to standard filter function
                return compression.filter(req, res);
            }
        })
    );
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json({ limit: '100mb' }));
    app.use(cors({ origin: true, credentials: true }));

    app.use(express.urlencoded({ extended: true, limit: '100mb' }));
    app.set('views', path.join(__dirname, '../client'));
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(
        helmet({
            crossOriginEmbedderPolicy: false
        })
    );
    app.use(
        helmet.contentSecurityPolicy({
            useDefaults: true,
            directives: {
                defaultSrc: ["'self'", 'http:', 'https:'],
                baseUri: ["'self'"],
                mediaSrc: ["'self'", 'data:'],
                fontSrc: ["'self'", 'https:', 'data:'],
                imgSrc: [
                    "'self'",
                    'http:',
                    'https:',
                    'data:',
                    'blob:',
                    'cloudinary.com',
                    'https://res.cloudinary.com/',
                    'http://res.cloudinary.com/'
                ],
                styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
                scriptSrc: ["'self'", 'http:', 'https:', "'unsafe-inline'"]
            }
        })
    );
    app.use('/uploads', express.static(path.join(__dirname, '../../uploads/')));
    app.use('/assets', express.static(path.join(__dirname, '../client/assets/')));
    app.use(express.static(path.join(__dirname, '../client')));
    //Routes
    // app.use('/api', AppRouter);
    app.get('/api', (req, res) => {
        res.json({ message: 'Welcome to  app' });
    });


    app.use('/*', (req, res) => {
        return res.render('enrollment', {
            BASE_URL: process.env.BASE_URL,
            SUB_DOMAIN_NAME: process.env.SUB_DOMAIN_NAME
        });
    });
    app.use((error, req, res, next) => {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        });
    });
    //=====================SETUP SERVER================================
    const normalizePort = val => {
        const port = parseInt(val, 10);
        // named pipe
        if (isNaN(port)) return val;
        // port number
        if (port >= 0) return port;
        return false;
    };
    /* Event listener for HTTP server "error" event */
    const onError = error => {
        if (error.syscall !== 'listen') throw error;
        const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    };
    const onListening = () => {
        const addr = server.address();
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        if (isDev) console.log('Listening on ' + bind);
        debug('Listening on ' + bind);
    };
    const port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);
    const server = http.createServer(app);
    server.on('error', onError);
    server.on('listening', onListening);
    // run();
    server.listen(port);
})();
