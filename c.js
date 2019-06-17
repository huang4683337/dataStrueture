function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    } 
}


var man =[
    {name:'man_1'},
    {name:'man_2'},
    {name:'man_3'},
    {name:'man_4'},
];
var woMan =[
    {name:'woMan_1'},
    {name:'woMan_2'},
    {name:'woMan_3'},
];

function getDancers(man, woMan){
    manDancers.dataStore = man;
    woManDancers.dataStore = woMan;
}

function dance(manDancers, woManDancers){
    while( !manDancers.empty() && !woManDancers.empty() ){
        var mandace = manDancers.dequeue(); 
        console.log('mandace',mandace);
        var woManDance = woManDancers.dequeue();
        console.log('woManDance',woManDance);
    }
}

var manDancers = new Queue();
var woManDancers = new Queue();
getDancers(man, woMan);
dance(manDancers, woManDancers);