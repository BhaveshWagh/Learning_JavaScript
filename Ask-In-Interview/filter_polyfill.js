let data = [1,2,3,4,5]

Array.prototype.myFilter = function (cb){
    let arr = []
    for (let i = 0; i< this.length; i++){
        if(cb(this[i],i)){
            arr.push(this[i]);
        }
    }
    return arr;
}
const filterLog = data.myFilter((el) => el < 4)
console.log(filterLog)