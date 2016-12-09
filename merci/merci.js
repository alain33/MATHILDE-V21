var ScribeSpeak;
var maConfig;
var SCRIBE;




exports.action = function(data, callback, config, SARAH){

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('merci');

 // CONFIG
  config = config.modules.merci;
  if (!config.name){
    console.log("merci config missing");
    callback({ 'tts': "J'ai besoin de ton nom pour répondre" });
    return;
  }
  
  var name = config.name;
  
  var answer = 'Mais de rien' + name ;
var answer1 = 'ça me fait plaisir' ;
var answer2 = 'Hé ouais, je gère!' ;
var answer3 = 'Tu sais' + name + ', je suis ton plus fidèle serviteur' ;
var answer4 = 'Ouais ouais' + name  + 'mais tabitue pas trop';
var answer5 = 'Ah! Enfin. Jai failli attendre' ;
var answer6 = 'Jai pas trop le choix' ;
var answer7 = 'ca me fait très plaisir' + name ;
var answer8 = 'Sans moi' + name + 'tu serais perdu' ;
var answer9 = 'Dé nada, maintenant je prend une pause cigarette' ;
var answer10 = 'Dé nada, maintenant je prend une pause bibine' ;

  
  var nbr = Math.random();
  var plage= nbr*10;
  var tire = Math.floor(plage)+1;
  
  switch (tire) {
 case 1:
 ScribeSpeak(answer1);callback({'tts' : ""});
 break;
 case 2:
 ScribeSpeak(answer2);callback({'tts' : ""});
 break;
 case 3:
 ScribeSpeak(answer3);callback({'tts' : ""});
 break;
  case 4:
 ScribeSpeak(answer4);callback({'tts' : ""});
 break;
  case 5:
 ScribeSpeak(answer5);callback({'tts' : ""});
 break;
  case 6:
 ScribeSpeak(answer6);callback({'tts' : ""});
 break;
  case 7:
 ScribeSpeak(answer7);callback({'tts' : ""});
 break;
  case 8:
 ScribeSpeak(answer8);callback({'tts' : ""});
 break;
  case 9:
 ScribeSpeak(answer9);callback({'tts' : ""});
 break;
  case 10:
 ScribeSpeak(answer10);callback({'tts' : ""});
 break;
 default: 
 ScribeSpeak(answer);callback({'tts' : ""});
 break;
}
}