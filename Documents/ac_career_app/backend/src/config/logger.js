// backend/src/config/logger.js

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info', // Capture all logs at info level and above
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }), // Capture stack traces
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'ac-career-app-backend' },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }), // Errors only
    new transports.File({ filename: 'combined.log' }), // All logs
  ],
});

// If not in production, log to the console as well
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

module.exports = logger;
