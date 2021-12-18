class Clerk 
{

    //properties
    id;
    firstName;
    lastName


    //one constructor
    constructor(id,fn,ln)
    {
        this.firstName=fn;
        this.lastName=ln;
        this.id=id;
       
    }


    //methods
    getFullName()
    {

        return `${this.firstName} ${this.lastName}`
    }

   
}

module.exports = Clerk; //export


















