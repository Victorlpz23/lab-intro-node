class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b) 
    this.length++
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.sort((a, b) => b - a)[0]
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.sort((a, b) => a - b)[0]
    }
  }

  sum() {
    if(this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b)
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => a + b) / this.items.length
    }
  }
}

module.exports = SortedList;
