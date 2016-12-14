var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH) {

 maConfig = config.modules.scribe
 SCRIBE = SARAH.context.scribe ; ScribeAskMe = SARAH.ScribeAskMe;
 ScribeSpeak = SARAH.ScribeSpeak ; SCRIBE.activePlugin('Wikipédia');
 alerte="" ; path = require('path');
 request = require('request') ; j=1 ; k=0 ; cheerio = require('cheerio') ; exec = require('child_process').exec
 fs = require('fs')

try {
 phrase1=data.phrase; phrase=data.phrase;
    if(phrase==undefined){
      alerte=1;
      console.log("recu de cortana"+phrase)
      phrase=JSON.stringify(SARAH.context.scribe.lastReco);
      console.log("recu de scribe en 1 "+phrase)
    }// fin if phrase
}//fin try
 
catch(err){phrase=JSON.stringify(SARAH.context.scribe.lastReco);console.log("recu de scribe en 2 "+phrase)}

if(alerte!==1){
 phrase='recherche '+phrase+' sur Wikipédia'; console.log('on doit rechercher : '+phrase)
 }

 console.log('on doit recherche '+phrase)

////////////////////////////////////////////////////

req = function(url,count){ 
	 
request({ 'uri' : url,rejectUnauthorized: false, encoding: 'utf-8'}, function (err, response, body){
  
    console.log('urllllllll'+url)
       
       if (err || response.statusCode != 200) {
        
        console.log(err)
    
/////////// recherche sur wiki et dans url

							      request({'uri':'https://www.google.fr/search?q='+phrase1+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei','headers':{'Accept-Charset': 'utf-8'}}, function (error, response, html) {
							              $ = cheerio.load(html);
							              url = $('.g .s cite').first().text().trim();
							               
							                if(count!=="stop"){
							                   
							                    console.log("ghjghjghghghjg111"+url)
							                   
							                          if(url.search('wikipedia.org')>-1){
							                            console.log("artung"+url)
							                            count="stop"
							                            req(url,count)
							                          }//fin if url
							                
							                }//fin if count!==stop
							              
							      });//fin request

//////////

function encart(phrase1){
 request({'uri':'https://www.google.fr/search?hl=fr&q='+phrase1+'&gws_rd=ssl', 'headers':{'Accept-Charset': 'utf-8'}}, function (error, response, html) {

     $ = cheerio.load(html) ; a=$('div.g span._tA')
        
        console.log('trounvé !!!'+a.text())
              
             if (a.text()==""){
                search=search.replace(new RegExp("\\b" + " " + "\\b","gi"),"+");
                search=search.replace(" à ","+à+");
                search=search.replace(new RegExp(' ', 'ig'),"+")
                 proc = 'start chrome --new-window http://www.google.fr/search?q='+search ;
                console.log("la rpoc "+proc)
                child=exec(proc);
                callback({'tts' : " "}) ; return false          
             }//fin if
              
                ScribeSpeak(a.text(),function(){
                    console.log(phrase1)
                    phrase1=phrase1.replace(new RegExp("\\b" + " " + "\\b","gi"),"+");
                    phrase1=phrase1.replace(" à ","+à+");
                    phrase1=phrase1.replace(new RegExp(' ', 'ig'),"+")
                    console.log("-----"+phrase1)
                     proc = 'start chrome --new-window http://www.google.fr/search?q='+phrase1 ;
                    console.log(proc)
                    child=exec(proc);
                    callback({'tts' : " "}) ; return false
               })//fin speak
     
 })//fin request
}//fin funct encart

encart(phrase1)

callback({'tts' : " "}) ; return false 
 
} // fin if err

  $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: true }); 
  	
  	//  SCRAPING
requeste=function(url){

  try {paragaphe1=$('#mw-content-text > p:nth-child(1)').text()}
    catch (Exception) {}
  try {paragaphe2=$('#mw-content-text > p:nth-child(2)').text()}
    catch (Exception) {}
  try {paragaphe3=$('#mw-content-text > p:nth-child(3)').text()}
    catch (Exception) {}
  try {paragaphe4=$('#mw-content-text > p:nth-child(4)').text()}
    catch (Exception) {}
  try {paragaphe6=$('#mw-content-text > p:nth-child(5)').text()}
    catch (Exception) {}

mafonction1(url);

 tempestString = paragaphe4;espace = " ";

}//fin fnct requeste

requeste(url);

callback({'tts' : " "}) ; return false 

})//fin request url

}// fin function req



mafonction1=function(url){paragaphe5=paragaphe1.length+paragaphe2.length+paragaphe3.length+paragaphe4.length+paragaphe6.length
  
  if (paragaphe5==0){

 /////////// recherche sur wiki est dans url

      request({'uri':'https://www.google.fr/search?q='+phrase1+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei', 'headers':{'Accept-Charset': 'utf-8'}}, function (error, response, html) {
             
              $ = cheerio.load(html);
              url = $('.g .s cite').first().text().trim();
             console.log("ghjghjghghghjg22222222222"+url)

      });//fin request

//////////

      process1 = '%CD%/plugins/cortana/bin/search.vbs ' + search ; exec(process1) ; callback() ; return false
 
  }//fin if 0

  else{ lewiki=""
    
    if(paragaphe1!==""){ScribeSpeak(paragaphe1)}
      else{
        if(paragaphe2!==""){ScribeSpeak(paragaphe2)}
          else{
            if(paragaphe3!==""){ScribeSpeak(paragaphe3)}
               else{
                 if(paragaphe4!==""){ScribeSpeak(paragaphe4)}
                    else{
                      if(paragaphe6!==""){ScribeSpeak(paragaphe6)}
                        else{ScribeSpeak("")}
                    }
               }       
          }
      } //fin if             
   
console.log('on envoie:::::::::::::::::'+"111111111"+paragaphe1+"2222222222222"+paragaphe2+"333333333"+paragaphe3+"44444444444"+paragaphe4+"55555555555"+paragaphe6)

 dico=require(path.resolve('%CD%', './plugins/modules/mathildedico').replace('\\%CD%', ''))
dico(paragaphe1+paragaphe2+paragaphe3+paragaphe4+paragaphe6)

 WikiMemoire(search,url);
 callback({'tts' : " "}) ; return false
  
  }//fin else le wiki

} //fin mafnct1

function WikiMemoire(search,url){console.log(search+"*****"+url)
	
clés=search
	search=url
search=search.replace(new RegExp('\\+','ig')," ")
search=search.trim()
search=search.replace(new RegExp('https://fr.wikipedia.org/wiki/','ig')," ");
search=search.replace(new RegExp('[^0-9a-zA-Zéèàçù]', 'ig')," ")
search=search.trim()
console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+search)
  dir = path.resolve('%CD%', './plugins/mémoiredemathilde/wikimemoire/'+search+'.json').replace('\\%CD%', '');
 pathname = dir; data1='{"wiki":[]}';  fs = require('fs');
 objet1 = JSON.parse(data1); jsonStr1 = JSON.stringify(objet1);
 objet1.wiki.push(paragaphe1+paragaphe2+paragaphe3+paragaphe4+paragaphe6); data2 = JSON.stringify(objet1); 

    fs.writeFile(pathname, data2, function (err) {if (err) throw err;}) // ecrit dans le fichier courses l'objet + la nouvelle valeur




// on ajout à phrase clés:
clés=clés.replace(search," ")
clés=clés.trim()
console.log("la clés"+clés+"**")
 filePathrea = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '');
    if(clés==!""){                        
                                     fs.readFile(filePathrea, function(err,data){
                               
                                          objet = JSON.parse(data);jsonStr = JSON.stringify(objet);
clés=clés.trim()
                                                  objet.phrasescles.push(clés); new_jsonStr = JSON.stringify(objet);
                                                  console.log("valeur rajoutée au json phrasescles & fini pour wiki "+clés)
                                                  filePathphrasescles1 = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '')
                                                //  fs.writeFile(filePathphrasescles1,new_jsonStr)

                                      })
}
callback({'tts' : " "}) ; return false

//fin
}//fin wikimemoire

function TestPhrase(search,url){

query=search
 path1 = path.resolve('%CD%', './plugins/mémoiredemathilde/wikimemoire/').replace('\\%CD%', '');

  fs.readdir(path1, function (err, files) {console.log(files)
      longueurdir=files.length;  console.log(longueurdir)
      read(files,path1,query,longueurdir)
  })//fin fs read

function read(files,path1,query,longueurdir){
 
  if(longueurdir==0){req(url);return false}
  
   vocalise='';compte=0; datascrap='{"information":[]}'
   objetscrap = JSON.parse(datascrap); longueurscrap = objetscrap.information.length

            for(i=0;i<longueurdir;i++){
                    data1=fs.readFileSync(path1+'/'+files[i]).toString(); objet = JSON.parse(data1)
                    jsonStr = JSON.stringify(objet);query=query.trim()
console.log("*"+query+"*")
                          if (jsonStr.search(new RegExp(query,"gi"))>-1){
                                    console.log('cela fait rapport à '+query);
                                    objetmatch = JSON.parse(datamatche); jsonStrmatch = JSON.stringify(objetmatch);
                                    objetmatch.datamatch.push(files[i]);


                                          function ask(question, texte,url) {
                                             ScribeAskMe(question, [
                                                {'answer':'age' }
                                                ], function(answer,phrase,match,wholeMatch) {
                                                  
                                                    if (phrase=='oui') {ScribeSpeak(texte,true); callback({'tts' : " "});return false}
                                                    if (phrase=='non') {req(url);callback({'tts' : " "});return false}
                                               
                                             
                                                }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. ", 'essais': 2}
                                              );
                                            }//fin fnct ask

                                  compte=compte+1
                                  objetscrap.information.push(objet.wiki[0]); vocalise=vocalise+' , '+ files[i].replace(/.json/gi,' ');
                                  texte=objet.wiki[0]; question='cela fait rapport à '+vocalise+' veux tu que je lise , oui ou non'

                          }// fin if on connais le data.q

            }//fin for i

if (compte==0){req(url);callback({'tts' : " "}) ; return false}

function ask1(question, texte,url) {
 ScribeAskMe(question, [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      
        if (phrase.search('aucun')>-1) { req(url); callback({'tts' : " "}) ; return false}

        if (phrase!=='undefined') {
              try{
                  parle= fs.readFileSync(path1+'/'+phrase+'.json').toString();objetparle = JSON.parse(parle);
                  ScribeSpeak(objetparle.wiki[0],true);console.log('en memoire')
                  callback({'tts' : " "});return false
              }
              catch (Exception) {console.log(Exception)
                       exec = require('child_process').exec;
                      search=search.replace(new RegExp(' ', 'ig'),"+")
                       proc = 'start chrome --new-window http://www.google.fr/search?q='+search ;
                      console.log("errer "+proc)
                       child = exec(proc);
                       search=search.replace(new RegExp('/+', 'ig')," ")

              }
         }    
       }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 2}
  );
}//fin fnct ask


texte=objet.wiki[0]
question='cela fait rapport à '+vocalise+', le quel veux tu'
      ask1(question,texte,url)
console.log(vocalise)

}//fin fnct read
}//fin funct test phrase

//try{
  rgxp = /recherche (.+) sur Wikipédia/i; match = phrase.match(rgxp);// ce qui se cache entre "recherche" et "sur wikipedia"
  search = match[1]; url = 'https://fr.wikipedia.org/wiki/'+search;datamatche='{"datamatch":[]}'
  console.log('au depart de wiki on a : '+search)
  TestPhrase(search,url)
//}
//catch (Exception) {console.log("erreur dans la recherche");callback({'tts' : " "})  ;return false}

}// fin exports action