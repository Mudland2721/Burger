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

    $("#addBtn").on("click", function (event) {
      // console.log("clicked");
      event.preventDefault();
      let newBurger = {
        name: $("#burg").val().trim(),
      };

      $.ajax({
        type: "post",
        url: "/api/burger",
        dataType: "json",
        data: newBurger,
      }).then(function () {
        location.reload();
      });
    });
  }
});

// console.log(newBurger);
// $.ajax(
//   {
//     accepts: {
//       dataType: `json`,
//     },
//   },
//   "/api/burger",
//   {
//     type: "POST",
//     dataType: `json`,
//     data: newBurger,
//   }
// ).then(function () {
//   location.reload();
// });

// $.post("/api/burger", newBurger).then(function () {
//   location.reload();
// });
