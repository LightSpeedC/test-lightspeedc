
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

app.configure(function (){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function (){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function (){
  console.log("Express server listening on port " + app.get('port'));
});

var f = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<!DOCTYPE html>\n');
  res.write('<html lang="ja">\n');
//res.write('<body onload="onload2()">\n');
  res.write('<body>\n');

  res.write('<a href="/a" id="link1">/a</a><br/>\n');
  res.write('<a href="/b" id="link2">/b</a><br/>\n');
  res.write('<a href="/c" id="link3">/c</a><br/>\n');

  res.write('<a href="/a" onclick="history.pushState(null,\'a\',\'/a\'); return false">/a</a><br/>\n');
  res.write('<a href="/b" onclick="history.pushState(null,\'b\',\'/b\'); return false">/b</a><br/>\n');
  res.write('<a href="/c" onclick="history.pushState(null,\'c\',\'/c\'); return false">/c</a><br/>\n');

  res.write('<input type="button" value="/a" onclick="history.pushState(null,\'a\',\'/a\')"><br/>\n');
  res.write('<input type="button" value="/b" onclick="history.pushState(null,\'b\',\'/b\')"><br/>\n');
  res.write('<input type="button" value="/c" onclick="history.pushState(null,\'c\',\'/c\')"><br/>\n');

  res.write('<script>\n');
//res.write('(function () {\n');
  res.write('  function setURL1() {\n');
  res.write('    history.pushState(null, "a", "/a");\n');
  res.write('    return false; }\n');
  res.write('  function setURL2() {\n');
  res.write('    history.pushState(null, "b", "/b");\n');
  res.write('    return false; }\n');
  res.write('  function setURL3() {\n');
  res.write('    history.pushState(null, "c", "/c");\n');
  res.write('    return false; }\n');
  res.write('  function onload1() {\n');
  res.write('  var e1 = window.document.getElementByID("link1");\n');
  res.write('  e1.addEventListener("click", setURL1, false);\n');
  res.write('  var e2 = window.document.getElementByID("link2");\n');
  res.write('  e2.addEventListener("click", setURL2, false);\n');
  res.write('  var e3 = window.document.getElementByID("link3");\n');
  res.write('  e3.addEventListener("click", setURL3, false);\n');
  res.write('  console.log("onload1");\n');
  res.write('  window.alert("onload1");\n');
  res.write('  }\n');
  res.write('window.onload = onload1;\n');
  res.write('document.write("onload0 '+req.url+'");\n');
//res.write('window.alert("onload0");\n');
//res.write('})();\n');
  res.write('</script>\n');

  res.write('</body>\n');
  res.write('</html>\n');
  res.end();
};

//window.addEventListener("load", function(){
//  document.getElementById("block").addEventListener("click", function(){
//    document.getElementById("result").innerHTML += "マウスのボタンがクリックされました<br>";
//  }, true);
//}, true);

app.get('/a', f);
app.get('/b', f);
