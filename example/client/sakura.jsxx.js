var JSX={};(function(c){function a(b,e){var a=function(){};a.prototype=e.prototype;var c=new a;for(var d in b){b[d].prototype=c}}function ay(c,b){for(var a in b.prototype)if(b.prototype.hasOwnProperty(a))c.prototype[a]=b.prototype[a]}function q(a,b,d){function c(a,b,c){delete a[b];a[b]=c;return c}Object.defineProperty(a,b,{get:function(){return c(a,b,d())},set:function(d){c(a,b,d)},enumerable:true,configurable:true})}var g=Math.imul;if(typeof g==='undefined'){g=function(c,d){var e=c>>>16&65535;var a=c&65535;var f=d>>>16&65535;var b=d&65535;return a*b+(e*b+a*f<<16>>>0)|0}}function av(a,b,c){return a[b]=a[b]+c|0}function aq(a,b,c){return a[b]=a[b]-c|0}function au(a,b,c){return a[b]=g(a[b],c)}function ar(a,b,c){return a[b]=a[b]/c|0}function as(a,b,c){return a[b]=a[b]%c|0}function at(b,c){var a=b[c];b[c]=a+1|0;return a}function ap(b,c){var a=b[c];b[c]=a-1|0;return a}function aw(b,d){var c=b.length;for(var a=0;a<c;++a)d(b[a])}var F=parseInt;var D=parseFloat;function ax(a){return a!==a}var B=isFinite;var y=encodeURIComponent;var u=decodeURIComponent;var a0=encodeURI;var v=decodeURI;var w=Object.prototype.toString;var x=Object.prototype.hasOwnProperty;function d(){}c.require=function(b){var a=o[b];return a!==undefined?a:null};c.profilerIsRunning=function(){return d.getResults!=null};c.getProfileResults=function(){return(d.getResults||function(){return{}})()};c.postProfileResults=function(a,b){if(d.postResults==null)throw new Error('profiler has not been turned on');return d.postResults(a,b)};c.resetProfileResults=function(){if(d.resetResults==null)throw new Error('profiler has not been turned on');return d.resetResults()};c.DEBUG=false;var z=function(){function a(){this.__next=0;this.__loop=null;this.__seed=null;this.__value=undefined;this.__status=0}a.prototype.next=function(b){switch(this.__status){case 0:this.__status=1;this.__seed=b;this.__loop(this.__next);var a=false;if(this.__next!=-1){this.__status=0}else{this.__status=2;a=true}return{value:this.__value,done:a};case 1:throw new Error('Generator is already running');case 2:throw new Error('Generator is already finished');default:throw new Error('Unexpected generator internal state')}};return a}();function A(){};a([A],Object);function r(a,b,c){this.E=0;this.G=0;this.K=0;this.L=0;this.D=[0,0,0,1];this.I=[0,0,0,1];this.C=a;p(this,b,c)};a([r],Object);function l(h,d,g){var a;var b;var c;var e;var f;a=Math.random()-.5;b=Math.random()-.5;c=Math.random()-.5;e=a*a+b*b+c*c;if(e===0){a=e=1;b=c=0}f=Math.sin(g)/Math.sqrt(e);d[0]=a*f;d[1]=b*f;d[2]=c*f;d[3]=Math.cos(g)};function p(a,b,c){if(Math.random()>.5){a.E=Math.random()*b;a.G=-a.C}else{a.E=-a.C;a.G=Math.random()*c}a.K=(Math.random()*1.5+2.5)*a.C/20;a.L=(Math.random()*1.5+.5)*a.C/20;l(a,a.D,Math.random()*3.141592653589793);l(a,a.I,Math.random()*.1)};function E(a,r,m){var d;var e;var f;var g;var b;var h;var i;var c;var n;var o;var q;var k;var j;n=a.E+=a.K;o=a.G+=a.L;if(n>r+(q=a.C)||o>m+q){p(a,r,m)}if(Math.random()>.95){l(a,a.I,Math.random()*.1)}d=(k=a.D)[0];e=k[1];f=k[2];g=k[3];b=(j=a.I)[0];h=j[1];i=j[2];c=j[3];a.D[0]=d*c+g*b+e*i-f*h;a.D[1]=e*c+g*h+f*b-d*i;a.D[2]=f*c+g*i+d*h-e*b;a.D[3]=g*c-d*b-e*h-f*i};function k(c,f){var g=this;var b;var d;var a;var e;this._=0;this.B=0;this.J=null;this.F=null;this.H=null;this.A=[];this._=c.width=400;this.B=c.height=400;e=this.J=c.getContext('2d');this.F=e.createImageData(this._,this.B);this.H=f;b=0;d=0;for(a=0;a<24;++a){this.A[a]=new r(Math.random()*15+5|0,this._|0,this.B|0);if(this.A[a].E>b){b=this.A[a].E}if(this.A[a].G>d){d=this.A[a].G}}for(a=0;a<24;++a){this.A[a].E-=b+50}this.A.sort(function(a,b){return a.C-b.C})};a([k],Object);k.prototype.M=function(){var a;var c;var d;var b;a=this.F.data;for(c=0;c<this.B;c++){for(d=0;d<this._;d++){b=c*this._+d;a[b*4]=0;a[b*4+1]=0;a[b*4+2]=0;a[b*4+3]=255}}};function G(c){var a;var d;var e;var b;a=c.F.data;for(d=0;d<c.B;d++){for(e=0;e<c._;e++){b=d*c._+e;a[b*4]=0;a[b*4+1]=0;a[b*4+2]=0;a[b*4+3]=255}}};function n(o,q,b,c,d,a,p){var i;var g;var k;var l;var e;var n;var f;var h;var m;var j;i=a[3]*b+a[1]*d-a[2]*c;g=a[3]*c+a[2]*b-a[0]*d;k=a[3]*d+a[0]*c-a[1]*b;l=-a[0]*b-a[1]*c-a[2]*d;b=i*a[3]-l*a[0]-g*a[2]+k*a[1];c=g*a[3]-l*a[1]-k*a[0]+i*a[2];d=k*a[3]-l*a[2]-i*a[1]+g*a[0];e=Math.atan2(d,b)/3.141592653589793;if(0<=e&&e<=1){n=Math.acos(c)/3.141592653589793;e=(1-e)*(j=o.H).height|0;n=(1-n)*j.width|0;f=n*j.width+e;if(j.data[f*4+3]>128){h=o.F.data;m=o.H.data;h[p*4]=m[f*4]*q;h[p*4+1]=m[f*4+1]*q;h[p*4+2]=m[f*4+2]*q}}};function I(d,h,g,k,b){var p;var q;var m;var o;var a;var c;var i;var e;var f;var l;var j;p=h-b;q=h+b;m=g-b;o=g+b;for(a=m;a<o;a++){if(a<0){continue}else if(a>=d.B){break}for(c=p;c<q;c++){if(c<0){continue}else if(c>=d._){break}i=a*d._+c;e=(c-h)/b;f=(a-g)/b;l=e*e+f*f;if(l<=1){j=Math.sqrt(1-l);n(d,.4,e,f,-j,k,i);n(d,1,e,f,j,k,i)}}}J(d,h,g,k,b)};function J(h,r,q,a,b){var f;var j;var m;var n;var o;var p;var i;var d;var c;var g;var l;var k;var e;f=r+(b*1.6*(a[0]*a[2]-a[1]*a[3])|0);j=q+(b*1.6*(a[0]*a[3]+a[1]*a[2])|0);m=f-b;n=f+b;o=j-b;p=j+b;i=h.F.data;for(d=o;d<p;d++){if(d<0){continue}else if(d>=h.B){break}for(c=m;c<n;c++){if(c<0){continue}else if(c>=h._){break}g=d*h._+c;l=(c-f)/b;k=(d-j)/b;e=128*(1-(l*l+k*k));if(e>0){i[g*4]+=e;i[g*4+1]+=e;i[g*4+2]+=e}}}};function K(a){var d;var c;var b;G(a);d=a.A.length;for(c=0;c<d;++c){b=a.A[c];E(b,a._|0,a.B|0);I(a,b.E|0,b.G|0,b.D,b.C)}a.J.putImageData(a.F,0,0)};function j(){};a([j],Object);function M(b){var a;a=f._.createElement('img');a.addEventListener('load',function(i){var b;var c;var d;var e;var g;b=f._.createElement('canvas');c=b.getContext('2d');b.width=b.height=256;c.drawImage(a,0,0,b.width,b.height);d=f._.getElementById('world');e=c.getImageData(0,0,b.width,b.height);g=new k(d,e);(function a(b){K(g);h._(a)}(0))});a.src='sakura.png'};j.main=M;function f(){};a([f],Object);function b(){};a([b],Object);function P(){};a([P],b);function Q(){};a([Q],Object);function s(){};a([s],b);function S(){};a([S],Object);function m(){};a([m],s);function U(){};a([U],Object);function V(){};a([V],Object);function W(){};a([W],Object);function X(){};a([X],b);function Y(){};a([Y],Object);function i(){};a([i],Object);function _(){};a([_],i);function $(){};a([$],i);function t(){};a([t],Object);function a1(){};a([a1],Object);function a2(){};a([a2],b);function a3(){};a([a3],b);function a4(){};a([a4],b);function a5(){};a([a5],b);function a6(){};a([a6],b);function a7(){};a([a7],m);function a8(){};a([a8],b);function a9(){};a([a9],b);function aa(){};a([aa],b);function ab(){};a([ab],Object);function ac(){};a([ac],Object);function ad(){};a([ad],Object);function ae(){};a([ae],b);function af(){};a([af],Object);function ag(){};a([ag],Object);function ah(){};a([ah],Object);function ai(){};a([ai],b);function aj(){};a([aj],Object);function ak(){};a([ak],Object);function al(){};a([al],Object);function am(){};a([am],Object);function an(){};a([an],Object);function ao(){};a([ao],Object);function Z(){};a([Z],Object);function T(){};a([T],Object);function R(){};a([R],Object);function O(){};a([O],b);function N(){};a([N],b);function L(){};a([L],b);function h(){};a([h],Object);function H(g){var b;var a;var c;var d;var f;if(g){b=['r','webkitR','mozR','oR','msR'];for(a=0,f=b.length;a<f;++a){c=b[a]+'equestAnimationFrame';if(e.global[c]instanceof Function){return function(a){return e.global[c](a)}}}}d=0;return function(f){var a;var b;var c;a=Date.now();c=16-(a-d);b=0>=c?0:c;d=a+b;return e.global.setTimeout(function(){f(a+b)},b)}};function C(){};a([C],Object);var e=function(){var a=Function('return this')();return{global:a,eval:a.eval,invoke:function(a,b,c){return a[b].apply(a,c)},newFunction:Function}}();q(f,'_',function(){return e.global.document});q(h,'_',function(){return H(true)});var o={'client/sakura.jsxx':{_Main:j}}}(JSX));JSX.runMain = function (sourceFile, args) {var module = JSX.require(sourceFile); if (! module) {throw new ReferenceError("entry point module not found in " + sourceFile); } if (! module._Main) {throw new ReferenceError("entry point _Main not found in " + sourceFile); } if (! module._Main.main) {throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile); } module._Main.main(args); }; this.JSX = JSX;