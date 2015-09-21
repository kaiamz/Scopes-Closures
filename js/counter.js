$(document).ready(function() {
  var rowNum = 0;
  //Table

  $("#add_row").click(function(){
    rowNum++;

    function addRowFunction () {
      var counter = 0;
      $("#buttonTable").append("<p></p>" +
      "<p id='tableCounter" + rowNum + "'>0</p>" +
      "<button id='inc_btn" + rowNum + "' type='button' class='btn btn-danger'>Add</button>" +
      "<button id='dec_btn" + rowNum + "' type='button' class='btn btn-danger'>Subtract</button>" +
      "<button id='reset_btn" + rowNum + "' type='button' class='btn btn-danger'>Reset</button>" +
      "<button id='delete" + rowNum + "' type='button' class='btn btn-danger'>Delete</button>"
      );

      // function fancyCounter() {
      //   var counter = 0;
      //   return {
      //     increase: function() {
      //       counter += 1;
      //       return counter;
      //     },
      //     decrease: function() {
      //       counter -= 1;
      //       return counter;
      //     },
      //     reset: function() {
      //       counter = 0;
      //       return counter;
      //     }
      //   }
      // };
      //


      $("#inc_btn" + rowNum).click(function() {
        counter ++;
        $("#tableCounter" + rowNum).html(counter);
      });

      $("#dec_btn" + rowNum).click(function() {
        counter--;
        $("#tableCounter" + rowNum).html(counter);
      });

      $("#reset_btn" + rowNum).click(function() {
        counter = 0;
        $("#tableCounter" + rowNum).html(counter);
      });
    };



  });



});
