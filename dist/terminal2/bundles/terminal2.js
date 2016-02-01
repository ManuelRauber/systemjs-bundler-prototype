System.register("terminal2/module1", [], function(exports_1) {
  var Module1;
  return {
    setters: [],
    execute: function() {
      Module1 = (function() {
        function Module1() {}
        Module1.prototype.foo = function() {
          console.log('bar');
        };
        return Module1;
      })();
      exports_1("Module1", Module1);
    }
  };
});

System.register("terminal2/core", ["./module1"], function(exports_1) {
  var module1_1;
  var Module2;
  return {
    setters: [function(module1_1_1) {
      module1_1 = module1_1_1;
    }],
    execute: function() {
      Module2 = (function() {
        function Module2() {}
        Module2.prototype.bar = function() {
          var mod1 = new module1_1.Module1();
          mod1.foo();
        };
        return Module2;
      })();
      exports_1("Module2", Module2);
    }
  };
});
