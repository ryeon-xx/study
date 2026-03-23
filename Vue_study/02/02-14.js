let obj = { result : 0 };

obj.add = function(x,y) {
    function inner() {
        this.result = x + y;
    }
    inner = inner.bind(this);
    inner()
}
obj.add(6,7)

console.log(obj);   // { result : 13 }