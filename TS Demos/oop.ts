export class Student {
    // instance var
    id : number;
    name : string;

    // constructor
    constructor(){
        console.log("student object is created");        
    }

    // instance methods
    setDetails(i:number, n:string):void{
        this.id = i; 
        this.name = n;   
        this.showDetails();    
    }
    showDetails():void{
        console.log(`Student id:${this.id}, Name:${this.name}`);        
    }
}


