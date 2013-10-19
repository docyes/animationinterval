Animation Interval
==================

setInterval/setTimeout a-la requestAnimationFrame

```js
var animationInterval = new AnimationInterval(
   function() {
       console.log('tick');
   },
   1000
);
```

## constructor / initialize
### new AnimationInterval(fn, delay, [options])
Calls a function or executes a code snippet after a specified delay. Creates an internal timer using requestAnimationFrame calling function `fn` every `delay` ms.

If {setInterval: true} is passed as an option will use setInterval over requestAnimationFrame.

If {timeout: true} is passed as an option will only call function `fn` once after the `delay` ms has ellapsed.

## clear()
Stop the current internal timer and any subsequent `fn` calls.

Note that calling `AnimationInterval.clear()` on a non-started timer is a no-op returning false.
