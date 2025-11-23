let nums = [10, 3, 7, 20, 13, 2];

const squares = nums.map((num)=>num*num);
console.log(squares);

const primes = nums.filter((num)=>{
    let count=0;
    for(let i=2;i<num;i++){
        if(num%i==0)
            count++;
    }
    if(count==0)
        return num
});
console.log(primes);

const sum = (...n) => {
    return n.reduce((ac,el)=>ac+el,0)
}
console.log(sum(10, 3, 7, 20, 13, 2));


const sortedArray = nums.sort((a,b)=>{
    return b-a;
});
console.log(sortedArray);
