ngular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  
  var ctrl = this;
  
  ctrl.add = add;
  ctrl.data = [
    {
      name: "AiA",
      code: "AI101",
      limit: 25000,
      account: "Life Insurance"
    },
    {
      name: "Cargills",
      code: "CF001",
      limit: 30000,
      account: "Food City"
    }
  ]
  
  ////////
  function add(index) {
    window.alert("Added: " + index);
  }
  
});