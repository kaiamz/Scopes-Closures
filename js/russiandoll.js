$(document).ready(function(){
  var rosa = function() {
    var name = 'Rosa';
    var dress_color = 'red';
    var inner_doll = null;
  };

  var blanco = function() {
    var name = "Blanco";
    var dress_color = "white";
    var inner_doll = rosa;
  };

  var verde = function() {
    var name = "Verde";
    var dress_color = "green";
    var inner_doll = blanco;
  };

  var amarillo = function() {
    var name = "Amarillo";
    var dress_color = "yellow";
    var inner_doll = verde;
  };

  $("#rd1").click(function() {
    var azul = function() {
      var name = "Azul";
      var dress_color = "blue";
      var inner_doll = amarillo;
      alert(name);
    };

  });

});
