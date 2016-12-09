var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;


exports.init = function(SARAH,config) {
 


  setTimeout(function(){
request = require('request'); cheerio = require('cheerio'); fs   = require('fs'); var path = require('path')

     console.log("elkkdgkldflgklqdfklmhklmqdfkh")
    path1 = path.resolve('%CD%', 'plugins\\planingmathilde\\memoireplaning').replace('\\%CD%', '')

//fs.readdirSync(path1, function (err, files1) {//sarah..bin...
files1 = fs.readdirSync(path1)
console.log("le plannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnning"+files1)
console.log(files1.length)

moment=require(path.resolve('%CD%', './plugins/modules/moment').replace('\\%CD%', ''));
//moment=require('moment');
moment.locale('fr');
Tmoment=moment().format("DDMM")
tim=0
for (a = 0 ; a<files1.length ; a++) {
  files2=files1[a]
  files3=files2[0]+files2[1]+files2[2]+files2[3]
                    
                      if(Tmoment==files3){console.log('yyyyyyyyyyyyyyyyyyeessss')
                      data51=fs.readFileSync(path1+"\\"+files2,'utf8')
                      objet51 = JSON.parse(data51)
                      tim=tim+10000
                      console.log('on appel'+objet51+tim)
                      console.log('on apell'+data51)
  

                    //appel(data51,tim)

console.log('on fgsdgdsgdsfgdappel'+data51+tim)    
SARAH.run('planingmathilde', { 'timer' : data51}) 

 

                      }//fin if
}//fin for
; },10000)
}//fin init











exports.action = function(data, callback, config,SARAH){

configcortana = config.modules.cortana
nommathilde = configcortana.nommathilde;

 SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; SCRIBE.activePlugin('planning mathilde');
 path = require('path'); var request = require('request'); var cheerio = require('cheerio'); fs = require('fs')

function ask(question,i,objetaction) {
 ScribeAskMe(question, [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase!=='undefined') {
         i=i+1; console.log(i+phrase)
          
            if(i==1){
//phrase=phrase.replace(new RegExp('\'', 'ig'),"");
console.log("rrrrr"+phrase)
if(
(phrase.search("janvier") <0)&(phrase.search("février") <0)&(phrase.search("mars") <0)&
(phrase.search("avril") <0)&(phrase.search("mai") <0)&(phrase.search("juin") <0)&
(phrase.search("juillet") <0)&(phrase.search("août") <0)&(phrase.search("septembre") <0)&
(phrase.search("octobre") <0)&(phrase.search("novembre") <0)&(phrase.search("décembre") <0)&
(phrase.search("\\b" + "aujourd'hui"+"\\b"  )<0)&(phrase.search("demain") <0)&(phrase.search("après-demain") <0)
)
    {
      i=0;question="la date avec le mois?"
      ask(question,i,objetaction);callback();return false
    }

//phrase=" "+phrase
if(phrase.search(new RegExp("\\b" + "aujourd'hui"+"\\b", 'ig') )>-1){
moment=require(path.resolve('%CD%', './plugins/modules/moment').replace('\\%CD%', ''));
moment.locale('fr');
phrase=moment().format("DDMM")
}
if(phrase.search(new RegExp("\\b" + "après-demain"+"\\b", 'ig') )>-1){
moment=require(path.resolve('%CD%', './plugins/modules/moment').replace('\\%CD%', ''));
moment.locale('fr');
phrase=moment().add(2, 'days').format("DDMM")
}
if(phrase.search(new RegExp("\\b" + "demain"+"\\b", 'ig') )>-1){
moment=require(path.resolve('%CD%', './plugins/modules/moment').replace('\\%CD%', ''));
moment.locale('fr');
phrase=moment().add(1, 'days').format("DDMM")
}
console.log('rrrrrrrrrrrrrrr'+phrase)
//if(phrase.search(new RegExp("\\b" + "demain"+"\\b", 'ig') )>-1){phrase="4000"}
  //if(phrase.search(new RegExp("\\b" + "après-demain"+"\\b", 'ig') )>-1){phrase="2100"}
phrase=phrase.replace(new RegExp('janvier', 'ig'),"01")
phrase=phrase.replace(new RegExp('février', 'ig'),"02")
phrase=phrase.replace(new RegExp('mars', 'ig'),"03")
phrase=phrase.replace(new RegExp('avril', 'ig'),"04")
phrase=phrase.replace(new RegExp('mai', 'ig'),"05")
phrase=phrase.replace(new RegExp('juin', 'ig'),"06")
phrase=phrase.replace(new RegExp('juillet', 'ig'),"07")
phrase=phrase.replace(new RegExp('août', 'ig'),"08")
phrase=phrase.replace(new RegExp('septembre', 'ig'),"09")
phrase=phrase.replace(new RegExp('octobre', 'ig'),"10")
phrase=phrase.replace(new RegExp('novembre', 'ig'),"11")
phrase=phrase.replace(new RegExp('décembre', 'ig'),"12")
phrase=phrase.replace(new RegExp(' ', 'ig'),"")


              phrase=phrase.replace(new RegExp('[^0-9]', 'ig'),"").trim()           
 console.log('en 1'+phrase)
if(phrase.length==3){phrase="0"+phrase}
console.log('en 2'+phrase)
              
                if(phrase==""){i=0;question="la date ?"
                   ask(question,i,objetaction);callback();return false}
                }//fin if 1  

            if(i==2){
//phrase=" "+phrase              
//phrase=phrase.replace(new RegExp('une', 'ig'),"01")
//phrase=phrase.replace(new RegExp(' 1', 'ig'),"01")
//phrase=phrase.replace(new RegExp(' 2', 'ig'),"02")
//phrase=phrase.replace(new RegExp(' 3', 'ig'),"03")
//phrase=phrase.replace(new RegExp(' 4', 'ig'),"04")
//phrase=phrase.replace(new RegExp(' 5', 'ig'),"05")
//phrase=phrase.replace(new RegExp(' 6', 'ig'),"06")
//phrase=phrase.replace(new RegExp(' 7', 'ig'),"07")
//phrase=phrase.replace(new RegExp(' 8', 'ig'),"08")
//phrase=phrase.replace(new RegExp(' 9', 'ig'),"09")

if(phrase.search(new RegExp("\\b" + "midi"+"\\b", 'ig') )>-1){phrase="12"}
if(phrase.search(new RegExp("\\b" + "minuit"+"\\b", 'ig') )>-1){phrase="00"}
              phrase=phrase.replace(new RegExp('[^0-9]', 'ig')," ").trim()
       
         phrase=phrase.replace(new RegExp(' ', 'ig'),"")
console.log('en 1'+phrase)
if(phrase.length==1){phrase="0"+phrase+"00"}
if(phrase.length==3){phrase="0"+phrase}
 if(phrase.length==2){phrase=phrase+"00"} 
console.log('en 2'+phrase)   



             if(phrase==""){i=1;question="l'heure de début' ?"
                               ask(question,i,objetaction);callback();return false}
                            }//fin if 2  



                    if(i==5){
                        
                        if (phrase=='non'){
                            console.log(objetaction);console.log(objetaction.information[1])
                            //////////on sauvegarde
              filePath = path.resolve('%CD%', './plugins/planingmathilde/memoireplaning/'+objetaction.information[0]+objetaction.information[1]+'.json').replace('\\%CD%', '');
              new_jsonStr = JSON.stringify(objetaction);
              fs.writeFile(filePath,new_jsonStr ,'utf-8', function (err) {console.log("valeur rajoutée au json planing " + new_jsonStr)});               
              programmation(objetaction)
              callback();
              return false
                        }//fin non
  
                        if (phrase=='oui'){i=3;planing(phrase,i,action)}
                        else {i=4;planing(phrase,i,action)}
                    
                    }//fin if 4
                    else{
                        objetaction.information.push(phrase)
                        console.log(phrase); console.log(objetaction)
                            planing(phrase,i,objetaction)
                    }  //fin esle
      }//fin if !=='undefined'
            
    }//fin fnct answer
  );
}//fin fnct ask

function planing(phrase,i,action){console.log('rrrrrrrrrrrrr'+i)
  
  if(i==0){
       console.log('essai '+ i)
       question="la date' ?"
            ask(question,i,action)
  }//fin if
  
  if(i==1){
       console.log('essai '+ i)
       question="l'heure de début' ?"
            ask(question,i,action)
  }//fin if

  if(i==2){
       console.log('essai '+ i)
       question="le nom de l'action ?"
            ask(question,i,objetaction)
  }//fin if

  if(i==3){
      console.log('essai '+ i)
      question="quel action précise à faire' ?"
          ask(question,i,objetaction)
  }//fin if

  if(i==4){
      console.log('essai '+ i)
      question="une autre action . oui ou non' ?"
          ask(question,i,objetaction)
  }//fin if
callback();
return false

}//fin fnct planning

function programmation(objetaction){

//calcul du temps
  reponse=objetaction.information[1];console.log('la reponse est :' +reponse+' '+reponse.length)
    if(reponse.length==1){tempsreveil=reponse*3600000;console.log('tepmsreveil '+tempsreveil)}// que heure//8h
    if(reponse.length==2){tempsreveil=reponse*3600000;console.log('tepmsreveil '+tempsreveil)}  //que heure//18h
    
    if(reponse.length==3){temp=reponse[0]*3600000;
        tempsreveil=temp;//console.log(temp)
        temp=reponse-reponse[0]*100;//console.log(temp)
        temp=temp*60000;//console.log(temp)
        tempsreveil=tempsreveil+temp;console.log('tepmsreveil '+tempsreveil)
    } //fin if 1 heure + 2 minutes//1h18
 
   if(reponse.length==4){temp=reponse[0]*36000000+reponse[1]*3600000
       tempsreveil=temp;//console.log(temp)
       temp=reponse-reponse[0]*1000;//console.log(temp)
       temp1=reponse[1]*100;//console.log('rr'+temp1)
       temp=temp-temp1;//console.log('r'+temp)
       temp=temp*60000;//console.log(temp)
       tempsreveil=tempsreveil+temp;console.log('tempsreveil '+tempsreveil)
    }// fn if  2 heure + 2 minutes 


son=objetaction.information[0]
son1=son[0]+son[1]
son2=son[2]+son[3]
console.log('rrrrrrr'+son2)
if(son2=="01"){son2=" janvier "};if(son2=="02"){son2=" février "};if(son2=="03"){son2=" mars "}
if(son2=="04"){son2=" avril "};if(son2=="05"){son2=" mai "};if(son2=="06"){son2=" juin "}
if(son2=="07"){son2=" juillet "};if(son2=="08"){son2=" aout "};if(son2=="09"){son2=" septembre "}
if(son2=="10"){son2=" octobre "};if(son2=="11"){son2=" novembre "};if(son2=="12"){son2=" décembre "}

console.log("eeeeeeeee "+son2)
tempsappel=objetaction.information[1]
tempsappel1=tempsappel[0]+tempsappel[1]+' heures '+tempsappel[2]+tempsappel[3]+' minutes'

//ScribeSpeak()


tempadditionel=0//15 seconde entre chaque action
tempsdepart= objetaction.information[0]

// on récupére le temps en ms
date = new Date();heure =date.getHours()*3600000;minute =date.getMinutes()*60000;datemilli=heure+minute
console.log("ttttttttttttttttttt "+ heure +"      "+minute+"        "+datemilli+"    "+ tempsreveil)
//si  datemilli < tempsreveil  alors 24h00-datemilli  +   tempdepart 
try{
  if(datemilli<tempsreveil){tempadditionel=tempadditionel+(tempsreveil-datemilli)}
//si  datemilli > tempsreveil   alors tempsreveil - datemilli
if(datemilli>tempsreveil){tempadditionel=tempadditionel((24*3600000)-datemilli)+tempsreveil}
//if(v_moment().format("DD MMMM YYYY")
if(moment().format("DDMM")!==objetaction.information[0]){console.log('ALERTEEEE') ;return false}
//appel du tiemout
ScribeSpeak('je programme pour le '+son1+ " "+son2 +" à "+tempsappel1);

 setTimeout(function(){ 
 v_moment=require('moment');v_moment.locale('fr');
  var v_Jour  = v_moment().date();  
    var v_Mois  = v_moment().month() + 1;
    var v_Annee = v_moment().year();

 //var date = new Date();
  //var text=v_Jour
  //var text = date.getHours() + ' heure ' + date.getMinutes() +' minutes'

      ScribeSpeak("il est : " +v_moment().format("dddd DD MMMM YYYY") + " : tu m'avais demandé les actions suivante")
      callback({'tts' : " "});
      //on efface le planing
      var nircmd ='%CD%/plugins/infomathilde/nircmd/nircmd.exe'
      var path = require('path');
      var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
      //console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'+dir)
      var process=nircmd + ' filldelete "' + dir + '\\planingmathilde\\memoireplaning\\'+objetaction.information[0]+objetaction.information[1]+'.json"'﻿
      var exec = require('child_process').exec;                         
      exec(process)
      callback();
      return false
  ; }, tempadditionel+60000);//fin timeout  
}//fin try
catch(err){ScribeSpeak("depasser en temps, dommage tu as louper le rendez vous");return false}
for(j=3;j<(objetaction.information).length;j++){
  objetaction1=objetaction.information[j];
  console.log('on appppellllll'+objetaction1)
  tempadditionel=tempadditionel+15000
  console.log(tempadditionel)
 tim(objetaction1,tempadditionel)
}
callback();
return false
}//fin fnt programation

function tim(objetaction1,tempadditionel){
 
  setTimeout(function(){ 
      SARAH.run('cortana', { 'reco' : nommathilde+" "+objetaction1});
      callback({'tts' : " "});callback();return false
 ; }, tempadditionel);//fin timeout

callback();return false

 }

 ///depart
i=0; phrase=''
action='{"information":[]}'; objetaction = JSON.parse(action);
            
            if(data.timer!==undefined){
objetaction=JSON.parse(data.timer)
              console.log("arrrrrrrrrrrrret"+data.timer+objetaction);//objetaction=data.timer;
                     programmation(objetaction)
                     return false}
                      else{
                      planing(phrase,i,objetaction)
                        }



}