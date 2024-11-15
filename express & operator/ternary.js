// toan tu 3 ngoi : cond ? true : false
function hehe () {
    let p = 40;
    let result = (p > 39) ? "pass" : "fail";
    
    console.log(result);

}
hehe();
function hee() {
    let age = 100;
    let result = (age >= 200) ? "died" : "alive";
    
    console.log(result);
}
hee();

function hii() {
    let mark = 95;
    let result = (mark < 40) ? "ngoo" :
        (mark < 50) ? "ngou" :
            (mark < 80) ? "average":
                (mark >= 90) ? "good" : "excellent";
    console.log(result);
}
hii();