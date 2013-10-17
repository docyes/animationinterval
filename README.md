Anval
==================

setInterval a-la requestAnimationFrame

```js
var animationInterval = new Anval(
   function() {
       console.log('tick');
   },
   1000
);
```

## constructor / initialize
### new Anval(fn, interval, [options])
Creates an internal timer using requestAnimationFrame calling function `fn` every `interval` ms.

If {setInterval: true} is passed as an option will use setInterval over requestAnimationFrame.
