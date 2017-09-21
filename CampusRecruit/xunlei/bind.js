var self = null
Function.prototype.bind = function() {
    if (self == null){
        self = this
    }
    var context = [].shift.call(arguments),
        args = [].slice.call(arguments);
    return function() {
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
};