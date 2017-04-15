$(document).ready(function(){
  $("#image-url").on("keyup", function(){
    var $value = $("#image-url").val();
    $(".meme-img").attr("src", $value);
  })
})