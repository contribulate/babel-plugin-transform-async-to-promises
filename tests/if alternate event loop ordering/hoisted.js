_async(function(delay,callback){return _invoke(function(){if(!delay){}else{return _awaitIgnored(0);}},function(){return callback();});})