let sales: number = 123_456_789;
let course: string = "TypeScript";

//ARRAYS
let number: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

//TUPPLE
let user: [number, string] = [1, "kudez"];

// //ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;
const enum Size {
    Small = 1,
    Medium = 2,
    Large = 3,
}

let mySize: Size = Size.Medium;
console.log(mySize);

//Function
function calc(income: number): number {
    if (income < 50_000) return income * 1.2;
    return income * 1.3;
}
calc(200);
