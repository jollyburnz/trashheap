
var yaml = require('yamlparser');
var fs = require('fs');

/*
 * GET home page.
 */


exports.index = function(req, res){



	if(req.params.yaml){
		var file = 'yaml/'+req.params.yaml+'.yaml';

		fs.stat(file,function(err,stats){
			if(!err){
				if(stats.isFile()){
					fs.readFile(file,'utf-8',function(err,file_contents){
						if(!err){
							var content = yaml.eval(file_contents); 
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
