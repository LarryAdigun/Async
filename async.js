window.onload = function() {
var http = new XMLHTTPRequest();

http.onreadystatechange = function() {
  console.log(http);
};
//true or fals for async or sync
http.open("Get", "AJAX/tweets.json", true );
http.send();
console.log(http);
}
