_async(foo=>{var values=[];return _continue(_forIn(foo,key=>_invokeIgnored(()=>{if({}.hasOwnProperty.call(foo,key)){const _push=values.push;return _await(foo[key](),(_foo$key)=>{_push.call(values,_foo$key);});}})),()=>values.sort());})