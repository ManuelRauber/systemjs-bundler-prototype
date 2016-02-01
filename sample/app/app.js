System.register(['terminal2/core'], function(exports_1) {
    var core_1;
    var mod;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            mod = new core_1.Module2();
            mod.bar();
        }
    }
});
