
// window.onload = function() {
// var http = new XMLHttpRequest();
//
// http.onreadystatechange = function() {
//   //spit out the status at 4 which is the data
//   if(http.readyState == 4 && http.status == 200) {
//     //console.log(JSON.parse(http.response));
//   }
// };
// //true or false for async or sync
// http.open("GET", "data/tweets.json", true );
// //Go and grab data
// http.send();
//
// //Jquery Method For getting GET request
// $.get("data/tweets.json", function(data){
//   console.log(data)
// });
// console.log("test")
// };

//AJAX method for Get request 
window.onload =  function() {
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: function(data){
      console.log(data);

      $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: function(data){
          console.log(data);
          $.ajax({
            type: "GET",
            url: "data/video.json",
            success: function(data){
              console.log(data)
            },
            error:function(jqXHR, textStatus, error){
              console.log(error);
            }
          });
        },
        error:function(jqXHR, textStatus, error){
          console.log(error);
        }
      });
    },
    error:function(jqXHR, textStatus, error){
      console.log(error);
    }
  });
};
