var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH) {

  maConfig = config.modules.scribe; util = require('util');

  SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; SCRIBE.activePlugin('memo');
  fs = require('fs'); path = require('path');

  filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/memomemoire/memo.json').replace('\\%CD%', '');
  
phrasememo=JSON.stringify(SARAH.context.scribe.lastReco);phrasememo=JSON.parse(phrasememo)
  //phrasememo=data.phrasememo;
   console.log('phrase recu en mémo : '+phrasememo)

function lecture(filePath){
  filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/memomemoire/memo.json').replace('\\%CD%', '');
    	
      fs.readFile(filePath, function(err, data) { if (err){console.log('rien');ScribeSpeak('pas de mémo');callback();return false}
	       	objet = JSON.parse(data); longueur = objet.memo.length; jsonStr = JSON.stringify(objet)
	       	ScribeSpeak(longueur+' mémo. '+(objet.memo))
	    })//fin read file
}//fin fnct lecture

function ecriture(filePath ,phrasememo){
  filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/memomemoire/memo.json').replace('\\%CD%', '');	

	   fs.readFile(filePath, function(err, data) { 
	     	objet = JSON.parse(data); jsonStr = JSON.stringify(objet)
        objet.memo.push(phrasememo); data1 = JSON.stringify(objet); 
	
        	fs.writeFile(filePath,data1 , function (err) {  console.log("mémo enregistrer " + phrasememo)
              ScribeSpeak('je mémorise '+phrasememo)
              callback(); return false
          })//fin write file               

      })//fin read file
}//fin fnct ecritue

function ask(question, filePath) {
  ScribeAskMe(question, [{'answer':'age' }], function(answer,phrase,match,wholeMatch) {
      
                if (phrase=='lire les mémo') {console.log('onnn lisssssss'); lecture(filePath);callback();return false}
                if (phrase=='écrire un mémo') {console.log('onnn ecoute'); question="j'enregistre";ask(question,filePath);callback();return false}
                if ((phrase=='effacer les mémos')||(phrase=='efface les mémo')) {
                  console.log('on efface tout');
                      fs.writeFile(filePath,'{"memo":[]}' , function (err) {console.log("mémo effacer "); ScribeSpeak('mémo effacer') } )
                  callback();return false
    			     	}//fin if
                else { ecriture(filePath ,phrase) }
  }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 2}
  );

}//fin fnct ask

question="veux tu , lire les mémo, ou, écrire un mémo, ou, effacer les mémo ?"

ask(question,filePath)//c'est partie

}