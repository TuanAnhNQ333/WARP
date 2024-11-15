
// prop in object


// in operator
let hi = ["html", "css", "js"];

console.log(hi[1]);
console.log(1 in hi);

// in operator
const data = {
    name : 'he',
    age : 100,
    city : 'warp'
};
console.log('name' in data);
console.log('address' in data);



// instanceof operator : kiem tra xem doi tuong co phai the hien cua lop hay ham cu the khong, tra ve gia tri boolean
/*
let hii = objectName instanceof objectType
*/
let lang = ['html', 'css', 'js'];
console.log(lang instanceof Array);
console.log(lang instanceof Object);
console.log(lang instanceof String);
console.log(lang instanceof Number);

