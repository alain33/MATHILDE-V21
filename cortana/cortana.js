var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.action = function(data, callback, config,SARAH){

reponse=""; fs = require('fs');exec = require('child_process').exec; path = require('path');
filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/memoire/memoire.json').replace('\\%CD%', '');
maConfig = config.modules.scribe; util = require('util');
configcortana = config.modules.cortana; debug = configcortana.debug
//console.log(debug)

nommathilde = configcortana.nommathilde;//default
//nommathilde=nommathilde.toLowerCase()
console.log("mathilde s'appel dans cortana : "+nommathilde)

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('cortana');
//SARAH.chromeless('http://www.google.com', 80);

//////////////////////////////////////////////////
///////////////////////////////////////////////////
//http://www.cnrtl.fr/synonymie/hier
nomchercher="mes clés sont sur la table et ma voiture dans la rue"
nomchercher=data.reco
dico=require('C:/Users/Administrateur/sarah/plugins/modules/mathildedico')
testphrase = require('C:/Users/Administrateur/sarah/plugins/modules/testphrase')
//re=
dico(nomchercher)
//synonyme = require('C:/Users/Administrateur/sarah/plugins/modules/synonyme')
console.log(testphrase(nomchercher))
  //synonyme(nomchercher,function(callback1){console.log("réponse : "+callback1)})
 

 var exec = require('child_process').exec;
  
 //    var proc = __nircmd + 'closeprocess chrome.exe'; 
  //   var proc = 'start chrome --new-window '+'c://indexold.html'; 
  
//  console.log(proc);
 //var child = exec(proc)   
   
  try{
        if ( data.reco.search(nommathilde) >-1){
 
reco=data.reco.replace(new RegExp(nommathilde,"gi"),"");
reco=reco.replace(new RegExp("-","gi")," ");
query=reco;console.log('phrase recu de scribe : '+query);

// je json d'apprentissage
function Mémoire(query){
  levion=0
emulate0(query,levion);return false//on court cicuite

    fs.readFile(filePath,'utf-8', function(err, data1) {

          objet = JSON.parse(data1); data1Obj = '{ "item" : ' + query + " }";
          longueur = objet.courses.length; jsonStr = JSON.stringify(objet);

      if (jsonStr.indexOf(query) > -1  ){console.log('je connais');emulate0(query);}// fin on connais le data.q
      //et si on connais pas que faire ?
      else {query=query.trim()
            objet.courses.push({item: query}); new_jsonStr = JSON.stringify(objet);
              fs.writeFile(filePath,new_jsonStr ,'utf-8', function (err) {
                console.log("valeur rajoutée au json cortana " + query);// callback({'tts' : ""});
                emulate0(query);
              });               
       }//fin else
    })////fin fsread
}//fin fnct memoire

//on connais la phrase qui est dans un plugin si non => skynet
function emulate0(query,levion){
//console.log("tttttttttttttttttttttttttttttttttttttttttttttttt"+query)
try{levenshtein=require(path.resolve('%CD%', './plugins/modules/levenshtein').replace('\\%CD%', ''))
}catch(err){console.log("errrrrrreur"+err)}
  //lis le nom des plugins
    f1 = path.resolve('%CD%', './plugins/demarrage/item/plugins.json').replace('\\%CD%', '');//console.log(f1)
    data5=fs.readFileSync(f1,'utf8').toString();
    objet5 = JSON.parse(data5);  longueur5 = objet5.nompluguine.length 

  //nom plugin 1 par 1
  for (i=0;i<longueur5;i++){//console.log(objet5.nompluguine[i])
//on test si query fait pati des xml EX : query XML query
                  
                
              f2 = path.resolve('%CD%', './plugins/demarrage/item/'+objet5.nompluguine[i] +'item.json').replace('\\%CD%', '');
              data6=fs.readFileSync(f2,'utf8').toString(); garbage1=0
                      
              if ( (objet5.nompluguine[i].search("garbage","gi")>-1) ){ garbage1=1 }
                 
              data6=fs.readFileSync(f2,'utf8').toString(); 
               
              try{ objet6 = JSON.parse(data6);jsonStr6 = JSON.stringify(objet6); longueur6 = objet6.nompluguine.length }
              catch(err){console.log(err)}

                  for(y=0;y<longueur6;y++){// si match== emulate +nom appel..
                          
                          //////////////////////
                      levi=levenshtein(objet6.nompluguine[y],query)
                      querylengthlevi=query.length
                      objet6lengthlevi=objet6.nompluguine[y].length
                      concordancelevi=(levi*100)/objet6lengthlevi
                      //console.log("consordanceeeeeeeeeeeeee " +concordancelevi)

                      if( (concordancelevi<25) && (levion==1) ){
                        console.log("concordance levi : " +levi+" "+concordancelevi+" "+ objet6.nompluguine[y])
                     query=objet6.nompluguine[y]
                      }//fin concorancelevi
                          
                          /////////////////////



                             if (query.search(new RegExp(objet6.nompluguine[y],"gi")) >-1){
                                
                                  console.log('concordance dans les xml de : '+query+" dans : "+objet6.nompluguine[y]+ " du plugin : "+objet5.nompluguine[i]) 
                                
                                         if(garbage1==1){ 
                                          console.log("!!!!!garbage!!!!"+garbage1+objet5.nompluguine[i])
                                          objet5.nompluguine[i]=objet5.nompluguine[i].replace(new RegExp("garbage","gi"),"");
                                          console.log(objet5.nompluguine[i])
                                          garbage1=0; SARAH.run(objet5.nompluguine[i], { 'dictation' : query});
                                          callback({'tts' : ""}); return false
                                         }//fin if garbage1
                              
                                               //le nom de sarah en v3 ou v4
                                         try{
                                            filePathcontent1 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
                                            content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                                            nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).common.name;//console.log('le nom : '+nomappel)
                                         }//fin try
                                         catch (Exception) {
                                              filePathcontent1 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
                                              content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                                              nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).bot.name;//console.log('le nom : '+nomappel)
                                          }//fin catch
                                    //concordance donc on émul
                                  url1 = 'http://127.0.0.1:8888/?emulate='+nomappel+' '+objet6.nompluguine[y];console.log('on connais donc ont appel depuis cortana : '+url1)
                                  request = require('request');
                                  request({ url : url1 })

////on verifie si on ajoute aux phrases clés
                                  filePathrea = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '');
                            
                                     fs.readFile(filePathrea, function(err,data){
                               
                                          objet = JSON.parse(data);jsonStr = JSON.stringify(objet);//console.log(objet.phrasescles)
                                          
                                          queryrecherchefin=query.search(new RegExp("\\b" + objet6.nompluguine[y] + "\\b","gi"))
                                          queryrecherche=""

                                          for(iii=0;iii<queryrecherchefin;iii++){queryrecherche=queryrecherche+query[iii]};//console.log('*'+queryrecherche+'-')
                 
                                          for(ii=0;ii<objet.phrasescles.length;ii++){queryrecherche=queryrecherche.trim()
                                                debut=objet.phrasescles[ii].search(new RegExp(queryrecherche,"gi"))
             // console.log(debut+objet.phrasescles[ii]+queryrecherche)
                                                    if (debut>-1){//console.log('pas de push pour : '+objet.phrasescles[i]+queryrecherche)
                                                         console.log('fini pour cortana le pluguin est actif et phrasescles connus')
                                                         callback({'tts' : ""});
                                                         return false
                                                    }//fin if debut

                                          }//fin for ii

              //on ajoute aux phrases cles
                                         // if(queryrecherche.length>4){
                                          if(queryrecherche.length>4){
                                                  queryrecherche=queryrecherche.trim()
                                                  objet.phrasescles.push(queryrecherche); new_jsonStr = JSON.stringify(objet);
                                                  console.log("valeur rajoutée au json phrasescles & fini pour cortana le pluguin est actif "+queryrecherche)
                                                  filePathphrasescles1 = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '')
                                                  fs.writeFile(filePathphrasescles1,new_jsonStr)
                                         }//fin if querysearch

                                      })//fs.read

                            callback({'tts' : ""});
                            return false///////////fin car on connais

                      }//fin if query search nom plugin
     }//fin for Y
}//fin for i

if (levion==0){console.log("2 eme passage avec levi"); levion=1 ; emulate0(query,levion)}
else{emulate(query)}
//on re test avec levi

//rien donc on émul pour voir

}// fin fnct emulate0


function emulate(query){
    
console.log('pas de reco dans mes xml je test en direct avec emul si one-of ou xml bizard')


//ScribeSpeak(speaking,function(){
// on test si un plug s'active
            function xmlinconnu(query){
                      //le nom de sarah en vrai
                      try{
                          filePathcontent1 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
                          content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                          nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).common.name;//console.log('le nom : '+nomappel)
                      }
                          catch (Exception) {
                            filePathcontent1 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
                            content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                           nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).bot.name;//console.log('le nom : '+nomappel)
                          }
 //on prends la date
var date = new Date();
heures=date.getHours();minutes=date.getMinutes();secondes=date.getSeconds();year=date.getFullYear();month=(date.getMonth())+1;day=date.getDate()
if((month)<10){month='0'+month};if((day)<10){day='0'+day};if((heures)<10){heures='0'+heures}
if((minutes)<10){minutes='0'+minutes};secondes=(secondes);if((secondes)<10){secondes='0'+secondes}
ladate=year+'-'+month+'-'+day;letemps='['+heures+':'+minutes+':'+secondes;//console.log(ladate);console.log(letemps)
// on emul pour voir
url1 = 'http://127.0.0.1:8888/?emulate='+nomappel+' '+query;console.log('on test pour vérifier si sarah a répondu à : '+url1)
request = require('request');
//console.log("eeeeeeeeeeeee"+JSON.stringify(SARAH.context))
      function emulation(ladate,letemps) {console.log('on verifie dans le log')
          request({ url : url1 }, function (err, response, body){
//on attends l'ecriture du log
              fs=require('fs')
                    try{
                        filePathfichier = path.resolve('%CD%', './bin/'+ladate+'.log').replace('\\%CD%', '');fichier=fs.readFileSync(filePathfichier,'utf-8')
                    }
                        catch (Exception) {
                          filePathfichier = path.resolve('%CD%', './client/AddOns/debug/'+ladate+'.log').replace('\\%CD%', '');fichier=fs.readFileSync(filePathfichier,'utf-8')
                        }
              longuerstring=fichier.length;//console.log(longuerstring);
              str = fichier;toSearch=letemps;
//console.log(letemps)

              lo='';pos=str.indexOf(toSearch)
 
                   if(pos==-1){Skynet(query);return false}
              lon=str.length
    
                  for( i = pos; i < lon ; i++) {
                      lo=lo+str[i]
                  };//fin for i
  //  console.log(pos);console.log(lon);console.log('rrrrrrrrr')
              if(lo.indexOf('Build')>-1){console.log("émulation trouvée donc plugin actif on s'arrete la");callback({'tts': ""});return false}; 
              console.log('pas d émulation trouvée')
                  Skynet(query)
                  return false
        
            });//fin request
        
        }//fin emulation
emulation(ladate,letemps)
}//fin fnct xmlinconnu

xmlinconnu(query)//appel fnct xmlinconnu
//})//fin screakspeak

callback({'tts': ""})
return false
}//fin fnct emulate

///////////////////////////////////////////////////////////////////////////////////////////////////////
//on connais la phrase recu==phrase d'un plug


//////////////////////////////////////////////////////////////////////////////////

// on traite la phrase recu
function Skynet(query) {

// on passe par les mots clés

 query1=query.replace(new RegExp("\\b" + "de" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "des" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "la" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "les" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "le" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "l'" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "au" + "\\b","gi"),"");
//var query1=query1.replace(new RegExp("\\b" + "à" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "du" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "aux" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "un" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "une" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "d'" + "\\b","gi"),"");
console.log('la phrase traitée : '+query1);

match=query.search()


if (query1.search("vidéos") >-1){
  query22 = query1.search("vidéos");
  query23 = query1.length;
    for (i = (query22+6); i < query23 ;i++){reponse=reponse+(query1[i]);}
      if (debug=="on"){speaking="mots clés trouvé video"}else{speaking=""}
       ScribeSpeak(speaking,function(){reponse=reponse.trim();reponse=reponse.replace(new RegExp(" ","gi"),"+");
        
        reponse=reponse.replace(new RegExp(' ', 'ig'),"+")
        var proc = 'start chrome --new-window https://www.youtube.com/results?search_query='+ reponse;
        //console.log(proc)
            exec(proc)
            // process1 = '%CD%/plugins/cortana/bin/searchyoutube.vbs ' + reponse ; exec(process1)
        })
     callback({'tts': ""})
     return false
}

if (query1.search("vidéo") >-1){
  query22 = query1.search("vidéo");
  query23 = query1.length;
   for (i = (query22+5); i < query23 ;i++){reponse=reponse+(query1[i]);}
    if (debug=="on"){speaking="mots clés trouvé vidéo"}else{speaking=""}
      ScribeSpeak(speaking,function(){reponse=reponse.trim();reponse=reponse.replace(new RegExp(" ","gi"),"+")
          var proc = 'start chrome --new-window https://www.youtube.com/results?search_query='+ reponse;
        //console.log(proc)
            exec(proc)
         // process1 = '%CD%/plugins/cortana/bin/searchyoutube.vbs ' + reponse ; exec(process1)
      })
    callback({'tts': ""})
      return false
}
//https://www.google.fr/search?q=Louane
//https://www.google.fr/search?q=louane&tbm=isch
if (query1.search("images") >-1){ 
  query22 = query1.search("images");
  query23 = query1.length;
      for (i = (query22+6); i < query23 ;i++){reponse=reponse+(query1[i]);}
        if (debug=="on"){speaking="mots clés trouvé image"}else{speaking=""}
           ScribeSpeak(speaking,function(){reponse=reponse.trim()
                             process1 = '%CD%/plugins/cortana/bin/searchimages.vbs ' + reponse ; exec(process1);//console.log(process1)
            })
         callback({'tts': ""})
return false
}

if (query1.search("image") >-1){ 
  query22 = query1.search("image");
  query23 = query1.length;
        for (i = (query22+5); i < query23 ;i++){reponse=reponse+(query1[i]);}
          if (debug=="on"){speaking="mots clés trouvé image"}else{speaking=""}
            ScribeSpeak(speaking,function(){reponse=reponse.trim()
                           process1 = '%CD%/plugins/cortana/bin/searchimages.vbs ' + reponse ; exec(process1)
            })
          callback({'tts': ""})
return false
}


if (query1.search("courses") >-1){
  query22 = query1.search("courses");
  query23 = query1.length;
    for (i = (query22+8); i < query23 ;i++){reponse=reponse+(query1[i]);}
        if (reponse==""){reponse="false"}
          if (debug=="on"){speaking="mots clés trouvé courses"}else{speaking=""}
              //ScribeSpeak(speaking,function(){
                    SARAH.run('coursesmathilde', { 'item' : reponse});//callback({'tts' : ""});
              //})
            callback({'tts': ""})
return false
  }


if (query1.search("réveil") >-1){
  query22 = query1.search("réveil");
  query23 = query1.length;
      for (i = (query22+4); i < query23 ;i++){reponse=reponse+(query1[i]);}

 reponse=reponse.replace(new RegExp('[^0-9]', 'ig'),"")
   if(reponse==""){match3(query);return false
        var date = new Date();
        var heure =date.getHours();
        var minute =date.getMinutes();
        reponse=heure+''+minute
        query=heure+' '+minute
        console.log(reponse)
        console.log('immédiat');
    }//fin if reponse=''
 // protection 24 heure et 59 minutes !!!

if(reponse.length==1){tempsreveil=reponse*3600000}// que heure//8h
if(reponse.length==2){tempsreveil=reponse*3600000}  //que heure//18h
 
 if(reponse.length==3){temp=reponse[0]*3600000;
    tempsreveil=temp;//console.log(temp)
    temp=reponse-reponse[0]*100;//console.log(temp)
    temp=temp*60000;//console.log(temp)
    tempsreveil=tempsreveil+temp
 } // 1 heure + 2 minutes//1h18
 
 if(reponse.length==4){temp=reponse[0]*36000000+reponse[1]*3600000
    tempsreveil=temp;//console.log(temp)
    temp=reponse-reponse[0]*1000;//console.log(temp)
    temp1=reponse[1]*100;//console.log('rr'+temp1)
    temp=temp-temp1;//console.log('r'+temp)
    temp=temp*60000;//console.log(temp)
    tempsreveil=tempsreveil+temp
  }// 2 heure + 2 minutes  

reponse1=query
reponse1=(reponse1.replace(new RegExp('[^0-9]', 'ig')," ")).trim()

 console.log('la reponse envoyer à révéil1  '+reponse1+' '+tempsreveil)
      ScribeSpeak("réveil programmé à "+reponse1.replace(" "," heure "),function(){
          SARAH.run('reveil1', { 'tempsreveil' : tempsreveil , 'tempsreveilname' : reponse1});//callback({'tts' : ""});
      })
      callback({'tts': ""})
 return false
}
// si pas de mots clé direction match3 !!!!!

if(reponse==""){
  if (debug=="on"){speaking="je n'ai pas trouvé de mots clés"}else{speaking=""}
    ScribeSpeak(speaking,function(){
      match3(query)
      reponse="eee"
    })//fin speak
}//fin if
callback({'tts': ""})
return false
}//fin funtion Skynet


function ask(query) {
 ScribeAskMe("Que recherche tu", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase!=='undefined') {
        
        msg = phrase.trim();
      
        Match(query,msg)
      }
      else if (answer==false) {
        ScribeSpeak("Je ne suis pas sûr que tu aies répondu à ma question !", function () {
          ask(query);
        });
      }
      else ScribeSpeak("Tu n'as rien répondu. Tant pis.");//console.log(answer+phrase+match+wholeMatch);
    }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 2}
  );
}//fin fnct ask





function Match1(query,msg,reponse2){
//levenshtein=require(path.resolve('%CD%', './plugins/modules/levenshtein').replace('\\%CD%', ''))

names = reponse2;nameList = names.split(" ");
longueur1=(nameList.length)

//on lis le fihier phrase
filePathphrasescles = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '');
    
    fs.readFile(filePathphrasescles, function(err,data){
        objet = JSON.parse(data);jsonStr = JSON.stringify(objet);
        longueur = objet.phrasescles.length;
            
            for (i=0 ; i<longueur ; i++){
                // on sort tous les mots
                nameListe = objet.phrasescles[i].split(" ");
                longueur2=(nameListe.length)

                  if (longueur2==longueur1){

                      for (j=0; j<longueur2-1 ; j++){

                          if (nameList[j].search(new RegExp("\\b" + nameListe[j] + "\\b","gi"))>-1){
                          
                              if (j==longueur2-2){
                           
                                //  SARAH.run('wiki', { 'phrase' : msg});callback({'tts': ""});return false
                              }
                              else {                          }
                          }

                          else { j=longueur2 }//fin else
                      
                      }//fin for
                  
                  }//fin if longueur

              }//fin for

if (reponse2!==""){reponse2=reponse2.trim()
// la premiere partis de la phrase
objet.phrasescles.push(reponse2); new_jsonStr = JSON.stringify(objet);

filePathphrasescles1 = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '');
 
 fs.writeFile(filePathphrasescles1,new_jsonStr, function (err) {
    console.log("valeur rajoutée au json phrasescles " + reponse2);
//la 2eme partie de la phrase
///on re test la réponse pour voir si un plug existe
//lis le nom des plugins
    f3=filePath = path.resolve('%CD%', './plugins/demarrage/item/plugins.json').replace('\\%CD%', '');
    data5=fs.readFileSync(f3,'utf8').toString();
    objet5 = JSON.parse(data5);  longueur5 = objet5.nompluguine.length 

    names = reponse3;nameList = names.split(" ");
    console.log('on vérifie la présence de cela : '+reponse3+' dans les plug')
    longueur1=(nameList.length)

//on lis la liste des phrases(item)
        for (g=0;g<longueur5;g++){
                f4=filePath = path.resolve('%CD%', './plugins/demarrage/item/'+objet5.nompluguine[g] +'item.json').replace('\\%CD%', '');
                data=fs.readFileSync(f4,'utf8').toString(); 
                objet = JSON.parse(data);jsonStr = JSON.stringify(objet)
                longueur = objet.nompluguine.length;

                    for (i=0 ; i<longueur ; i++){
                    // on sort tous les mots

   levi=levenshtein(objet.nompluguine[i],reponse3)
                      querylengthlevi=reponse3.length
                      objet6lengthlevi=objet.nompluguine[i].length
                      concordancelevi=(levi*100)/objet6lengthlevi
                      //console.log("consordanceeeeeeeeeeeeee " +concordancelevi)

                      if(concordancelevi<25) {
                        console.log("concordance levi : " +levi+" "+concordancelevi+" "+ objet.nompluguine[i])
                     //query=objet6.nompluguine[y]
                      url1 = 'http://127.0.0.1:8888/?emulate='+nomappel+' '+objet.nompluguine[i];
                      console.log('on connais donc ont appel depuis cortana : '+url1)
                                  request = require('request');
                                  request({ url : url1 })
                                  callback({'tts': ""})
return false
                      }//fin concorancelevi


                    ///////////////saut car inutile
                          nameListe = objet.nompluguine[i].split(" ");
                          nomduplug=objet5.nompluguine[g]
                          longueur2=(nameListe.length)

                              if (longueur2==longueur1){
                                    
                                    for (j=0; j<longueur2 ; j++){
                                    //on test 1 par 1
                                          if (nameList[j].search(new RegExp("\\b" + nameListe[j] + "\\b","gi"))>-1){
                                    
                                                if (j==longueur2-1){console.log('on as trouver mais erreur'+reponse3) ;
                                                //emulate1(reponse3,nomduplug);callback({'tts': ""});
callback({'tts': ""})
return false

                                                }
                                          }
                                          else { j=longueur2}
                                    }//fin for
                              }//fin if longueur
                      }//fin for

                        //fin inutile

        }//fin for g
console.log('pas de reco de '+msg+' dans les plugs')
//Skynet(query)
/// fin du 2 eme test
 SARAH.run('wiki', { 'phrase' : msg});//callback({'tts' : ""})

})//fin fs write
}//fin if pas
})//fin fs readFile

}//fin fnct Match

//////////////////////////////////////////////////////////////////


function Match(query,msg){
reponse=msg;reponse2=''; reponse3=''; match=query.search(new RegExp("\\b" + reponse + "\\b","gi"));// console.log(match);

if(match<0){
    reponse=reponse.toLowerCase(); query=query.toLowerCase();
    match=query.search(new RegExp("\\b" + reponse + "\\b","gi"));
    //console.log('la réponse'+reponse+query)
}

if(match<0){
    reponse=reponse.toUpperCase();
    match=query.search(new RegExp("\\b" + reponse + "\\b","gi"));
    //console.log('la 2eme reponse'+reponse)
}
//.toLowerCase();
if(match>-1){
    //console.log('on a matché en 1')
    reponselength=(reponse.length)
    querylength=(query.length)

        for (i=0;i<match;i++){reponse2=reponse2+query[i]}
            
        for (i=match;i<querylength;i++){reponse3=reponse3+query[i]}

       // console.log('on a matché en 2 '+query+' '+' '+msg+' '+reponse2)

        ScribeSpeak(msg, function() {Match1(query,msg,reponse2);callback({'tts': ""});return false});
       
}//fin if

else{ScribeSpeak('la phrase ne correspond pas, je sort')
callback({'tts': ""});return false
}
return false
}//fin fnct Match1



function match3(query){// on va tester la pourcentage
//on connais une phrase clés=> internet si non =>on questionnne
filePathrea = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '');

    fs.readFile(filePathrea, function(err,data){
            objet = JSON.parse(data);jsonStr = JSON.stringify(objet)//;console.log('obbbbbbbbbjet'+objet)
            longueur = objet.phrasescles.length;
//on lis les phrases clé
                for (j=0; j<longueur;j++){//on lis les phrases clé 1 par 1
                      
                      if (query.search(new RegExp(objet.phrasescles[j],"gi"))>-1){//on a trouvé une phrase clés //console.log(j)
                                longueurphrase=(objet.phrasescles[j]).length
                                console.log('                 phrase connu : '+objet.phrasescles[j]+j)
                                pointdepart=query.search(new RegExp(objet.phrasescles[j],"gi"))
                                motsplugin=''
                                    for(dd=longueurphrase+1; dd<(query.length);dd++){motsplugin=motsplugin+query[dd]}
                                //console.log('                        la recherche : '+motsplugin)
// on retest
//lis le nom des plugins
                              f5=path.resolve('%CD%', './plugins/demarrage/item/plugins.json').replace('\\%CD%', '');
                              //  f5=filePath = path.resolve('%CD%', './plugins/demarrage/item/plugins.json').replace('\\%CD%', '');
                                data5=fs.readFileSync(f5,'utf8').toString();
                                objet5 = JSON.parse(data5);  longueur5 = objet5.nompluguine.length 
                                names = motsplugin.toLowerCase();names=names.trim() ;nameList = names.trim().split(" ");
                                console.log('on vérifie la présence de cela : '+names+' dans les plug')
                                //console.log(motsplugin)
                                longueur1=(nameList.length)//nb de mots a rechercher
console.log('name '+names)
//on lis la liste des phrases(item)
                                    for (g=0;g<longueur5;g++){//plugin par plugin
                                            //f6=filePath = path.resolve('%CD%', './plugins/demarrage/item/'+objet5.nompluguine[g] +'item.json').replace('\\%CD%', '');
                                            f6= path.resolve('%CD%', './plugins/demarrage/item/'+objet5.nompluguine[g] +'item.json').replace('\\%CD%', '');
                                            data=fs.readFileSync(f6,'utf8').toString(); 
                                            objet = JSON.parse(data);jsonStr = JSON.stringify(objet)
                                            longueur = objet.nompluguine.length;//la liste des ["","",""] et le nombre

                                                for (i=0 ; i<longueur ; i++){//on prends chaque [""] des xml
                                                     
                                                    nameListe = objet.nompluguine[i].trim().split(" ");
                                                  nomduplug=objet5.nompluguine[g].trim()
                                                    longueur2=(nameListe.length)// on sort tous les mots
                                                    
                                                       // if ( (longueur2==longueur1) ){
//console.log('nameListe '+objet.nompluguine[i].trim()+longueur2)
               ////////////////////
               //////////////////

 levi=levenshtein(objet.nompluguine[i].trim(),names)
                      querylengthlevi=objet.nompluguine[i].trim().length
                      objet6lengthlevi=names.length
                      concordancelevi=(levi*100)/objet6lengthlevi
                      //console.log("consordanceeeeeeeeeeeeee " +concordancelevi)

                      if(concordancelevi<25){
                        console.log("concordance levi : " +levi+" "+concordancelevi+" "+ objet.nompluguine[i] + " "+names)
                      //query=objet6.nompluguine[y]
                       url1 = 'http://127.0.0.1:8888/?emulate='+nomappel+' '+objet.nompluguine[i];console.log('on connais donc ont appel depuis cortana en 2 : '+url1)
                                  request = require('request');
                                  request({ url : url1 })
                      callback({'tts': ""})
return false

                      }//fin concorancelevi




               ///////////////
               //////////////








                                                                //for (j=0; j<longueur1 ; j++){
//console.log(nameListe[j])                                                                  
                                                                    //on test 1 par 1
                                                                    //nameListe[j]=nameListe[j].toLowerCase()//si le 1=1 si 2=2
                                                                    //if (nameList[j].search(new RegExp("\\b" + nameListe[j] + "\\b","gi"))>-1){
                                                                          
                                                                         // if(nameList[j].search(nameListe[j])>-1){//si chaque mot est egal ds 2 phrase
                                                                            
                                                                         //     if (j==longueur2-1){
                                                                           //        console.log('trouver concordance dans plug mais beug');// emulate1(motsplugin,nomduplug); 
                                                                           //        callback({'tts': ""})                                                              
                                                                           //        return false
                                                                            //  }
                                                                         // }
                                                                         // else { j=longueur2}
                                                               // }//fin for

                                                         // }//fin if longueur2

                                                }//fin for i longueur

                                      }//fin for g
console.log('pas de reco de '+motsplugin+' dans les plugs')
//Skynet(query)
/// fin du 2 eme test
//fin retest
var queryinternet= query.substring(longueurphrase,query.length); 
console.log('fin pour cortana ont va dans wiki')
SARAH.run('wiki', { 'phrase' : motsplugin});//callback({'tts' : ""})
callback({'tts': ""})
return false

          }//fin if query

        }//fin for
ask(query)////on pert questionner
callback({'tts': ""})
return false

})//fin fs read

}//fin match3
//console.log("on commmmmmmmmence")
Mémoire(query);//c'est la que l'on commence
 
}//fin if

  //url1 = 'http://127.0.0.1:8888/?emulate='+data.reco
  //url1=url1.replace(new RegExp(' ', 'ig'),"+")
  //console.log('on appel depuis cortana 2'+url1)
//request = require('request');
//request({ url : url1 })
    if ( data.reco.search("Siri") >-1){ScribeSpeak("tu ma appelé siri, et puis quoi encore, pourquoi pas cortana")}
callback({'tts' : ""});
}//fin try

  catch (Exception) {}
callback({'tts' : ""});

}//fin export