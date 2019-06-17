function List(){
    this.dataStore = [];        // 初始化容器, 用来存放列表元素
    this.listSize = 0;          // 初始化元素个数
    this.append = append;       // 向列表末尾添加一个元素
    this.find = find;           // 查找列表中的某一个元素
    this.revise = revise;       // 修改列表中对某个元素
    this.remove = remove;       // 删除列表中的某一元素
    this.length = length;       // 返回列表中总的元素个数
    this.toString = toString;   // 显示列表中的元素
}

function append ( element ) {
    this.dataStore[this.listSize++] = element;
}

function find(element){
    for( var i = 0 ; i < this.dataStore.length ; i ++ ){
            if( this.dataStore[i] == element ){
                return i;
            }
        }
    return -1;
}

function revise(element, changeElement){
    var foundAt = this.find(element);
    if( foundAt > -1 ){
        this.dataStore[foundAt] = changeElement;
    }
}

function remove ( element ) {
    var foundAt = this.find(element);
    if( foundAt > -1 ){
        this.dataStore.splice( foundAt , 1 );
        --this.listSize;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString(){
    return this.dataStore;
}


//构造列表对象
var fruits = new List();

//添加三个元素
fruits.append('Apple');
fruits.append('Grape');
fruits.append('Banana');

//打印列表
console.log( fruits.toString() )      // ["Apple", "Grape", "Banana"]

//查看列表长度
console.log( fruits.length() )        // 3

//查找 Banana 的位置
console.log( fruits.find('Banana') )  // 2


//修改 Banana 为 Ananab
fruits.revise('Banana', 'Ananab');
console.log( fruits.toString() );       // ["Apple", 'Grape', "Ananab"]

//删除 Grape 
fruits.remove('Grape');
console.log( fruits.toString() )      // ["Apple", "Ananab"]