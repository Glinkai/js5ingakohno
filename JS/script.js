//+1

//function isMozartHere(str) {
//return str.toLowerCase().trim().includes('Mozart');
//};

//+2 

//function showUppercaseFirstLetter(str) {
//if (!str) return str;

//return str[0].toUpperCase() + str.slice(1);
//}

//+3

//let books = ["book1", "book2", "book3", "book4"];
//console.log([books.length - 1]);
//console.log([books.length - 2]);
//console.log(books.length);


//+4

//let javaScriptTypes = ["number", "null", "undefined", "string"];
//javaScriptTypes.push("bigint", "boolean", "object", "symbol");

//console.log(javaScriptTypes);

//+5

//let str = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";

//function showMeStr(str, substr) {
// return str.substr(str.indexOf(substr), substr.length);
//}

//let book = "«451 градус по Фаренгейту»";

//let result = showMeStr(str, book);

//console.log(result);


//+6

//function randomInteger(min, max) {

//let rand = min + Math.random() * (max - min);
//return Math.round(rand);
//}

//console.log(randomInteger(1, 100));
//console.log(randomInteger(1, 100));

//+7

//let arr = ["Я", "учу", "JavaScript", "очень", "мало"];

//arr.splice(4, 1, "много");
//console.log(arr);

// +8
let str2 = "Дорогой, а вдруг он потеряется?";

function text(str) {
    if (str2.includes(str)) {
        console.log('Включает')
    }
};
text("вдруг");

//+9

//let color = ["red", "black", "white", "yellow"];
//color.pop("yellow");
//color.push("blue");
//color.shift("red");
//color.unshift("orange");

//console.log(color);