
//finally execute all time
//manually throw error in catch error
const age=40;
try{
    console.log('JEwel');

    if(isNaN(age)){
        throw "please enter a number"; //throw pass erro in catch
    }
    else if(age<18){
        throw "baccha not allowed";
    }


}catch(e){
    console.log(e);
}
finally{
    console.log('finally');
}


