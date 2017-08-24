function ordernarNome(a) {
    var result = a.slice(0);
    result.sort(function(x, y){
        return x.name.localCompare(y.name);
    });
    return result;
}

ordernarNome(5);