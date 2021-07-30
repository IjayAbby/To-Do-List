class LocalStorage {
  constructor() {
    this.list = ['TaskData', []];
  }

  setItemLocalStorage(key, value) {
    this.list[1].push({ key, value });
  }
}

module.exports = LocalStorage;