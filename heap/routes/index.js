
/*
 * GET home page.
 */

title='helloCanvas'

exports.index = function(req, res){
	
	file_contents = fs.readFileSync('posts.yaml','utf8');
	posts= yaml.eval(file_contents);
	res.render('index', { title: title,posts:posts})
};


exports.rss = function(req, res){
	
	file_contents = fs.readFileSync('posts.yaml','utf8');
	posts= yaml.eval(file_contents);
	res.render('rss', { title: title,posts:posts})
};
