
/*
 * GET home page.
 */

title='Fellow Trash Collectors'

exports.index = function(req, res){
	
	file_contents = fs.readFileSync('feed.yaml','utf8');
	content = yaml.eval(file_contents);
	res.render('index', { title: title, posts:content.posts})
};


exports.rss = function(req, res){
	
	file_contents = fs.readFileSync('feed.yaml','utf8');
	content= yaml.eval(file_contents);
	console.log(content.feed[0]);
	res.render('rss', { title: title,posts:content.posts,feed:content.feed[0]})
};
