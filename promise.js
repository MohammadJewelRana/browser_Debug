

const getData=new Promise((resolve,reject)=>{
    // resolve(466356423);
    reject('no data');
})

console.log(getData);

getData
.then(data=>console.log(data))
.catch(err=>console.error('error ',err))














