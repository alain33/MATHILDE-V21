



var exec = require('child_process').exec; var Request = require('Request').exec;

// le nom du pc
var os = require('os');a=os.hostname()

exports.init = function(SARAH,config) {

request = require('request'); cheerio = require('cheerio'); fs   = require('fs'); var path = require('path');

function nomappeldesarah(){ 
  try{  
      filePathcontent1 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
      content = fs.readFileSync(filePathcontent1,'utf8');
      ini = require('./ini/ini'); fs = require('fs')

        nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).common.name;
        console.log('enfin le nom : '+nomappel);console.log('vvvvvvvvvv3')
            custome()
  }//fin try
 
 catch (Exception) {
    filePathcontent1 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
    content = fs.readFileSync(filePathcontent1,'utf8');
    ini = require('./ini/ini'); fs = require('fs')

      nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).bot.name;
      console.log('enfin le nom : '+nomappel);console.log('vvvvvvvvvv4')
          custome()
 } //fin catch
}//fin fnct nomappeldesarah

nomappeldesarah()

function custome(){
    try{
        filePathcontent2 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
        content = fs.readFileSync(filePathcontent2,'utf8');

          if(content.search('debug=true')>-1){
              content=content.replace('debug=true','debug=false');
              console.log('sauvegarde debug=false');
                  fs.writeFileSync(filePathcontent2,content,'utf8')
                  console.log('!!!!!!!!!!!!!!!!!!!! RE DEMARRAGE NECESSAIRE MERCI!!!!!!!!!!!!!!!')
          }// fin if

          else (console.log('pas de chagement debug=false'))
          miseà0()
    }//fin try  

    catch (Exception) {
          filePathcontent2 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
          content = fs.readFileSync(filePathcontent2,'utf8');
          console.log(content)
          console.log('pensez à modifier [debug] enable=true par [debug] enable=false dans client custom.ini')
          console.log('!!!!!!!!!!!!!!!!!!!! PUIS RE DEMARRAGE NECESSAIRE MERCI !!!!!!!!!!!!!!!')
              miseà0() 
    }//fin catch
}//fin fnct custome



//on met à zero pour enlever les anciens plugs
function miseà0(){
    
    var nircmd ='%CD%/plugins/infomathilde/nircmd/nircmd.exe'
  var path = require('path');
  var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
    var process=nircmd + ' filldelete "' + dir + '\\demarrage\\item\\*.*"'﻿
  var exec = require('child_process').exec;                       
  exec(process)

      setTimeout(function(){ console.log(' fin de mise à 0 du systeme');
          memoire();
      }, 2000);//fin timeout

}// fin fnct miseà0


function memoire(){
////mise en memoire du nom des plug
  fs = require('fs'); xml2js = require('../modules/xml2js') ;   parser = new xml2js.Parser({trim: true});
  path = require('path'); nomplugin="" ;   nombreplugin=0
//le nom des plugins
  config=SARAH.ConfigManager.getConfig();data1='{"nompluguine":[]}'
    
        file=Object.keys(config.modules).forEach(function(plugin) {
               nombreplugin=nombreplugin+1 ; nomplugin=nomplugin+", "+plugin
               //dans un json nom pluguine
               objet = JSON.parse(data1);   jsonStr = JSON.stringify(objet); // transforme l'objet en texte
               jsonStr1 = JSON.stringify(plugin)// la valeur de l'item.

                   try { jsonStr1=jsonStr1.replace(/"/g,'');}//fin try et on met au bon format
                   catch (Exception) {console.log("   erreur       ");}

                //on pousse en memoire
                objet.nompluguine.push(jsonStr1); new_jsonStr = JSON.stringify(objet); data1=new_jsonStr
        });//fin for each file


  for ( j = 0; j<nombreplugin; j++){
      console.log(objet.nompluguine[j])
      ///mise en fichier des items
      data2='{"nompluguine":[]}'; var fs = require('fs'); var parse = require('../modules/xml-parser');

      pathname = './plugins/'+objet.nompluguine[j]+'/'+objet.nompluguine[j]+'.xml'
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');

          try{
              var xml = fs.readFileSync(pathname,'utf8').toString('utf8');
              var obj = parse(xml); var DOMParser = require('../modules/xmldom').DOMParser; var doc = new DOMParser().parseFromString(xml,'utf8');
              txt="a"

                for ( i = 0; txt!=="" ; i++){

/////!!!!!


                    try{ txt  = doc.getElementsByTagName("item")[i].childNodes[0].nodeValue;
                          objet1 = JSON.parse(data2);   jsonStr1 = JSON.stringify(objet1); // transforme l'objet en texte
                          jsonStr1 = JSON.stringify(txt);jsonStr1=jsonStr1.replace(/"/g,'');// la valeur de l'item.
                          objet1.nompluguine.push(jsonStr1); new_jsonStr1 = JSON.stringify(objet1);data2=new_jsonStr1
                    }//fin try

                    catch (Exception) {console.log("fin du xml");txt="";}

                }//fin for i

 pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
console.log(data2)
          fs.writeFile(pathname, data2, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
          if (err) throw err;})
            }//fin try
            catch (Exception) { console.log('pas de xml pour : '+objet.nompluguine[j]) }

          }//fin for

/////////////////////////////////
/////////////////////////////////
      pathname='./plugins/demarrage/item/plugins.json'
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
      pathname1='%CD%/plugins/demarrage/item/plugins.json'
                console.log(pathname+' créé')
                          fs.writeFile(pathname, data1, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
                          if (err) throw err;})
                         
                          return false

}//fin fnct memoire					  

}                        