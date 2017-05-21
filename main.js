$(document).ready(function(){
  $("#image-url").on("keyup", function(){
    var url = this.value;
    $(".meme-img").attr("src", url);
  });

  $("#top").on("keyup", function(){
    var value= this.value;
    $(".top-caption").text(value);
  });

  $("#bottom").on("keyup", function(){
    var value= this.value;
    $(".bottom-caption").text(value);
  });

  $.ajax({
    method: "GET",
    url: "https://api.imgflip.com/get_memes"
  }).done(function(response){
    
  })
})