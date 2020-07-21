$(document).ready(function () {
  //   console.log("ready!");
  for (var i = 0; i < $(".not-devoured").length; i++) {
    var btn = $(".not-devoured")[i];
    $(btn).on("click", function () {
      console.log("clicked");
      let id = $(this).data("id");
      let eaten = $(this).data("devoured");

      let condition = {
        notEaten: eaten,
      };
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: condition,
      }).then(function () {
        console.log(`changed burger to`, eaten);
        location.reload();
      });
    });
  }
});

$(".create-from").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  //would like to know what this part is doing i dont understand it
  let newBurg = {
    name: $("#burg").val().trim(),
    notEaten: $("[burger_name]:"),
  };
});
