//            min = min || 1000
function rand(min = 1000, max = 3000) {return Math.floor(Math.random() * (max - min) + min)}

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// função de callback
f1(function(){ // callback hell
    f2(function(){
        f3(function(){
            console.log('Olá, mundo!!');
        })
    })
})