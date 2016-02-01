System.register(['./module1'], function(exports_1) {
    var module1_1;
    var Module2;
    return {
        setters:[
            function (module1_1_1) {
                module1_1 = module1_1_1;
            }],
        execute: function() {
            Module2 = (function () {
                function Module2() {
                }
                Module2.prototype.bar = function () {
                    var mod1 = new module1_1.Module1();
                    mod1.foo();
                };
                return Module2;
            })();
            exports_1("Module2", Module2);
        }
    }
});
