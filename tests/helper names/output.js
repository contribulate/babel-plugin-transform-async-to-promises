function _async3(f){return function(){for(var args=[],i=0;i<arguments.length;i++){args[i]=arguments[i];}try{return Promise.resolve(f.apply(this,args));}catch(e){return Promise.reject(e);}};}function _await2(value,then,direct){if(direct){return then?then(value):value;}value=Promise.resolve(value);return then?value.then(then):value;}return _async3((_async,_await)=>_await2(_async(0),(_async2)=>_async2&&_await()))