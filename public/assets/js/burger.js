$(function () {
  $(".not-devoured").on("click", function (event) {
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
});

$(".create-from").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

    let newBurg = {
        name: $("#burg").val().trim(),
        notEaten: $("[burger_name]:")
    }

});
