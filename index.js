function receivesAFunction (cb){
    return (cb())
}
function returnsANamedFunction (){
    const named = function () {
        console.log("hello world")
    }
    return named 
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log('hi world')
    }
}