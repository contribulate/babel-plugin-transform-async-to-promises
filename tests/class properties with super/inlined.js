function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}return function(){class Base{constructor(){_defineProperty(this,"a",Promise.resolve(42));}}class Sub extends Base{constructor(...args){super(...args);const _this=this;_defineProperty(this,"f",function(){try{return Promise.resolve(_this.a).then(function(){});}catch(e){return Promise.reject(e);}});}};return new B();}