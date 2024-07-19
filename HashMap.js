// Implement a simple HashMap class with put, get, and remove methods.
class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

const myMap = new HashMap();
myMap.put("name", "John");
console.log(myMap.get("name")); // Output: "John"
myMap.remove("name");
console.log(myMap.get("name")); // Output: undefined
