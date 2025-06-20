/**
 * PUBLIC_INTERFACE
 * Simple, extensible logging utility. Use for development and debugging.
 * Extend for remote error reporting if needed.
 */
const logging = {
  info: (...args) => {
    // eslint-disable-next-line no-console
    console.info(...args);
  },
  warn: (...args) => {
    // eslint-disable-next-line no-console
    console.warn(...args);
  },
  error: (...args) => {
    // eslint-disable-next-line no-console
    console.error(...args);
  }
};

export default logging;
