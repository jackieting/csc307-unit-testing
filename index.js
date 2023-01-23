function sum(a, b) {
    if ((typeof(a) == 'number' && typeof(b) == 'number'))
        return a + b;
    else {
        throw new TypeError('a and/or b is not a number');
    }
}

function div (a, b){
    if (typeof(a) == 'number' && typeof(b) == 'number')
        return a / b;
    else {
        throw new TypeError('a and/or b is not a number');
    }
}

function containsNumbers(text){
    if (typeof(text) == 'string'){
        for (let i = 0; i < text.length; i++) {
            if (!isNaN(text.charAt(i)))
                return true;
        }
        return false;
    } else {
        throw new TypeError('text is not a string');
    }
}

exports.sum = sum;
exports.div = div;
exports.containsNumbers = containsNumbers;