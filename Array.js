// Array Initilization

let arr=["Apple","Mango",2.4,5,3];
for(let i=0;i<arr.length;i++){
    console.log(`Index ${i} Element is ${arr[i]}`);
}

//Apply basic property like push pop shift and unshfit
arr.push(49);
arr.push(44);
for(let i=0;i<arr.length;i++){
console.log(`After push operation${arr[i]}`);
}

//Shift Operation
arr.shift(45);
arr.shift(9.3);
for(let i=0;i<arr.length;i++){
    console.log(`Shift operation${arr[i]}`);
}

//Unshift Operation

arr.unshift(45);
arr.unshift(33333);
for(let i=0;i<arr.length;i++){
    console.log(`Unsift Operation${arr[i]}`);
}

for(let i=0;i<arr.length;i++){
console.log(arr[i]);
}