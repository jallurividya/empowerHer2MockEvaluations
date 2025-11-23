var x=1;
function counter(){
        console.log(x++);
    return counter;
}
const c = counter();
c(); // 1
c(); // 2
c(); // 3