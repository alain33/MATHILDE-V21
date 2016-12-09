
// le nom du pc


exports.init = function(SARAH,config) {
 var os = require('os');a=os.hostname() 
var exec = require('child_process').exec; var Request = require('Request').exec;

request = require('request'); cheerio = require('cheerio'); fs   = require('fs'); var path = require('path');
//dico=require(path.resolve('%CD%', './plugins/modules/mathildedico').replace('\\%CD%', ''))
 colour = require(path.resolve('%CD%', './plugins/modules/colour').replace('\\%CD%', ''))

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
  fs = require('fs');// xml2js = require('../modules/xml2js') ;   parser = new xml2js.Parser({trim: true});
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
      data2='{"nompluguine":[]}'; var fs = require('fs'); //var parse = require('../modules/xml-parser');

      pathname = './plugins/'+objet.nompluguine[j]+'/'+objet.nompluguine[j]+'.xml'
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
      xml = fs.readFileSync(pathname,'utf8').toString('utf8');

///////
////////modif

xmldoc=require(path.resolve('%CD%', './plugins/modules/xmldoc').replace('\\%CD%', '')) ; fs = require('fs') ; first="" ; fichier1="" ; alerte="2" ; data2=[""] ; data21=[""] ; data3=[""]

xml = fs.readFileSync(pathname,'utf8').toString() ; fichier=new xmldoc.XmlDocument(xml).toString()

garbage=""
if ( (fichier.search(new RegExp("Sarah</item>","gi"))>-1) && (fichier.search(new RegExp("ruleref uri","gi"))<0) ){
if(fichier.search(new RegExp('"GARBAGE"',"gi"))>-1){garbage="garbage"}
//fichier=fichier.replace(new RegExp('SARAH',"gi"),"")

if(garbage=="garbage"){
 objet.nompluguine[j]=objet.nompluguine[j]+"garbage"
 new_jsonStr = JSON.stringify(objet); data1=new_jsonStr    
}
/////NB one of
substring="<one-of>" ; substring0="</one-of>" ; substring1="<item" ; substring2="<" ; string=fichier

locations=function (substring,substring0,substring1,substring2,string){

        var oneof=[],i=-1
        while( (i=string.indexOf(substring,i+1) ) >= 0){ oneof.push(i) }

        var antioneof=[],i=-1;
    //////////Nb item
      var item=[],i=-1;//console.log(antioneof)
       while( (i=string.indexOf(substring1,i+1) ) >= 0){ item.push(i) }

      var slash=[],i=-1;//console.log(item)
       while( (i=string.indexOf(substring2,i+1) ) >= 0){ slash.push(i) }
        //console.log(slash)

var repeat=[],i=-1;//console.log(item)
       while( (i=string.indexOf('<item repeat="0-1">',i+1) ) >= 0){ repeat.push(i) }
 

    //c'est parti
    item1(fichier,data2,data21,data3,alerte,item,oneof,antioneof,slash,repeat)
    return false
}//fin locations

item1=function(fichier,data2,data21,data3,alerte,item,oneof,antioneof,slash,antislash,repeat){
      temp="";count=0;temp1="";data2=[""] ; data21=["88"];repeat=0;data22=["88"];datatemp=["100"]
      
      for(i=0;i<slash.length;i++){oneof.push(slash[i])}
      for(i=0;i<item.length;i++){oneof.push(item[i])}
       
       if(oneof.length%2 == 0){

b=oneof[oneof.length-1]
console.log(b)


       }
 

      oneof=oneof.sort(function(a, b) {return a - b;})

      item=oneof;
      alerte0="";alerte1="";alerte2="";alerte=""

for (a=0;a<item.length;a++){ itema=item[a]        
    for (b=0;b<slash.length;b++){ slashb=slash[b]
                   
        if (slashb>itema){
                      
                      for(i=itema;i<slashb;i++){ temp=temp+fichier[i] }//fin for i
                      
                        temp=temp.trim();
                      
                      if(temp.search(new RegExp("<one-of>","gi"))>-1){
                      alerte0="oneof";
                     

                      datatemp.push("<one-of>"+temp1)
                      }//fin if temp
                    
                      if(temp.search(new RegExp("</one-of>","gi"))>-1){data2=data21;data21=["88"];alerte0="";//repeat=0
                      
                        datatemp.push("</one-of>"+temp1)    
                      }//fin if temp

                      if(temp.search(new RegExp("<item>","gi"))>-1){
                      
                          for(i=itema+6;i<slashb;i++){ temp1=temp1+fichier[i] }//fin for i
                          temp1=temp1.trim();                   
datatemp.push("<item>"+temp1)
                      }//fin if temp
                       if(temp.search(new RegExp('<item repeat="0-1">',"gi"))>-1){//console.log("rrrrrrrrrrrrrrrrsftsdfffffffff")

datatemp.push('<item repeat="0-1">'+temp1)

repeat=repeat+1
                       }
a=a+1

//c'est parti
        if(temp!==""){  
   

/// sans  <item repeat="0-1">
            if ( (temp.search(new RegExp("<item>","gi")>-1))  && (temp1!=="") && (alerte0!=="oneof") && (repeat==0) )   {
                    
                           data2length=data2.length
                                      
                                      for(i=0;i<data2length;i++){
                                        data2[i]=data2[i]+" "+temp1
                                         
                                      }// fin for i
                            
                            temp=""
            }//fin if temp

            if ( (temp.search(new RegExp("<item>","gi")>-1))  && (temp1!=="") && (alerte0=="oneof") && (repeat==0) )   {//console.log("444444444"+temp1+"5555555555")

                                  data2length=data2.length
                                          for(i=0;i<data2length;i++){
                                            data21.push(data2[i]+" "+temp1);//;//console.log("ff"+data2)
                                          }
                             
                                  temp=""

            }  //fin temp                     
              
//// avec   <item repeat="0-1">

               if ( (temp.search(new RegExp("<item>","gi")>-1))  && (temp1!=="") && (alerte0=="oneof") && (repeat==1) )   {
               //console.log("4444444cccccccccc44"+data2+"5555cccccccccccccccc555555")// prend 1er data 2 ajoute temp push
                                  data2length=data2.length
                                          for(i=0;i<data2length;i++){

                                            temp=temp.replace("<item>","").trim() 
         
                                            data22.push(data2[i]+" "+temp)

                                          }
                                 


                                  temp=""

            }  //fin temp  


               if ( (temp.search(new RegExp("<item>","gi")>-1))  && (temp1!=="") && (alerte0=="oneof") && (repeat>1) )   {
              
//fichier=fichier+"<item>*</item>"
//b=slash[slash.length-1]
//console.log(b)
//slash.push(b+1)                      

                                data22length=data22.length
                                  for(i=0;i<data22length;i++){
                               data21.push(data22[i])
                                  }
                                  data22length=data22.length
                                  for(i=0;i<data22length;i++){
                             data2.push(data22[i])
                                  }      
                                if(data21.length<data2.length){data21=data2}

                                    data2length=data2.length
                                          for(i=0;i<data2length;i++){

                                            temp=temp.replace("<item>","").trim() 
         
                                            data22.push(data2[i]+" "+temp)

                                          }

                                  temp=""

            }  //fin temp  



 }  //fin temp=!""                               
      b=slash.length;temp="";temp1=""              
     
     }//fin if >
    
    }//fin for b

}//fin for a

data22length=data22.length
for(i=0;i<data22length;i++){
data21.push(data22[i])
}
data22length=data22.length
for(i=0;i<data22length;i++){
data2.push(data22[i])
}


if(data21.length<data2.length){data21=data2}


///////////////
////////////
////////////////////////:::essaieeeeeeeeeeeeeeeeeeeeeeeee
essai=function(){

//si item ==> add
//si on of 
alerteonof=0;alertefinoneof=0;alerterepeate=0
datafin=[""];datafin1=[""];datatemp1=["88"]

for(x=0;x<datatemp.length;x++){datatempx=datatemp[x].trim()
              
            //  console.log("xxxxxxxxx"+datatempx+"xxxxxxxxxxx")
          //<item repeat="0-1">    
         if(datatempx.search("<one-of>")>-1){
                //datafin.push("datatemp[x]")
           alerteonof=alerteonof+1
         }
         if(datatempx.search("</one-of>")>-1){
                //datafin.push("datatemp[x]")
           alertefinoneof=1
         }
         if(datatempx.search('<item repeat="0-1">')>-1){
                //datafin.push("datatemp[x]")
           alerterepeate=1
         } 

                            if(datatempx.search("<item>")>-1){
                              datatempx=datatempx.replace("<item>","").trim();//datatempx=datatempx.replace(new RegExp("sarah","gi"),"");
                             //if(datatempx!==""){
                              //datafin.push(datatemp[x])
                                  if ( (alerteonof==0) &&  (datatempx!=="") ) {//alertoneof==0
                                    datafinlenght=datafin.length;//console.log(datafinlenght)
                                    
                                        for(i=0;i<datafinlenght;i++){
                                        datafin[i]=datafin[i]+" "+datatempx
                                        }
                                  //console.log(item)
                                  }

                                  else{/////////on of !!!!
                                    if(alerteonof==1){
                                      
                                      //console.log("alertttt one of "+alerteonof)
                                      datafinlenght=datafin.length;//console.log(datafinlenght)
                                      
                                              for(i=0;i<datafinlenght;i++){
                                              // datafinlenght=datafin.length
                                              datatemp1.push(datafin[i]+" "+datatempx)//crée temporaire
                                        //    datafin.push(datatempx)
                                              }//fin for i
                                    }//fin if alerte==1
                                      else{ 
                                          datafinlenght=datafin.length;//console.log(datafinlenght)
                                    datafin=datatemp1;datatemp1=[""]
                                        for(i=0;i<datafinlenght;i++){
                                        datafin[i]=datafin[i]+" "+datatempx
                                        }
                                      }//fin else alert>1
                                  } // //fin else        console.log("data temp 1 "+datatemp1)
                            
                            }//fin if item

                           if(alertefinoneof>0){//console.log("fin oneof")
                                 datafin=datatemp1;datatemp1=[""];//alerteonof=0;
                               alertefinoneof=0
                                 //console.log("donc datatemp 1 "+datatemp1)
                                 //console.log("donc datafin "+datafin)
                           }

}//fin for x
}//fin fnct
////////:fin essaieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
///////////
//console.log("finnnnnnnnnnnnn "+datafin)
//console.log("finnnnnnnnnnnnn datatemp1 "+datatemp1)


    data4='{"nompluguine":[]}'

            for(i=0;i<data21.length;i++){
              txt=data21[i]
              //console.log("rrrrrrrr "+txt+ "ffffffff"+i)
              if ( (txt!=="") && (txt.search("88") <0) ){
              txt=txt.replace(new RegExp("sarah","gi"),"")
              txt=txt.replace(new RegExp("\"","gi"),"").trim()

              txt=txt.replace(new RegExp("  ","gi")," ")

            objet1 = JSON.parse(data4) ; jsonStr1 = txt ; objet1.nompluguine.push(jsonStr1) ;
            new_jsonStr1 = JSON.stringify(objet1) ; data4=new_jsonStr1
}
            }// fin for i
    //data2=data21


//console.log("le data 2"+data21)
      pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
      console.log(data4)
      fs.writeFile(pathname, data4, function (err) { if (err) throw err;})


///§§§§garbage§§§§§









}//fin function item1
//}//if sarah!!!!!
locations(substring,substring0,substring1,substring2,string)

//////////////////////////:::
///////////////////////

    
//    else{data2='{"nompluguine":[]}'
//          pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';console.log(objet.nompluguine[j]+" type lazyyyyyy ou garbage")
//          pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
 //         console.log(data2)
  //        fs.writeFile(pathname, data2, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
  //        if (err) throw err;})


   // }//fin data2

//////////
//////////fin modif

//on sauvegarde
 
           // }//fin try
            //catch (Exception) { console.log('pas de xml pour : '+objet.nompluguine[j]) }
}///fin if sarah
else{data4='{"nompluguine":[]}';console.log("rule ou lazy")
 pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
      console.log(data4)
      fs.writeFile(pathname, data4, function (err) { if (err) throw err;})



}
          }//fin for j

/////////////////////////////////
/////////////////////////////////
      pathname='./plugins/demarrage/item/plugins.json'
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
      pathname1='%CD%/plugins/demarrage/item/plugins.json'
                console.log(pathname+' créé')
                          fs.writeFile(pathname, data1, function (err) { // ecrit dans le fichier 
                          if (err) throw err;})
                         
                          return false

}//fin fnct memoire					  

}                        