_async((foo,bar,baz)=>{const _foo=foo();return _await(_foo?bar():baz(),(result)=>result||result,_foo);})