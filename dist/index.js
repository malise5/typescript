"use strict";
let sales = 123456789;
let course = "TypeScript";
//ARRAYS
let number = [1, 2, 3, 4, 5, 6, 7, 8];
//TUPPLE
let user = [1, "kudez"];
// //ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map