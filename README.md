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
If {setInterval: true} is passed as an option
