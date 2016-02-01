System.register([], function(exports_1) {
    var Module1;
    return {
        setters:[],
        execute: function() {
            Module1 = (function () {
                function Module1() {
                }
                Module1.prototype.foo = function () {
                    console.log('bar');
                };
                return Module1;
            })();
            exports_1("Module1", Module1);
        }
    }
});
