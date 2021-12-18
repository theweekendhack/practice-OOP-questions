    const Rectangle = require("./js/Rectangle.js");
    const prompt  = require("prompt-sync")();


const main = (()=>{


    //This is the entry point

    const len = parseFloat(prompt("Please enter the length of a rectangele "));
    const wid = parseFloat(prompt("Please enter the width of a rectangele "));

    const r1 = new Rectangle(len, wid);

    console.log(`The Area of the rectangle is ${r1.calArea()}`);
    console.log(`The Perimeter of the rectangle is ${r1.calPerimeter()}`);



})();