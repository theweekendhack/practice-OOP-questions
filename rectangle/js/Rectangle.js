
//Rectangle Class
class Rectangle 
{


    //properties
    length;
    width;


    // constructor
    constructor(l,w)
    {
        this.length=l;
        this.width = w;
    }


    //methods
    calArea()
    {
     
        return this.length * this.width;
    }

    calPerimeter()
    {
        return 2*(this.length + this.width)
    }

}
module.exports = Rectangle; //export


















