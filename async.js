
// window.onload = function() {
// var http = new XMLHttpRequest();
//
// http.onreadystatechange = function() {
//   //spit out the status at 4 which is the data
//log the data to the console
//   if(http.readyState == 4 && http.status == 200) {
//     //console.log(JSON.parse(http.response));
//   }
// };
// //true or false for async or sync
// http.open("GET", "data/tweets.json", true );
// //Go and grab data
// http.send();
//
// //Jquery Method
// $.get("data/tweets.json", function(data){
//   console.log(data)
// });
// console.log("test")
// };

//Ajax Method-1
window.onload =  function() {
function handleError(jqXHR, textStatus, error){
  console.log(error);
}
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: cbTweets,
    error:handleError
  });
  function cbTweets (data){
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: cbFriends,
      error:handleError
    });
  }

    function cbFriends (data){
      console.log(data);

      $.ajax({
        type: "GET",
        url: "data/video.json",
        success:function cbVideo (data){
          console.log(data)
        error:handleError
      });
      }
};

//Ajax Method-2
window.onload = function() {

$.get("data/tweets.json").then(function{
  console.log(tweets);
  return $.get("data/friends.json").then(function{
    console.log(friends);
    return $.get("data/video.json").then(function{
      console.log(video);


})











}
