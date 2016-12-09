var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('musique');

musique=JSON.stringify(SARAH.context.scribe.lastReco).toLowerCase();musique=JSON.parse(musique)
console.log("recu de scribe dans musique "+musique)

//musique=data.musique.toLowerCase()



countmusique=0; 
//musique1=""
try{musique1="stop";SARAH.pause(liste[a]);console.log("on coupe avant de mettre une autre musique")}
              catch(err){console.log('pas de memorisation en 1');liste=""}


function recur(pathe,musique1){
           
var recursiveReadSync = require('recursive-readdir-sync')  , files  ;

    try {   files = recursiveReadSync(pathe)} 
    catch(err){ }
    
    liste = []
    len = files.length;
          
          for(var i = 0  ;i < len; i++){ 
     
             if ((files[i].search(new RegExp("\\b" + ".mp3" + "\\b","gi")) >-1)||
                 (files[i].search(new RegExp("\\b" + ".wav" + "\\b","gi")) >-1)
             )//fin if
                  { liste.push(files[i]) }

          }//fin for

    max=liste.length;min=0
    a= Math.floor(Math.random() * (max - min +1)) + min

  //  memorisationmusique=liste[a]
//musique1=""
//console.log('rrrrrrrrrrrrr '+ memorisationmusique)
                   console.log('on est a ::::'+countmusique)
                   console.log("artuunggggggggggggggggg "+musique1)
                    SARAH.play(liste[a],function(){
                      console.log("artuunggggggggggggggggg "+musique1)
                      countmusique=countmusique+1
                      console.log('on est à plus ::::'+countmusique)
                        if(countmusique==10){console.log('fin des 10 chansons');countmusique=0; musique1="";liste="";callback();return false}
                        //if  (musique.search(new RegExp("\\b" + "stop" + "\\b","gi")) >-1)
                          //   { console.log("stop par stop") ;countmusique=0;musique="";callback();return false}
                         if  (musique1== "stop"){console.log("stop par musique1 stop") ;countmusique=0; musique1="";liste="";callback();return false}
                        else{recur(pathe,musique1)

callback({'tts': ""});
  return false
                         }
                    })


  callback({'tts': ""});
  return false 
  
}//fin fnt
  

setTimeout(function(){
 musique1=="on"     
if (musique.search(new RegExp("\\b" + "hard-rock" + "\\b","gi")) >-1){
  console.log('hard-rock') 
  pathe="C:/Users/Administrateur/Music/hard-rock"
  type="hard-rock"

recur(pathe,musique1)
callback({'tts': ""});
  return false
}
if ((musique.search(new RegExp("\\b" + "pop" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "pop-rock" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "pop rock" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "rock" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "rock'n roll" + "\\b","gi")) >-1)
   ){
        console.log('pop-rock')
        //SARAH.play('C:/Users/Administrateur/Music/pop-rock/indochine/indochine.mp3')
         pathe="C:/Users/Administrateur/Music/pop-rock"
         type="pop-rock"
  
recur(pathe,musique1)
callback({'tts': ""});
        return false
}

if (musique.search(new RegExp("\\b" + "romantique" + "\\b","gi")) >-1){
  console.log('blues')
  //return false
  pathe="C:/Users/Administrateur/Music/romantique"
  type="blues"

recur(pathe,musique1)
callback({'tts': ""});
return false
}

if (musique.search(new RegExp("\\b" + "blues" + "\\b","gi")) >-1){
  console.log('blues')
  //return false
  pathe="C:/Users/Administrateur/Music/blues"
  type="blues"
  
recur(pathe,musique1)
callback({'tts': ""});
return false
}
if (musique.search(new RegExp("\\b" + "disco" + "\\b","gi")) >-1){
  console.log('disco')
  pathe="C:/Users/Administrateur/Music/disco"
  type="disco"
 
recur(pathe,musique1)
callback({'tts': ""});
  return false  
}

if (musique.search(new RegExp("\\b" + "jazz" + "\\b","gi")) >-1){
  console.log('jazz')
  pathe="C:/Users/Administrateur/Music/jazz"
  type="jazz"
 
recur(pathe,musique1)
callback({'tts': ""});
  return false
}
if (musique.search(new RegExp("\\b" + "attente" + "\\b","gi")) >-1){
  console.log('attente')
  pathe="C:/Users/Administrateur/Music/attente"
  type="attente"

recur(pathe,musique1)
callback({'tts': ""});
  return false
}


else {console.log('pas de correspondance est ce un chanteur ?');//type='off'
//;callback();
//return false

///////////////////////////////////////
/////////////////////////////////////





////////////////////////////////::
//////////////////un chanteur précis?
function recur1(musique1){


                 var fs = require('fs')
                 p = require('path')

                path='C:/Users/Administrateur/Music'

                function recursiveReaddirSync2(path,musique,musique1) {

                  var list = [] , files = fs.readdirSync(path) , stats

//console.log("mllgksdlkgs"+musique3)
                  files.forEach(function (file) {
                   
                          try{//console.log(fin)
                                //
                                
                                stats = fs.lstatSync(p.join(path, file));
                                          
                                    if(stats.isDirectory()) {

                        
                                         //console.log(path)
                                         file=file.toLowerCase()
                                         //console.log("file   "+file)
                                          
                                          //
                                          
                                            list = list.concat(recursiveReaddirSync2(p.join(path, file),musique));
                                                  
                                                   if (musique.search(file)>-1){
                                                    console.log('trouvéééé un chanteur');
                                                    musique1="on";
                                                    recur(path+"/"+file,musique1)
                                                   } //fin if musique
                                                      else{
                                                            
                                                      }//fin else
                                    }//if if stats
                                 
                                 else {
                                  
                                      } //fin else
  
                          }//fin try

                            catch(err){}
                  
                  });//fin for each

                 // return list;
//for(y=0;y<list.length;y++){console.log(list)}
                }//fin fnct recusivereader
console.log("non pas de chanteur correspondant")

                recursiveReaddirSync2(path,musique,musique1)          


}//fin fnt recu1



recur1(musique1)






callback({'tts': ""});
return false

}//fin else

    //setTimeout(function(){ x.value="4 seconds" }, 4000);

},3000)


}