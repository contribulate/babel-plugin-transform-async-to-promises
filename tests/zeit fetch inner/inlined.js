export const retried=function(bail,currentAttempt){try{let data;return Promise.resolve(fetch(url,{...opts,headers,agent})).then(function(res){const _temp3=function(){if(opts.throwOnHTTPError&&(res.status<200||res.status>=300)){const _temp=function(){if(type==='application/json'){return Promise.resolve(res.json()).then(function(_res$json){data=_res$json;});}}();if(_temp&&_temp.then)return _temp.then(function(){});}else{const _temp2=function(){if(res.status===204){// Since 204 means no content we return null
data=null;}else{return Promise.resolve(res.json()).then(function(_res$json2){data=_res$json2;});}}();if(_temp2&&_temp2.then)return _temp2.then(function(){});}}();return _temp3&&_temp3.then?_temp3.then(function(){return data;}):data;});}catch(e){return Promise.reject(e);}};