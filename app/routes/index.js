
var yaml = require('js-yaml');
var fs = require('fs');

/*
 * GET home page.
 */

exports.index = function(req, res){

var merge = function(obj_1,obj_2){
	for(var key in obj_2){
		obj_1[key] = obj_2[key];
	}
		return obj_1;
};

	var content = {};
		content.title = 'H.art';



	if(req.params.yaml){
		var file = 'yaml/'+req.params.yaml+'.yaml';

		fs.stat(file,function(err,stats){
			if(!err){
				if(stats.isFile()){
					fs.readFile(file,'utf-8',function(err,file_contents){
						if(!err){
							content = merge(content,yaml.load(file_contents)); 
							res.render('index',{"content":content});	
						}else{
							res.render('index',{"content":{}});
							console.log(err);
						}
					});
				}else{
					res.render('index',{"content":{}});
				}
			}else{	
			res.render('index',{"content":{}});
			console.log(err);
			}
		});
	}else{
	res.render('index',{"content":{}});
	}
};
