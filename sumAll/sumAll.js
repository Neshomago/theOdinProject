const sumAll = function(first, second) {
    let fa=typeof first;
    let fb=typeof second;
    let sum=0;
    let a = Math.min(first, second);
    let b = Math.max(second, first);
    if(first < 0 || second < 0 || fa===String || fb === String || fa===Object || fb===Object){
        let e='ERROR';
        return e;
    } else{
        for (let i=a;i<=b;i++){
            sum += i;
        }
        return sum;
    }
};

module.exports = sumAll;
