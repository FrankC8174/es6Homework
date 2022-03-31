/* :::::::::::::::::::::*HomeWork*:::::::::::::::::::::::::::::::::::::::::
Using the tools we have learned, create A object using class. The object should have its own properties and methods. 
*/

// class Chair { 
//     constructor(color, reclineAngle, seatHeight, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable ){
//         this.color = color;
//         this.seatHeight =  seatHeight;
//         this.reclineAngle = reclineAngle;
//         this.backSupport = backSupport;
//         this.headSupport = headSupport;
//         this.padding = padding;
//         this.armRests = armRests;
//         this.seatSize = seatSize;
//         this.isHeightAdjustable = isHeightAdjustable;
//         this.isMovable = isMovable;
//         this.type = "Chair";

//     }
// /* The Methods below define the behavior of the chair. Below you will see the *isHeightAdjustableHeight set to true, allowing for the use of the adjustabHeight function, when we make our "super" class of chair.*/  

//     adjustableHeight(){};
//     adjustableAngle(){};
//     moveChair(){};
// }
// /* Call:below we will instantiate a chair and pass in the properties and it will have evrything listed as properties above*/
// const newChair = new Chair("blue", "25 inch", "20 deg", true, false, "3 inch", true, "16 inch", false, false );
// /* next is our print statement. What I expect to see when I run my program, a new chair stamped out with all of the properties passed in above.*/

// console.log("Chair", newChair);

// // ::::::::::::::::::::::::::::::::: Next Section :::::::::::::::::::::::::::::::::::::::::::::::::::::::;

// /* In remembrance of "Tom" who was the default friend to everyone in Myspace the below code accounts for a few defaults to our chair class. *Dont forget to comment the above code out before you run the code below.*/
class Chair {
    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
        // defaults which can be changed by our next subclass.
        this.color = color;
        this.seatHeight =  seatHeight;
        this.reclineAngle = true;
        this.backSupport = true;
        this.headSupport = false;
        this.padding = "10 inch";
        this.armRests = true;
        this.seatSize = "20 inch";
        this.isHeightAdjustable = false;
        this.isMovable = false;
        this.type = "Chair";

    }
    
    
}
const newChair = new Chair("blue", "25 inch", "20 deg", true, false, "3 inch", true, "16 inch", false, false );
console.log("chair", newChair);



// // ::::::::::::::::::::::::::::: Another SubclassCreation :::::::::::::::::::::::::::::::::::
// // next we will create our subclass chair and name it office chair. we will use extends to inherit from the parent class chair. 

class OfficeChair extends Chair{
     // This was a debug I caught with the blacked out chars below, why are they blacked out?
    constructor(color, reclineAngle, seatHeight, isHeightAdjustable,  ) {
        
        
    //Super: super is used to call the properties passed to its parents.
        super(color, reclineAngle, seatHeight, isHeightAdjustable); //Only 4 properties passed in our constructor
        this.type = "Office Chair";
        this.color = color;
        this.isHeightAdjustable = isHeightAdjustable;
        this.seatHeight = seatHeight;
        this.recliningAngle = true; //error had set to this.reclineAngle
        this.isMovable = true;
    }
    // Functions/methods: now we will add our functions from above, so when we stamp out our office chair
    adjustableHeight(height){
        if(height > this.seatHeight){
            console.log(`Chair height changed to ${height}`);        
        } else {
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
        }
    }
    
    adjustAngle(angle){
        if(angle >= this.recliningAngle){
            console.log(`Chair angle changed to ${angle}`);        
        } else {
            console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
        }
    }
    
    moveChair(x,y){
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
    }
}

// call: stamp out our office chair, with passed in properties at time of call.
const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10,20));

// :::::::::::::::::::::::::::::::::::: Another One :::::::::::::::::::::::::::::::::::::::::



// class CorChair extends Chair{
//     constructor( type, color, armRests, seatHeight, isMovable, backSupport) {
//         super(color, armRests, seatHeight, isMovable, backSupport);
//         this.type = "Cor Chair";
//         this.color = color;
//         this.armrest = true;
//         this.seatHeight = seatHeight;
//         this.isMovable = true;
//         this.backSupport = true;

//     }
//     moveChair(x,y){
//         console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
//     }
// }

// // call: stamp this CorChair

// const newCorChair = new CorChair("Cor Chair", "Orange", true, 25, true, true );

// // Print
// console.log(newCorChair.moveChair(15,25));

