
function greet(name)
{
    return "hello " + name;
}
console.log(greet("dz"));
class Person
{
    constructor(name)
    {
        this.name = name;
    }
    greet()
    {
        console.log("hello" + this.name);
    }
}