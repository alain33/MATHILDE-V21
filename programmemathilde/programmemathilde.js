var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE; 


exports.init = function(data, callback, config,SARAH) {


files=""


fs = require('fs');path = require('path');
recursiveReadSync = require(path.resolve('%CD%', './plugins/modules/recursive').replace('\\%CD%', '')), files  ;
chemin=path.resolve('%CD%', './program files').replace('\\%CD%', '')
console.log(chemin)
chemin="C:/program files"
console.log("le chemin des logiciels est : "+chemin+" changer si cela beug")

//recursiveReadSync = require('recursive-readdir-sync')  , files  ;
//filePathphrasescles1 = require(path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', ''))
//filePathphrasescles1="C:\\Users\\Administrateur\\sarah\\plugins\\programmemathilde\\memoireprogrammemathilde\\listprogramme.json"
try {
  filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')
 content = fs.readFileSync(filePathphrasescles1,'utf8') 
 console.log("fichier programme existe")
}
catch(err){
console.log("mise à jour des fichiers, peut etre long (3 à 4 minutes), seulement cette fois ci")

// recursiveReadSync = require('recursive-readdir-sync')  , files  ;
 try { 
  files = recursiveReadSync(chemin);
 } 
 catch(err){ 

      if(err.errno === 34){ console.log('Path does not exist');  }
      else {  console.log('erreur') }
 }
//console.log(files)

filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')
//filePathphrasescles1="C:\\Users\\Administrateur\\sarah\\plugins\\programmemathilde\\memoireprogrammemathilde\\listprogramme.json"
//filePathphrasescles1="C:\\Users\\Administrateur\\sarah\\plugins\\programmemathilde\\memoireprogrammemathilde\\listprogramme.json"
        fs.writeFile(filePathphrasescles1,files)

}//fin catch read
 //callback({'tts' : " "}) ; return false
}//fin export




exports.action = function(data, callback, config, SARAH) {

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('programme mathilde');

recherche=SARAH.context.scribe.lastReco

if (recherche.indexOf("ferme")>-1){on=0}else(on=1);//console.log("rrrrrrrrr"+on)

rgxp = /logiciel (.+)/i; match1 = recherche.match(rgxp);

recherche=match1[1]
recherche=recherche.toLowerCase()
recherche1=recherche.replace(new RegExp(" ","gi"),"");
recherche1=recherche1.replace(new RegExp("-","gi"),"");
recherche1=recherche1.replace(new RegExp("_","gi"),"");

console.log("en attente de : "+recherche + " ou : " + recherche1)
fs = require('fs') ; p = require('path') ; exec = require('child_process').exec ; path = require('path');

//path='C:/Program Files'


list1=[]

filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')
//filePathphrasescles1="C:\\Users\\Administrateur\\sarah\\plugins\\programmemathilde\\memoireprogrammemathilde\\listprogramme.json"
  //      fs.writeFile(filePathphrasescles1,list1)
content = fs.readFileSync(filePathphrasescles1,'utf8')
//console.log(content)


contentsplit=content.split(",")
//contentsplit=contentsplit
for(i=0;i<contentsplit.length;i++){
  contentsplit1=contentsplit[i].replace(new RegExp(" ","gi"),"");
  contentsplit1=contentsplit1.replace(new RegExp("-","gi"),"");
   contentsplit1=contentsplit1.replace(new RegExp("_","gi"),"");
contentsplit1=contentsplit1.toLowerCase();
//console.log("rrrrrrrrrrr"+contentsplit[i])
  




  if ( ( contentsplit1.search(recherche+".exe","gi")>-1 ) || ( contentsplit1.search(recherche1+".exe","gi")>-1 ) ){
  
  //  console.log(recherche);console.log(contentsplit[i])
substring=recherche.toLowerCase();//console.log(fichier1)
string=contentsplit[i].toLowerCase()
//function locations(substring,string){
  var a=[],x=-1;
  while((x=string.indexOf(substring,x+1)) >= 0) a.push(i);
  //console.log("eeeeeeeeeeeeeeeeeeeeeee"+a.length);
//}   
//locations(substring,string) 

    console.log("lancement de : "+contentsplit[i]+ a.length)
    //
    //
if(a.length>1){
 if(on==0){ 
var exec = require('child_process').exec;
                                                var nircmd =path.resolve('./plugins/infomathilde/nircmd/nircmd.exe').replace('\\%CD%', '')
                                                 
                                                  //var nircmd=nircmd+' killprocess '+'" '+contentsplit[i]+'"'
                                              var nircmd=nircmd+' closeprocess '+'" '+contentsplit[i]+'"'
                                              // var process1=nircmd+' infobox '+'" info "'+' '+'"'+objetscrap.information[y]+'"';
                                                //var process1=nircmd1+" '"++"'";console.log(process1)
                                                //exec(process);killprocess "c:\winnt\system32\calc.exe" 
                                                // var child = exec(process)
                                                var child2 = exec(nircmd);console.log(nircmd)
                                                callback({'tts' : " "})
return false
}//fin if on
else{
//path.resolve('%CD%', './plugins/modules/levenshtein')
SARAH.runApp(contentsplit[i])
callback({'tts' : " "}) ; return false
  }//fin else on
  }//fin if
}

}//fin for  
console.log("pas trouvé !!!")
callback({'tts' : " "})
return false




//////////:
//////////finnnn


}