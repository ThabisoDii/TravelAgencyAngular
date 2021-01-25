export class Flight { 
    //field 
    private departure_airport :string;
    private arrival_airport :string;
    private departure_date:Date;
    private arrival_date:Date; 
  
    //constructor 
    constructor(departure_airport:string,arrival_airport:string,departure_date:Date,arrival_date:Date) { 
       this.departure_airport = departure_airport 
       this.arrival_airport = arrival_airport 
       this.departure_date = departure_date
       this.arrival_date = arrival_date;
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.arrival_date) 
    } 
 }