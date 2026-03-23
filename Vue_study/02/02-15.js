let obj = { result : 0 };
obj.add = function(x,y) {
    const inner = () => {
        this.result = x + y;
    }
    inner()
}
obj.add(7,8)

console.log(obj);  // { result : 15 }