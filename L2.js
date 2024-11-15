/* 
tan tu chuoi - string operator
*/
var firstname = 'tuan';
var lastname = ' anh';

console.log(firstname + lastname);


// boolean

var a = 1;
var b = 2;


var isSuccess = a > b;

console.log(isSuccess);

// if else
if (a > b)
{
    console.log(true);
}
else
{
    console.log(false);
}
var c = 3;
if(a || 0 && b || 0 && c || 0) 
{
    console.log('true');
}
else if(a != 0)
{
    console.log('true');
}
/*
kieu du lieu : number , string , boolean , underfined , null , symbol , 
phuc tap : function , object 
 */
var age; 
var  isNull = null; // nothing
// symbol
var id = Symbol('id');
var id2 = Symbol('id');
var myFunction = function() {
    alert('tuan anh dz vl');
}

myFunction();
// object
var myObject = {
    name: 'tuan anh',
    age: 20,
    address: 'Ha Noi',
    myFunction: function(){

    }
};
var myArray = [];
