console.log(1);
console.log(2);
setTimeout(doSomething(),4000);
console.log(4);

 

function doSomething(){
    console.log(3);
}

//1 bar ashe
setTimeout(()=>{
    console.log('jewel');
},4000);

const setTimeoutId=setTimeout(()=>{
    console.log('jewel');
},4000);

clearTimeout(setTimeoutId);



//set interval
//bar bar ashe gap diye diye
//off korte ....ctrl+c
setInterval(()=>{
    console.log('jewel');
},4000);


let num=0;
setInterval(()=>{
    console.log(num++);
},4000);


//stop using interval ID
//get setInterval ID
const intervalId=setInterval(()=>{
    console.log(num++);
    ++num;
    if(num===10){
        clearInterval(intervalId);
    }
},4000);

clearInterval(intervalId);