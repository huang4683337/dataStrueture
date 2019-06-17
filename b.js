function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}




function mulBase(num, base) {
    var stack = new Stack();
    do {
        console.log(num % base)
        stack.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (stack.length() > 0) {
        converted += stack.pop();
    }
    return converted;
}

console.log( mulBase(5, 2) );

