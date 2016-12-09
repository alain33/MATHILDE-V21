var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;




exports.action = function(data, callback, config, SARAH) {

SCRIBE = SARAH.context.scribe;  ScribeAskMe = SARAH.ScribeAskMe;ScribeSpeak = SARAH.ScribeSpeak;SCRIBE.activePlugin('cyrano');

data1='{"cyrano":[]}'; fs = require('fs');

//nomchercher=data.chercher;
nomchercher=JSON.stringify(SARAH.context.scribe.lastReco);nomchercher=JSON.parse(nomchercher)
 console.log('recus de cortana : *'+nomchercher+'*')
try{	
rgxp = /synonyme de (.+)/i; nomchercher = nomchercher.match(rgxp)[1].trim();//console.log(nomchercher44+'rrrrrrrrrrr')
}
catch(err){
rgxp = /synonymes de (.+)/i; nomchercher = nomchercher.match(rgxp)[1].trim();//console.log(nomchercher44+'rrrrrrrrrrr')
}
//nomchercher1=""
//if (nomchercher.search("synonymes de") >-1){
 // query22 = nomchercher.search("synonymes de");//console.log('query22'+query22);
 // query23 = nomchercher.length;//console.log('query23'+query23);
  //  for (i = (query22+12); i < query23 ;i++){nomchercher1=nomchercher1+(nomchercher[i])}
     // nomchercher=nomchercher1.trim()
console.log('nom envoyé à module : *'+nomchercher+'*')
      //if (debug=="on"){speaking="mots clés trouvé synomyme"}else{speaking=""}
       //ScribeSpeak(speaking,function(){console.log('************'+reponse)
         // SARAH.run('cyrano', { 'chercher' : reponse});//callback({'tts' : " "});
        //})
     //callback({'tts': ""})
//return false
 // } 
 //nomchercher="hier"
synonyme = require('C:/Users/Administrateur/sarah/plugins/modules/synonyme')

  synonyme(nomchercher,function(callback1){
  	console.log("réponse : "+callback1)
ScribeSpeak(callback1,true);return false
  })
  callback({'tts' : ""})
return false;

}