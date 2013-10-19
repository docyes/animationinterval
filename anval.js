var AnimationInterval = function(fn, delay, options) {
    options || (options = {});
    this.setInterval = !!options.setInterval;
    this.timeout = !!options.timeout;
    if (!window.requestAnimationFrame || !window.cancelAnimationFrame || this.setInterval) {
        this.id = window.setInterval(fn, delay);
        return;
    }
    var start = new Date().getTime();
    var loop = function() {
        this.id = window.requestAnimationFrame(loop);
        var current = new Date().getTime(),
            delta = current - start;
        if (delta >= delay) {
            fn.call();
            if (this.timeout) {
                this.clear();
            }
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
