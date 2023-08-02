const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

// const env = process.env.NODE_ENV;
const fs = require('fs');
// var util = require('util');

// const logDir = 'dist/server/logs';
const logDir = path.join(process.cwd(), 'logs');
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new DailyRotateFile({
            colorize: true,
            filename: `${logDir}/-error.log`,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '7d'
        })
    ]
});

const errorLogger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'system-error-service' },
    transports: [
        new DailyRotateFile({
            colorize: true,
            filename: `${logDir}/-error.log`,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '7d'
        })
    ]
});

module.exports = {
    // success: successLogger.info,
    info: logger.info.bind(logger),
    error: errorLogger.error.bind(errorLogger)
};
