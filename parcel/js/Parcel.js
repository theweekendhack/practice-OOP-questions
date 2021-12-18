class Parcel 
{

    //properties
    weight;

    //one constructor
    constructor(w)
    {
        this.weight=w
       
    }

    //methods
    calDeliveryCost()
    {

        let deliveryCharge=0;

        if(this.weight <=2.5)
        {
            deliveryCharge= this.weight * 3.50
        }

        else if(this.weight >=2.5 && this.weight <=5)
        {
            deliveryCharge= this.weight * 2.85
        }

        else if(this.weight >5 && this.weight <=7)
        {
            deliveryCharge= this.weight * 2.45
        }

        else
        {
            deliveryCharge= this.weight * 3.25
        }
    
        return deliveryCharge;

    }

   
}

module.exports = Parcel; //export


















