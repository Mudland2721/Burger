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
  $("#addBtn").on("click", function (event) {
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
});

//need to add delete functionality to the app which will come at a later date
