const map = new Map([["k", "v"]]);
console.log(map.values());

/**
 * @type {Map<number, U>}
 */
const map2 = new Map();

class U {
  name = "";
  getName() {
    return this.name;
  }
  constructor(name) {
    this.name = name;
  }
}

map2.set(1, new U("a"));
console.log(map2.get(1));
