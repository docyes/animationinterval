var AnimationInterval = function(fn, interval, options) {
    options || (options = {});
    this.setInterval = !!options.setInterval
    if (!window.requestAnimationFrame || !window.cancelAnimationFrame || this.setInterval) {
        this.id = window.setInterval(fn, interval);
        return;
    }
    var start = new Date().getTime();
    var loop = function() {
        this.id = window.requestAnimationFrame(loop);
        var current = new Date().getTime(),
            delta = current - start;
        if (delta >= interval) {
            fn.call();
            start = new Date().getTime();
        }
    };
    this.id = window.requestAnimationFrame(loop);
};
AnimationInterval.prototype.clear = function() {
    if (this.id) {
        if (window.cancelAnimationFrame && !this.setInterval) {
            window.cancelAnimationFrame(this.id)
        } else {
            window.clearInterval(this.id);
        }
        delete this.id;
        return true;
    }
    return false
};
