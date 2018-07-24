import winston from 'winston'
import path from 'path'

// Set this to whatever, by default the path of the script.
const logPath = __dirname;

const tsFormat = () => (new Date().toISOString());

const errorLog = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, 'errors.log'), 
            timestamp: tsFormat,           
            level: 'info'})
    ]
})

const accessLog = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, 'access.log'),
            timestamp: tsFormat,
            level: 'info'})
    ]
})

export default {
    error: errorLog,
    access: accessLog
}