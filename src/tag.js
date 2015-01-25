// Generated by CoffeeScript 1.8.0
(function() {
  var DemoController;

  angular.module('myapp', []).controller('DemoController', DemoController = (function() {
    function DemoController($location) {
      this.$location = $location;
      this.field = 'Field';
      this.name = 'john';
    }

    DemoController.prototype.method = function() {
      return 'Method';
    };

    DemoController.prototype.methodWithParam = function(param) {
      return "Param: " + param;
    };

    DemoController.prototype.accessFieldFromMethod = function() {
      return "Path: " + (this.$location.absUrl());
    };

    return DemoController;

  })());

}).call(this);