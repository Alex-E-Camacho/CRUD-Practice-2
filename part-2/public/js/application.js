$(document).ready(function() {
  $("#new-poem-form").on("submit", function() {
    event.preventDefault();
    var $url    = $(this).attr("action");
    var $method = $(this).attr("method");
    var $data   = $(this).serialize();

    $.ajax({
      url: $url,
      method: $method,
      data: $data,
    }).done(function(res) {
      $("#new-poem-form")[0].reset();
      $(".poem-list").prepend("<li class=poem-list-item>" + res + "</li>");
    })
  });

  $(".form").on("submit", function() {
    event.preventDefault();
    var $url = $(this).attr("action");
    var $poemApplause = $(this);
    // var $method = $(this).attr("method");
    // var $data = $(this).serialize();

    $.ajax({
      url: $url,
      method: "put",
      // data: $data,
    }).done(function(res) {
      console.log(res);
      $($poemApplause).closest("article").find("#applause-count").html(res);
    })
  })

});
