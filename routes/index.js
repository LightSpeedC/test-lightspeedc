
/*
 * GET home page.
 */

var date1 = DateString(new Date()) + ' (ISO: ' + ISODateString(new Date()) + ')';

exports.date1 = date1;

exports.index = function(req, res){
  res.render('index', {
    title: 'Node Express Hello World 1',
    date1: date1,
    date2: DateString(new Date()) + ' (ISO: ' + ISODateString(new Date()) + ')'
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
