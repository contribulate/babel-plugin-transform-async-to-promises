_async((foo,baz)=>{var result;return _invoke(()=>{if(foo()){function bar(){return 1;}return _call(bar,(_bar)=>{result=_bar;});}else{return _call(baz,(_baz)=>{result=_baz;});}},()=>result);})