
/*
 * GET home page.
 */

title='helloCanvas'

exports.index = function(req, res){
	
	file_contents = fs.readFileSync('posts.yaml','utf8');
	posts= yaml.eval(file_contents);
	console.log(posts);
	res.render('index', { title: title,posts:posts})
};
