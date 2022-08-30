function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return callback;
    function callback() {

    }
}
function returnsAnAnonymousFunction() {
    return function() {
        
    }
}

