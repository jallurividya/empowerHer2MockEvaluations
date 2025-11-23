const sumAll = (...nums) => {
    return nums.reduce((ac,el)=>ac+el,0)
}
console.log(sumAll(1, 2, 3, 4))
