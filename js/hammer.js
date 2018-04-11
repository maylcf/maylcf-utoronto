$(document).ready (function () {
  var card = document.getElementById("card");
  var text = $("#card-text");
  var mc = new Hammer(card);

  mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

  Hammer(card).on("panright", function() {
      document.getElementById("card").classList.remove("card-front");
      document.getElementById("card").classList.add("card-back");
      text.html("panright");
  });

  Hammer(card).on("panleft", function() {
      document.getElementById("card").classList.remove("card-back");
      document.getElementById("card").classList.add("card-front");
      text.html("panleft");   
  });


});
