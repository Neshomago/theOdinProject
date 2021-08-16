const removeFromArray = function(arr, item) {
    let remove = arr.indexOf(item);
    if (remove > -1){
        arr.splice(remove, 1);
    }
    return arr;
};

module.exports = removeFromArray;
