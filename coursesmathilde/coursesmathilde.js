var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;



exports.action = function(xml, callback, config, SARAH) {

  var config = config.modules.coursesmathilde; path = require('path');
  var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
  var filePath_liste = path.resolve('%CD%', './plugins/coursesmathilde/coursesmathilde_liste.txt').replace('\\%CD%', ''); // Chemin vers courses_liste.txt
  var filePathe = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', ''); 
  var filePathe1 = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathildememoire.json').replace('\\%CD%', '');
 
  var fs = require('fs');

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; SCRIBE.activePlugin('coursesmathilde');

        if (xml.item != null) {
              if(xml.item=="false"){callback();return}  

query=xml.item
SARAH.run('mathildedico', { 'phrase' : query})
    fs.readFile(filePathe, function(err, data) { // read file to memory 
      var objet = JSON.parse(data);var longueur = objet.courses.length;var jsonStr = JSON.stringify(objet);var cd=(objet.courses[1]);

// lis jsoncourses memoire
        fs.readFile(filePathe1, function(err, data) { // read file to memory 
            var objet1 = JSON.parse(data);var longueur1 = objet1.courses.length;var jsonStr1 = JSON.stringify(objet1);var cd1=(objet1.courses[1]);

     // on ecris le xml

              if (jsonStr.indexOf(query) > -1  ){ScribeSpeak (query + ", est déja present dans les courses");}

              else {

datas_xml='<grammar version="1.0" xml:lang="fr-FR" mode="voice" root="rulecoursesmathilde" xmlns="http://www.w3.org/2001/06/grammar" tag-format="semantics/1.0">\n'
datas_xml+='<rule id="rulecoursesmathilde" scope="public"><example>Sarah tu es cool</example><tag>out.action=new Object(); </tag>\n'
datas_xml+='<item>Sarah</item>\n'
datas_xml+='<one-of>\n'

    for (var i = 0; i < objet1.courses.length; i++) {  
        var cd1=(objet1.courses[i].item);
        datas_xml+='<item>ajoute à la liste des courses '+ cd1.trim() +'<tag>out.action.item="' + cd1.trim() +'"</tag></item>\n';   
    }//fin for

datas_xml+='<item>ajoute à la liste des courses '+ query.trim() +'<tag>out.action.item="'+ query.trim() +'";</tag></item>\n';
  
    for (var i = 0; i < objet1.courses.length; i++) {  
    var cd1=(objet1.courses[i].item);
    datas_xml+='<item>enlève de la liste des courses '+ cd1.trim() +'<tag>out.action.item_out="' + cd1 +'"</tag></item>\n';   
    }//fin for          

datas_xml+='<item>enlève de la liste des courses '+ query.trim() +'<tag>out.action.item_out="'+ query.trim() +'";</tag></item>\n';  
datas_xml+='<item>Envoie-moi la liste des courses<tag>out.action.push="liste"; </tag><tag>out.action.qui="Nicolas";</tag></item>\n'
datas_xml+='<item>Donne-moi la liste des courses<tag>out.action.dismoi="dismoi"; </tag></item>\n'  
datas_xml+='<item>Vide la liste des courses<tag>out.action.vide="vide"; </tag></item>\n'
datas_xml+='<item>Supprime la liste des courses<tag>out.action.vide="vide"; </tag></item>\n' 
datas_xml+='</one-of><tag>out.action._attributes.uri="http://127.0.0.1:8080/sarah/coursesmathilde";</tag></rule> </grammar>\n'

  var fs = require('fs');
    fs.writeFile("./plugins/coursesmathilde/coursesmathilde.xml", datas_xml, function(err) {
        if(err) {console.log(err);}
        else {console.log("plugin coursesmathilde généré! par cortana: "+query);}
    }); 

objet.courses.push({item: query}); new_jsonStr = JSON.stringify(objet);
      fs.writeFile(filePathe,new_jsonStr , function (err) {
          console.log("valeur rajoutée json coursesmathilde: " + query);ScribeSpeak ("j'ai rajouté "+query+" a la liste des course")
      });//fin fs write

if (jsonStr1.indexOf(query) > -1  ){ScribeSpeak (query + ", est déja present dans les coursesmathilde memoires");callback()}

  else {
      objet1.courses.push({item: query}); new_jsonStr = JSON.stringify(objet1);
      fs.writeFile(filePathe1,new_jsonStr , function (err) {  console.log("valeur rajoutée json coursesmathildememoire: " + query);});
      callback({'tts' : " "})
  }//fin else
      }//fin else
  
}//fin fnct memoire
)//fin read memoire
}//fin fnct
);//fin fs read     

callback({'tts' : " "});

return
}//fin if data.q
 
    if(xml.item_out != null) {
      var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
 
          fs.readFile(filePath, function(err, data) { // read file to memory
              if (err) throw err;
                  var objet = JSON.parse(data);var jsonStr = JSON.stringify(objet);  

                      if (jsonStr.indexOf(xml.item_out) > -1  ){
   
                            var removed =  objet.courses.splice(jsonStr.indexOf(xml.item_out) ,1);

                                 for (var i = 0; i < objet.courses.length ;i++){  // look for the entry with a matching `code` value
 
                                    if (objet.courses[i].item == xml.item_out){

                                        objet.courses.delete({item: xml.item_out});new_jsonStr = JSON.stringify(objet);
                                        fs.writeFile(filePath, new_jsonStr, function (err) { // ecrit dans le fichier courses l'objet + enleve la valeur
                                         if (err) throw err;
   
                                           ScribeSpeak("j'enléve l'objet : " + xml.item_out);callback();
   
                                        }); //fin fs write
                                    }//fin if     
                                  }//fin for
                      }//fin if

                      else {ScribeSpeak("objet inexistant");callback()}
   
 
	         });//fin fs read
	 
      callback();
    }//fin if 
    
 ////////////////////////////////////////
 
 
// Envoie en notification push

if (xml.push != null){
  
  console.log("Destinataire = "+ xml.qui);
  fs.writeFile(filePath_liste,"","UTF-8");  //met le fichier courses_liste.txt a zéro 

    fs.readFile(filePath,"UTF-8", function(err, data) { // read file to memory
      
      if (err) throw err;
      var objet = JSON.parse(data);
      var longueur = objet.courses.length; // le nombre de valeurs dans le fichier courses.json
      var jsonStr = JSON.stringify(objet); // transforme l'objet en texte
      var utilisateur = xml.qui
      console.log("Nombre de valeurs :"+longueur);
          
          if ( longueur > 0){
   
            for (var i = 0; i < objet.courses.length ;i++){  
 
                  fs.appendFileSync(filePath_liste, objet.courses[i].item+"\n","UTF-8", function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
                  if (err) throw err;         
                  });//fin appendfile
            }//fin for
          
          fs.readFile(filePath_liste,"UTF-8", function(err, data2) { // Données à envoyer
             if (err) throw err;
   
              var url = "http://127.0.0.1:8080/sarah/push?who="+xml.qui+"&Title=Liste_courses&msg="+data2
              var request = require ("request");

                  request({'uri' : url}, function (err, response, body) {
                  });//fin resquet

          });//fin fsread

                  ScribeSpeak("J'envoie à "+ xml.qui + " la liste des courses");return false
          }//fin if

        else { ScribeSpeak( "Il n'y a pas de liste de courses");return false}

      });//fin fsread
  
callback();

}//fin if

//////////////////////////////////////////////////////////////////////

//Donne la liste des courses 
if (xml.dismoi != null){
  var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
    
    fs.readFile(filePath, function(err, data) { // read file to memory
    if (err) throw err;
   
      var objet = JSON.parse(data);
      var longueur = objet.courses.length; // le nombre de valeurs dans le fichier courses.json
      var jsonStr = JSON.stringify(objet); // transforme l'objet en texte

          if ( longueur > 0){
   
              for (var i = 0; i < objet.courses.length ;i++){  // look for the entry with a matching `code` value
                    ScribeSpeak(objet.courses[i].item+",");SCRIBE.activePlugin('coursesmathilde');callback();
              }//fin for
          }//fin if
 
          else { ScribeSpeak('La liste des courses est vide');callback(); }
    });//fin fsread
return false

}//fin if
//////////////////////////////////////////////////////////////

// vide la liste des courses
	
	if (xml.vide != null){
     var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
		 fs.writeFileSync(filePath,'{"courses":[]}',"UTF-8"); // Remet le fichier courses.json a zéro pour une utilisation future
	   ScribeSpeak('suppression de la liste de course');
     SCRIBE.activePlugin('');return false
	   callback()
	}//fin if

		
return false

}