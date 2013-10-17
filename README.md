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

## clear()
Stop the current internal timer and any subsequent `fn` calls.

Note that calling `anval.clear()` on a non-started ticker is a no-op returning false.
