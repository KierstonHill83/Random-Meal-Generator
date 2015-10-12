// Recipe data from recipepuppy
function reciepePuppyService(ingredients, query) {
  var url = 'http://www.recipepuppy.com/api/?i='+ingredients+'&q='+query;
  http.get(url, function(res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      var output = JSON.parse(body);
      console.log("got a response: ", output.results[2]);
    });
  }).on('error', function(e) {
    console.log('Got an error:', e);
  });
}

// Recipe data from food2fork
// function foodForkService(query) {
//  var url = 'http://food2fork.com/api/search?key='+key+'&q='+query;
//  http.get(url, function(res) {
//    var body = "";
//    res.on('data', function(chunk) {
//      body += chunk;
//    });
//    res.on('end', function() {
//      var output = JSON.parse(body);
//      console.log("got a response: ", output);
//    });
//  }).on('error', function(e) {
//    console.log('Got an error:', e);
//  });
// }