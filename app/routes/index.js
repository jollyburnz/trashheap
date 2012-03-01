
/*
 * GET home page.
 */

title='Fellow Trash Collectors'

exports.index = function(req, res){
	
	file_contents = fs.readFileSync('feed.yaml','utf8');
	var content = yaml.eval(file_contents);

		debugger;

	res.render('index', { title: title, posts:content.posts})
};

