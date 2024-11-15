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

