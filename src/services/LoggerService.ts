export default class LoggerService {
  constructor() {
    console.log("New logger instance created");
  }

  logError(this: LoggerService, error) {
    console.error(error);
  }
}
