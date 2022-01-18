var p = new Promise(function() {
    return "OK";
    });
    var p2 = p.then(function(data) {
    return data;
    });
    console.log(p2);