
module.exports.routing = function(url){
    $.get(url,function(data){$("#root").html(data);});
}

module.exports.routing2 = function(view){
    console.log(view);
}
