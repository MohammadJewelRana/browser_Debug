
console.log(1);
console.log(2);
setTimeout(doSomething(),4000);
console.log(4);

 

function doSomething(){
    console.log(3);
}


setTimeout(()=>{
    console.log('jewel');
},4000);

