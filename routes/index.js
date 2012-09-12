
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Node Express Hello World 1' });
};
