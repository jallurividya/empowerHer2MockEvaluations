let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
const profile={...person,...extra};
console.log(profile);