// simple for 
for (let i =1; i<=5;i++){
    console.log(i);    
}

// for loop is applied on data received from server - arrays
const data : number[]= [11,12,13,14,15];
for (let i=0; i< data.length; i++){
    console.log(data[i]);    
}

// for-of - used for accessing the elements directly without the index
for(let num of data){
    console.log(num);    
}


