
var yaml = require('yaml');
var fs = require('fs');

/*
 * GET home page.
 */

title='Fellow Trash Collectors'

exports.index = function(req, res){

	var file = 'yaml/'+res.params[0]'.yaml';

	fs.fileStat(file,function(){

	});

	var file_contents = fs.readFileSync(,'utf8');
	var content = yaml.eval(file_contents);
	
	res.render('index',{content:content});
};
