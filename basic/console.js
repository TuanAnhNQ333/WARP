// console : fix bug

//console.log() method
console.log('hehe'); console.log(1); console.log(true);
console.log(null); console.log(undefined); console.log(1,2,3,4,5);
// console.errer() method ; ghi thông báo lỗi vào console
console.error('error');
// console.warn() method : ghi warning vào console
console.warn('this is a warning');
// console.clear() xoa console.
console.clear();
// console.time() & console.timeEnd ; thoi gian danh cho 1 khoi/ham
console.time('abc') ;
    let fun = function() {
        console.log('function is running');
    }
    let fun2 = function() {
        console.log('fun2 is running....');
    }
    fun();
    fun2();
console.timeEnd('abc') ;
// console.table() : tao bang ben trong console
console.table({'a':1, 'b':2 ,'c':3, 'd': 4});
// console.count() : dem so ham dat duoc
for(let i = 0; i < 5; i ++) {
    console.count(i);
}
// console.groupEnd  : nhom noi dung trong 1 block
console.group('simple');
    console.warn('warning');
    console.error('error');
    console.log('hehehe');
console.groupEnd('simple');
console.log('new section')

// custom console log 
const spacing = '10px';
const styles = 
        `padding: ${spacing}; 
        background-color: white;
        color : green; 
        font-style: italic; 
        border: 1px solid black; 
        font-size: 2em;`;
console.log('%hehe', styles);




