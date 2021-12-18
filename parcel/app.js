//import statements
const Clerk = require("./js/Clerk.js");
const Parcel = require("./js/Parcel.js");
const prompt  = require("prompt-sync")();

const main = (()=>{

    //This is the entry point

    const weightOfParcel = parseFloat(prompt("Please enter the weight of the customer's parcel "));

    const p= new Parcel(weightOfParcel);

    console.log(`The cost to deliver the customer's parcel is $${p.calDeliveryCost().toFixed(2)}`)

})();