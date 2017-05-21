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
      $(".errors").remove();
      $(".poem-list").prepend("<li class=poem-list-item>" + res + "</li>");
    }).fail(function(a,b,c) {
      $("#sidebar").find("p").append(a.responseText)
    })
  });

  $("#poems").on("submit", ".form", function() {
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
      $($poemApplause).closest("article").find("#applause-count").html(res);
    })
  })

});
