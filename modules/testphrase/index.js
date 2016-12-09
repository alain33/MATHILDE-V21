function testphrase(phrase) {
path = require('path');fs = require('fs')
list = []
//console.log("phrase à étudié : "+phrase)
//C:/Users/Administrateur/sarah/plugins/modules/mathildedico/memoire
 	  filesnom = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/nom.json' ).replace('\\%CD%', ''),'utf-8') ;
	
	  filesadverbe = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/adverbe.json').replace('\\%CD%', ''),'utf-8') 
        
      filesverbe = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/verbe.json').replace('\\%CD%', ''),'utf-8')
	
	  filesadjectif = fs.readFileSync(path.resolve('%CD%', './plugins/modules/mathildedico/memoire/adjectif.json').replace('\\%CD%', ''),'utf-8')
	
	  filespréposition = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/préposition.json').replace('\\%CD%', ''),'utf-8')
   
	  filesarticle = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/article.json').replace('\\%CD%', ''),'utf-8')  
    
      filespronom = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/pronom.json' ).replace('\\%CD%', ''),'utf-8')

      filesinconnu = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/inconnu.json' ).replace('\\%CD%', ''),'utf-8')

      filesconjonction = fs.readFileSync(path.resolve('%CD%','./plugins/modules/mathildedico/memoire/conjonction.json' ).replace('\\%CD%', ''),'utf-8')

      		  jsonStrnom = JSON.parse(filesnom);
			  jsonStradverbe = JSON.parse(filesadverbe);
			  jsonStrverbe = JSON.parse(filesverbe);
			  jsonStradjectif = JSON.parse(filesadjectif);
			  jsonStrpréposition = JSON.parse(filespréposition);
			  jsonStrarticle = JSON.parse(filesarticle);
          	  jsonStrpronom = JSON.parse(filespronom);
          	  jsonStrinconnu = JSON.parse(filesinconnu);
          	  jsonStrconjonction= JSON.parse(filesconjonction)

	phrase=phrase.trim().split(" ");	//console.log(phrase);	console.log(phrase.length)
	for(i=0;i<phrase.length;i++){//.search(new RegExp("\\b" + phrasetester[i] + "\\b","gi")) >-1)
						 // phrase1=phrase[i];  
					 phrase1=phrase[i].trim()
					//console.log('testttttttttt:+ '+phrase1)
						//  filesadjectif.search(new RegExp("\\b" + queryphraser1 + "\\b","gi")) >-1)
					
						if (filesnom.search(new RegExp("\\b" + phrase1+ "\\b","gi" )) >-1){list.push(phrase1+" nom ");phrase1="1"}
					    if (filesadverbe.search(new RegExp("\\b" + phrase1+ "\\b","gi" ))>-1){list.push(phrase1+" adverbe ");phrase1="1"}
						if (filesverbe.search(new RegExp("\\b" + phrase1+ "\\b","gi" )) >-1){list.push(phrase1+" verbe ");phrase1="1"}
						if (filesadjectif.search(new RegExp("\\b" + phrase1+ "\\b","gi" )) >-1){list.push(phrase1+" adjectif ");phrase1="1"}
						if (filespréposition.search(new RegExp("\\b" + phrase1+ "\\b","gi" )) >-1){list.push(phrase1+" préposition ");phrase1="1"}
						if (filesarticle.search(new RegExp("\\b" + phrase1+ "\\b","gi" )) >-1){list.push(phrase1+" article ");phrase1="1"}
						if (filespronom.search(new RegExp("\\b" + phrase1+ "\\b" ,"gi")) >-1){list.push(phrase1+" pronom ");phrase1="1"}
						if (filesconjonction.search(new RegExp("\\b" + phrase1+ "\\b" ,"gi")) >-1){list.push(phrase1+" conjonction ");phrase1="1"}
						//if (filesinconnu.search(new RegExp("\\b" + phrase1+ "\\b","gi" )) >-1){list.push(phrase1+" inconnu ");phrase1="1"}
if(phrase1!=="1"){list.push(phrase1+" inconnuuuuu ")}
							
						//	console.log("la liste"+list)
	}							
							


list = JSON.stringify(list);
//list=JSON.parse(list)

return list

}

module.exports = testphrase;