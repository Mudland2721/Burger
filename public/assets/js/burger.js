$(document).ready(function () {
  //   console.log("ready!");
  for (var i = 0; i < $(".not-devoured").length; i++) {
    var btn = $(".not-devoured")[i];
    $(btn).on("click", function () {
      console.log("clicked");
      let id = $(this).data("id");
      $.ajax("/api/burger/" + id, {
        type: "PUT",
      }).then(function () {
        location.reload();
      });
    });
  }
});

// $(".create-from").on("submit", function (event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();
//   //would like to know what this part is doing i don't understand it
//     let newBur

// });
// $(".btn").on("click", function () {
//   console.log("clicked");
// });
