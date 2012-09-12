
/*
 * GET home page.
 */

var time = require('time');

//var date1 = DateString(new Date()) + ' (ISO: ' + ISODateString(new Date()) + ')';
var date1 = new time.Date();
date1.setTimezone('Japan/Tokyo');
date1 = DateString(date1) + ' (ISO: ' + ISODateString(date1) + ')';

exports.date1 = date1;

exports.index = function(req, res){
  //var date2 = DateString(new Date()) + ' (ISO: ' + ISODateString(new Date()) + ')';
  var date2 = new time.Date();
  date2.setTimezone('Japan/Tokyo');
  date2 = DateString(date2) + ' (ISO: ' + ISODateString(date2) + ')';

  res.render('index', {
    title: 'Node Express Hello World 1',
    date1: date1,
    date2: date2
  });
};

// 日付
function DateString(d) {
  function pad(n){return n<10 ? '0'+n : n}
  return d.getFullYear()+'-'
      + pad(d.getMonth()+1)+'-'
      + pad(d.getDate())+' '
      + pad(d.getHours())+':'
      + pad(d.getMinutes())+':'
      + pad(d.getSeconds())
}

// ISO日付
function ISODateString(d) {
  function pad(n){return n<10 ? '0'+n : n}
  return d.getUTCFullYear()+'-'
      + pad(d.getUTCMonth()+1)+'-'
      + pad(d.getUTCDate())+'T'
      + pad(d.getUTCHours())+':'
      + pad(d.getUTCMinutes())+':'
      + pad(d.getUTCSeconds())+'Z'
}
