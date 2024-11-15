/**
 * doi tuong co the tao 2 pp : literal & constructed
 * literal:
 * let obj = {
 *  key1: val1,
 *  key2: val2
 * };
 * 
 * constructed
 * let obj(val1, val2) {
 *  this.key1 = val1;
 *  this.key2 = val2;
 * }
 */

let strPrimitive = "hihihi";
typeof strPrimitive;
strPrimitive instanceof String; // false
let strObject = new String("hihihi");
typeof strObject;
strObject instanceof String;
Object.prototype.toString.call( strObject); // object string


let myObj = {
    int_prop: 5,
    str_prop: "hihihi",
    obj_prop: new Date(),
    inner_obj: {
        int_prop: 6
    },
    func_prop: function() {
        console.log("hiihi");
    }
};
console.log(myObj.int_prop);
console.log(myObj.str_prop);
console.log(myObj.obj_prop.toLocaleDateString());
console.log(myObj.inner_obj.int_prop);
myObj.func_prop();

// define function exprilitly
function toGreet() {
    console.log("hihihi");
}
let myObject = {
    greet: toGreet,
    bywhom: function() {
        console.log(" - hihihi.org");
    }
}
myObject.greet();
myObject.bywhom();






