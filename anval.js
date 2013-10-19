var Anval = function(fn, interval, options) {
    options || (options = {});
    this.setInterval = !!options.setInterval;
    this.timeout = !!options.timeout;
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
            if (this.timeout) {
                this.clear();
            }
        }
    };
    this.id = window.requestAnimationFrame(loop);
};
Anval.prototype.clear = function() {
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
