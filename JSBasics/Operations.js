let value = 3
console.log(value + 3) //6

console.log(2 + 2) //4
console.log(2 - 2) //0
console.log(2 * 2)  //4
console.log(2 ** 2) //4
console.log(2 / 2)  //1
console.log(2 % 2)  //0

let str1 = "Hello"
let str2 = " Yogesh"
let str3 = str1 + str2
console.log(str3) //Hello Yogesh

console.log("1" + 2) //12
console.log(1 + "2")  //12
console.log(1 + 2 + "2")  //in this case first operation occurs and then treated as string  //32
console.log("1" + 2 + 2)  // in this case all are treated as strings   //122

//Tricky Conversions

console.log(+true)  //1
console.log(+"")   //0


let n1,n2,n3

n1 = n2 = n3 = 2+2
console.table([n1,n2,n3])  //4,4,4

let gc = 12
gc++
console.log(gc)//13
gc--
console.log(gc) //12