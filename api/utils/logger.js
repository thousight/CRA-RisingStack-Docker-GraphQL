import winston from 'winston'
import path from 'path'

// Set this to whatever, by default the path of the script.
const logPath = `${__dirname}/logs`

const tsFormat = () => (new Date().toISOString());

const infoLogger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, 'access.log'),
            timestamp: tsFormat,
            level: 'info'
        }),
        new winston.transports.Console({
            colorize: true, 
            prettyPrint: true,
            level: 'info',
            color: 'green'
        })
    ]
})

const errorLogger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, 'errors.log'),
            timestamp: tsFormat,
            level: 'error'
        }),
        new winston.transports.Console({
            colorize: true, 
            prettyPrint: true,
            level: 'error',
            color: 'red'
        })
    ]
})

export default {
    info: (msg) => infoLogger.info(msg),
    error: (msg) => errorLogger.error(msg)
}