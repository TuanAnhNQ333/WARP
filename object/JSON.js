/* json : javascript object notation : cach de to chuc 
du lieu, tuong tu nhu xml o cau truc thong tin


*/
{
    "Avengers": [
        {
            "Name": "Tony stark",
            "also known as": "Iron man",
            "Abilities": [
                "Genius",
                "Billionaire",
                "Playboy",
                "Philanthropist"
            ]
        },
        {
            "Name": "Peter parker",
            "also known as": "Spider man",
            "Abilities": [
                "Spider web",
                "Spidy sense"
            ]
        }
    ]
}
let text = '{"model":[' +
    '{"carName":"Baleno","brandName":"Maruti" },' +
    '{"carName":"Aura","brandName":"Hyndai" },' +
    '{"carName":"Nexon","brandName":"Tata" }]}';

const cars = JSON.parse(text);
console.log("The car name is: " + cars.model[2].carName + 
    " of brand: " + cars.model[2].brandName);
