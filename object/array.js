/**
 * array luu tru nhieu gia tri trong 1 bien duy nhat
 * chua nhieu kieu du lieu khac nhau, cho phep thay doi kich thuoc dong
 * 
 */

// khai bao
let a = [1,2,3,4,4,5,5,6,6,7,5,4,433,2,1,1,2,3];
console.log(a);
let b = [10,20,30,40,50,11,22,33,44,55,66,77,88,99];
console.log(b);
// array constructor : tao mang = goi ham tao mang
let aa = new Array(10, 20, 30,'dog','cat',100,200,300,400,500);
console.log(aa);

// truy cap cac phan tu mang
let a2 = ['html', 'css', 'js'];
console.log(a2[0]);
console.log(a2[1]);

// truy cap phan tu dau tien
let fst = aa[0];
console.log(fst);

// truy cap phan tu cuoi cua array
let lst = aa[aa.length - 1];
console.log(lst);
// sua cac phan tu trong array
console.log(aa);
aa[1] = 100000;
console.log(aa);
// them phan tu vao mang
a.push('nodejs');
a.push('web dev');
console.log(a);
// xoa phan tu khoi mang 
let last = aa.pop();
console.log(aa);
let first = aa.shift();
console.log(aa);
// do dai mang
let len = aa.length;
console.log(len);
// tang giam do dai mang
aa.length = 6;
console.log(aa);
aa.length = 8;
console.log(aa);
// for and foreach

for(let i = 0; i < a.length; i ++) {
    console.log(a[i]);
}
// foreach
a.forEach(function myfunc(x) {
    console.log(x);
})
let concateArray = a.concat(b);
console.log(concateArray);

const arr = [1,2,3,4,5];
arr.forEach((item) => {
    console.log(item);
});








