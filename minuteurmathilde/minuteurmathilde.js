var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;



exports.action = function(data, callback, config, SARAH){
reponse1=""
reponse=""
SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('minuteur');

// on récupére la phrase
reponse1=JSON.stringify(SARAH.context.scribe.lastReco);reponse1=JSON.parse(reponse1)
console.log('la reponse 1: '+reponse1)
rgxp = /minuteur (.+)/i; reponse1 = reponse1.match(rgxp);
 console.log('la reponse 1: '+reponse1)
 reponse1=reponse1[1]
//reponse1 = data.reponse
//reponse1=" "+reponse1
console.log('la reponse 1: '+reponse1)

reponse=reponse1.replace(new RegExp(' une ', 'ig')," 01 ")//protection une par 01
reponse=reponse.replace(new RegExp(' trente ', 'ig')," 30 ")//protection une par 01

reponse=reponse.replace(new RegExp(' 2 ', 'ig')," 02 ")
reponse=reponse.replace(new RegExp(' 3 ', 'ig')," 03 ")
reponse=reponse.replace(new RegExp(' 4 ', 'ig')," 04 ")
reponse=reponse.replace(new RegExp(' 5 ', 'ig')," 05 ")
reponse=reponse.replace(new RegExp(' 6 ', 'ig')," 06 ")
reponse=reponse.replace(new RegExp(' 7 ', 'ig')," 07 ")
reponse=reponse.replace(new RegExp(' 8 ', 'ig')," 08 ")
reponse=reponse.replace(new RegExp(' 9 ', 'ig')," 09 ")










reponse1=reponse
console.log('la reponse 1: '+reponse)
//on enleve les mots on garde les chiffres
reponse=reponse.replace(new RegExp('[^0-9]', 'ig'),"")
console.log('la reponse : '+reponse)
 if(reponse==""){

            try{
            files = fs.readdirSync(path.resolve('%CD%', './plugins/minuteurmathilde/memoire').replace('\\%CD%', ''),"utf8")
            file=files
            files = JSON.stringify(files)
            console.log(files)


for (count=0;count<file.length;count++){
file1=file[count];console.log("le fileeeeeeeeee"+file1)
            files=file1.replace(new RegExp('.json', 'ig'),"")

                        date = new Date();
                        heures=date.getHours()*60*60000
                        minutes=date.getMinutes()*60000
                        secondes=date.getSeconds()*1000
                        timemaintenant=heures+minutes+secondes
                        
                        
lecture = fs.readFileSync(path.resolve('%CD%', './plugins/minuteurmathilde/memoire/'+file1).replace('\\%CD%', ''),'utf-8')
console.log("eeeeeeeeeeeeee"+JSON.stringify(lecture)[0])
console.log("ffffffffffffff"+JSON.parse(lecture)[3])

console.log("le temps de fin"+lecture+" le temps de maintenant "+timemaintenant)
 tempsfin=(JSON.parse(lecture)[3]-timemaintenant)/60000    ;console.log("il reste"+tempsfin)       
   //tempsfin=""
   console.log(Math.floor(((tempsfin-Math.floor(tempsfin))*60))+"secondes")
            ScribeSpeak(
                "minuteur "+files+" il reste "+Math.floor(tempsfin)+ "minutes" + Math.floor(((tempsfin-Math.floor(tempsfin))*60)) + "secondes"
                )
        }//fin if
            }
            catch(err){return callback({'tts':"Désolé je n'ai pas compris"})};
callback({'tts': ""});
       return false
}

console.log("length"+reponse.length)

if(reponse.length==1){
	
    if(reponse1.search("minute")>-1){tempsreveil=reponse*60000// que minute//8minute
    tempsname=reponse+" minute "
    }
    if(reponse1.search("minutes")>-1){tempsreveil=reponse*60000// que minute//8minute
    tempsname=reponse+" minute "
    }
}

if(reponse.length==1){
	
    if(reponse1.search("seconde")>-1){tempsreveil=reponse*1000// que minute//8minute
    tempsname=reponse+" seconde "
    }
if(reponse1.search("secondes")>-1){tempsreveil=reponse*1000// que minute//8minute
    tempsname=reponse+" secondes "
    }
}

if(reponse.length==2){
	if(reponse1.search("minute")>-1){tempsreveil=reponse*60000//que minute//18minutes
    tempsname=reponse+" minute "
    }
    if(reponse1.search("minutes")>-1){tempsreveil=reponse*60000//que minute//18minutes
    tempsname=reponse+" minutes "
    }
}

if(reponse.length==2){
	if(reponse1.search("seconde")>-1){tempsreveil=reponse*1000//que minute//18minutes
    tempsname=reponse+" seconde "
    }
    if(reponse1.search("secondes")>-1){tempsreveil=reponse*1000//que minute//18minutes
    tempsname=reponse+" secondes "
    }
}

 if(reponse.length==3){
 	temp=reponse[0]*60000;
    tempsreveil=temp;//console.log(temp)
    temp=reponse-reponse[0]*100;//console.log(temp)
    temp=temp*1000;console.log(temp)
    tempsreveil=tempsreveil+temp
    tempsname=reponse[0]+" minute "+reponse[1]+""+reponse[2]+" secondes"
 } // 1 minute + 2 secondes//1h18
 
 if(reponse.length==4){
 	temp=reponse[0]*600000+reponse[1]*60000
    tempsreveil=temp;//console.log(temp)
    
    temp=reponse[2]*10000+reponse[3]*1000;//console.log(temp)
    //temp1=reponse[1]*100;//console.log('rr'+temp1)
    //temp=temp-temp1;//console.log('r'+temp)
    //temp=temp*60000;//console.log(temp)
    tempsname=reponse[0]+""+reponse[1]+" minutes "+reponse[2]+""+reponse[3]+" secondes"
    tempsreveil=tempsreveil+temp
  }// 2 heure + 2 minutes  



//tempsname = " "



console.log(tempsreveil)
console.log(tempsname)


date = new Date();
heures=date.getHours()*60*60000
minutes=date.getMinutes()*60000
secondes=date.getSeconds()*1000


timedepart=heures+minutes+secondes
console.log(timedepart)
timefin=timedepart+tempsreveil

path = require('path');
filePath = path.resolve('%CD%', './plugins/minuteurmathilde/memoire').replace('\\%CD%', '');
//{"cyrano":[""]}
//objet = "{" + tempsname + " : " + tempsreveil + " : " + timedepart + " : " + timefin + "}";
 objet=[]
 objet.push(tempsname);
 objet.push(tempsreveil)
    objet.push(timedepart)
       objet.push(timefin)  
       console.log('rrrrrrrrrrrrrrrrrrrrrr'+objet[0])

  new_jsonStr = JSON.stringify(objet);
//filePath=
              fs.writeFile(filePath+'/'+reponse1+'.json',new_jsonStr ,'utf-8')
// temps=



// on créer la fonction  pour le mp3
/////////////////////////////////////////

    //var minut =  function(reponse1){
        
  //};
ScribeSpeak("je lance le minuteur "+reponse1)

// on fait appel à la fonction minuteur

tim=function(reponse1,tempsreveil){
setTimeout(function() {ScribeSpeak("fin du minuteur "+reponse1 , function() {


                var nircmd ='%CD%/plugins/infomathilde/nircmd/nircmd.exe'
                var path = require('path');
                var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
                var process=nircmd + ' filldelete "' + dir + '\\minuteurmathilde\\memoire\\'+reponse1+'.json"'﻿
                var exec = require('child_process').exec;                       
                exec(process)





        //callback({'tts':"le minuteur pour"+ tempsname})
    SARAH.play('./plugins/minuteurmathilde/sample/trompette1.mp3');
    callback({'tts': ""});return false
    } )
   // minut(reponse1)

}, tempsreveil);
callback({'tts': ""})
//callback({'tts':"je lance le minuteur pour"+ tempsname}); 
}
tim(reponse1,tempsreveil)
};


