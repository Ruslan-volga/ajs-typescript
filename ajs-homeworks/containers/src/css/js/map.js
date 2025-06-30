export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
        this.errors.set(1, 'ERR_INVALID_TRADE_PARAMETERS');
        this.errors.set(2, 'ERR_NOT_ENOUGH_RIGHTS');
        this.errors.set(3, 'ERR_UNKNOWN_COMMAND');
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
        return 'Unknown error';
    }
  }