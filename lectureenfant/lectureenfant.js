var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH){
  
  if (data.item != null) {

      fs = require('fs');exec = require('child_process').exec; path = require('path');
      filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/lectureenfantmemoire/memoire.json').replace('\\%CD%', '');
      maConfig = config.modules.scribe; util = require('util');
      SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; SCRIBE.activePlugin('lecture enfant');

      lecture=fs.readFileSync(filePath)
	     	objet = JSON.parse(lecture); jsonStr = JSON.stringify(objet)
        x=objet.phrase[0]; y=JSON.stringify(x)
        x=x.toLowerCase();console.log(x)
            ask(x)

function ask(x) {
    ScribeAskMe('répète '+x, [
        {'answer':'age' }
        ], function(answer,phrase,match,wholeMatch) {
                 phrase=phrase.toLowerCase();
                    if (phrase!==undefined){ ontest(phrase,x) }
       }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 0}
    );
}//fin fnct ask

function ontest(phrase,x){

  match11=(x.search(new RegExp("\\b" + phrase + "\\b","gi")))

        if (match11==-1){ask(x);callback();return false}
              //on test mots/mots
              b=(phrase.split(' '))
              l=b.length
              c=(x.split(' '))
              l1=c.length
              suite=''
                    
                    for (i=0 ; i<l ; i++){}

                    for(i=l; i<l1;i++){console.log(c[i]);suite=suite+' '+c[i]}

              suite = suite.trim(); 
              x=suite
                    
                    if (suite==''){callback({'tts' : " terminé"});callback();return false}
        ask(x)
}//fin fnt ontest

}//fin if

}