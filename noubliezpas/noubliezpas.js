var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.action = function(data, callback, config, SARAH) {



SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('info');
SCRIBE.activePlugin('n oubliez pas les paroles');

phrases=JSON.stringify(SARAH.context.scribe.lastReco)
request = require('request');
cheerio = require('cheerio');




//var réponse="20"
 //    var proc = __nircmd + 'closeprocess chrome.exe'; 
     var proc = 'start chrome --new-window '+'c://indexold.html'; 
  
  //console.log(proc);
 //var child = exec(proc) 



function lecture(reponse){
//console.log("nb point"+reponse)
var musiquefichier = path.resolve('%CD%', './plugins/noubliezpas/memoiremusique/'+reponse+'.json').replace('\\%CD%', '');
    
    fs.readFile(musiquefichier, function(err,data){
        var  objet = JSON.parse(data) ; var jsonStr = JSON.stringify(objet);
        var longueur = objet.nom.length;
//    console.log(objet.nom)
      
        var max=(longueur/3) ; var min=1
                var aleatoire=Math.floor(Math.random() * (max - min +1)) + min
        console.log("aleatoire : "+aleatoire);
//aleatoire=aleatoire/3


        var musiquefile=objet.nom[(aleatoire*3)-3]
        
        var musiquefile = path.resolve('%CD%', './plugins/noubliezpas/memoiremusique/'+musiquefile+".mp3").replace('\\%CD%', '');
        
 

        var tempfin=objet.nom[(aleatoire*3)-2]
        var tempfintemporaire=tempfin.split("")
        console.log(tempfintemporaire)
        
        var tempfin=tempfintemporaire[0]*60*10000
        var tempfin=tempfin+tempfintemporaire[1]*60*1000
        var tempfin=tempfin+tempfintemporaire[2]*10000
        var tempfin=tempfin+tempfintemporaire[3]*1000
        console.log(tempfin)

        var nbmots=objet.nom[(aleatoire*3)-1]
        var nbmots=nbmots.split(" ")
        var nbmots=nbmots.length
        console.log("nb mots : "+nbmots)


        var exec = require('child_process').exec;
        var nircmd = path.resolve('%CD%','./plugins/infomathilde/nircmd/nircmd.exe').replace('\\%CD%', '');//var process = './plugins/volume/bin/nircmdc.exe';
        var process=nircmd+' mutesysvolume 1 default_record';

                      




console.log("la réponse : "+objet.nom[(aleatoire*3)-1])
reponsefinal=objet.nom[(aleatoire*3)-1]//.split(" ")

//reponsefinal=JSON.stringify(objet.nom[(aleatoire*3)-1])
                      ScribeSpeak('il y a '+nbmots+" mots à trouver : c'est partis pour "+ objet.nom[(aleatoire*3)-3], function(){
                                                                                                                        var child2 = exec(process);
                                                                                                                        console.log("micro off");
                                                                                                                        SARAH.play(musiquefile);

                                 
                      

                                                                          setTimeout(function(){
                                                                            SARAH.pause(musiquefile)

                                                                            console.log("finnnnnnn"+musiquefile+tempfin);
                                                            
                                                                            var process=nircmd+' mutesysvolume 0 default_record';
                                                                            //var child2 = exec(process)
                                                                            console.log("micro on")
                                                                            question="la réponse :    ";nbquestion=2
                                                                            askpoint(question,nbquestion,reponsefinal)

                                                                            //)//fin fnct
                                                                          }, tempfin);

                   })//fin speak
                                                                              

    })
   //SARAH.pause 
callback({'tts': ""})
return false
}


function askpoint(question,nbquestion,reponsefinal) {
 ScribeAskMe(question, [
    {'answer':'reponse' }
    ], function(answer,reponse,match,wholeMatch) {
      
          if ( (reponse!=='undefined')  ){
                          if(reponse.search("arrête le jeu")>-1){ScribeSpeak("le jeux est fini");callback({'tts': ""});return false}  
                            if (nbquestion==1){
                              
                               reponse=reponse.replace(new RegExp('[^0-9]', 'ig'),"")
                          
                                      if( (reponse==15)||(reponse==30)||(reponse==50) ){ lecture(reponse,nbquestion) }//fin if 20 40 100
                            
                                      else {ScribeSpeak("le jeux est fini");callback({'tts': ""});return false}
                                      return false

                            }//fin if q==1

                            if(nbquestion==2){
                                
                                 reponsefinal1=reponsefinal.split(" ")
                                 reponse1=reponse.split(" ")
                                console.log('notre reponse '+reponse1);
                                console.log("reponse   attendu "+reponsefinal)
                                console.log(reponse1.length+" "+reponsefinal.length)
                                
                                if(reponse1.length==reponsefinal1.length){
                                
                                  //if(reponse.search(reponsefinal)>-1){
                                 // if(reponse1.indexOf(reponsefinal)>1){
                                  question="tu valide ?";nbquestion=3;reponsedefinitive=reponse
askpoint(question,nbquestion,reponsefinal)
                                  //ScribeSpeak("gagné");
                                  //return false
                                 // }
                                  //else{askpoint(question,nbquestion,reponsefinal);return false}
                                  return false
                                }
                                else{
                                  ScribeSpeak("il faut : "+reponsefinal1.length+" mots et tu m'as donner : "+reponse1.length+" mots");
                                  askpoint(question,nbquestion,reponsefinal);return false
                                }
                                                                    
                            }//fin if q==2
                            console.log("eeeeeeee"+nbquestion)
if ( (nbquestion==3)&&((reponse.search("valide")>-1)||(reponse.search('oui')>-1)) ){
 console.log("rrrrrrrrrrrrrrrrrrrrrrr"+reponsedefinitive+"rrrrrrrrr"+reponsefinal)
    if(reponsefinal.search(reponsedefinitive)>-1){
    ScribeSpeak("bonne réponse");
     question="à combiens de points ?"
nbquestion=1
reponsefinal=""
askpoint(question,nbquestion,reponsefinal)

    return false
    }
else {ScribeSpeak("perdu");return false}
}

if ( (nbquestion==3)&&(reponse.search("valide")<0) ){nbquestion=2 ; question="la réponse";askpoint(question,nbquestion,reponsefinal);return false}      
          else {askpoint(question,nbquestion,reponsefinal);return  false}
          return false
          }
      
      
    }, {}
  );
}//fin fnct ask


//c'est parti
var question="à combiens de points ? 15 : 30 : 50 "
var nbquestion=1
var reponsefinal=""
askpoint(question,nbquestion,reponsefinal)





}