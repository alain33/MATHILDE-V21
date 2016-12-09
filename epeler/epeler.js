var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;






exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('épeler');

epeler=JSON.stringify(SARAH.context.scribe.lastReco);epeler=JSON.parse(epeler)
//epeler=data.epeler
console.log("recu de epeler : "+epeler)
epeler=epeler.split(" ")
epelerlenght=epeler.length
console.log(epeler+epelerlenght)
console.log(epeler[epelerlenght-1])
derniermot=epeler[epelerlenght-1]
derniermot1=derniermot.split("")
console.log(derniermot1)

ScribeSpeak(derniermot+" en "+derniermot.length+" lettres ")
//,function(){
//for(i=0;i<derniermot1.length;i++){console.log(derniermot1[i])
//ScribeSpeak(derniermot1[i])
//}  
//})

i=0 
eppelation=function(derniermot1,i){console.log(derniermot1[i])
	ScribeSpeak(derniermot1[i],function(){
		setTimeout(function() {
			i++;
			if(i==derniermot1.length){callback({'tts': ""});return false}else(eppelation(derniermot1,i))
		},250)
	})
}//fin fnct


eppelation(derniermot1,i)

}