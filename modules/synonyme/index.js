function synonyme(nomchercher,callback1){
//callback1 "essssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"

var data1='{"cyrano":[]}'; fs = require('fs');var path1 = require('path');	
request = require('request');
var url = 'http://www.crisco.unicaen.fr/des/synonymes/'+nomchercher

console.log('chercher les synonymes de : *'+nomchercher+'*')
 
//url = 'http://www.crisco.unicaen.fr/des/synonymes/'+var nomchercher;
	

 var pathname = path1.resolve('%CD%','./plugins/mémoiredemathilde/cyranomemoire/'+nomchercher+'.json' ).replace('\\%CD%', '');//console.log(pathname)
//pathname = 'C:/Users/Administrateur/sarah/plugins/mémoiredemathilde/cyranomemoire/'+nomchercher+'.json';
var path = path1.resolve('%CD%','./plugins/mémoiredemathilde/cyranomemoire/' ).replace('\\%CD%', '');//console.log(path)
//var path = 'C:/Users/Administrateur/sarah/plugins/mémoiredemathilde/cyranomemoire/'

	var file=fs.readdirSync(path)
		  var longueurdir=file.length
//console.log(file)
	for(i=0;i<longueurdir;i++){//console.log("i"+i)
		var nom=nomchercher+'.json';
		//console.log(nom +"              "+file[i])
			if (nom==file[i]){
					var files=fs.readFileSync(path+'/'+file[i],'utf8').toString()
					var objet = JSON.parse(files);jsonStr = JSON.stringify(objet)
					var longueur = objet.cyrano.length;//console.log('lonnnnnnnnnngueur'+objet.cyrano)

					i=longueurdir-1
					callback1 (objet.cyrano)
					console.log("fini pour les synonymes")
					return
					//callback({'tts' : ""})
					//return false;
			}//fin if

			//else if ( i==longueurdir-1||i==longueurdir){Internet(nomchercher)}
	}//fin for
	
////////////////////////////////////


//console.log("l'i internet")

request({ 'uri' : url }, function (err, response, body){
try{	
	var $ = require('cheerio').load(body, { xmlMode: false, ignoreWhitespace: true, lowerCaseTags: true })
	
	var nombre=$('i.titre:nth-child(2)').text();//le nombre de synonymes
//console.log(nombre+"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
		if (nombre==""){console.log('pas de synonymes on callback');callback1("pas de synonymes") //callback({'tts' : ""})
//console.log('chercher gdgfdgenfin : *'+nomchercher+'*')
	//	return false
	}

		var nombre1=nombre.replace(new RegExp("\\b" + "synonymes" + "\\b","gi"),""); var nombre1=eval(nombre1)
}catch(err){console.log("pas de synonymes");callback1("pas de synonymes") //callback({'tts' : ""});//return false
}
		try {
			var nombre2=$('#synonymes > div:nth-child('+(nombre1+2)+') > i:nth-child(1)').text();// le nombre d'antonymes
			var nombre3=nombre2.replace(new RegExp("\\b" + "antonymes" + "\\b","gi"),"");
			var nombre3=nombre3.replace(new RegExp("\\b" + "antonyme" + "\\b","gi"),"");
			var nombre3=eval(nombre3);
			//////////////////////////////////scrap();
if (nombre3==undefined){nombre3=0;}
	try{var nombre4=eval(nombre1)}catch (Exception) {var nombre4=0}
	try{var nombre4=nombre4+eval(nombre3)}catch (Exception) {var nombre4=0}

		var nombre4=nombre4+4///le nombre à rechercher pour les 10 principaux
 			var heure1 = $('#synonymes > table:nth-child('+nombre4+')').text();// le nom exaact
				var L = heure1.split("  ");
					var longueur = heure1.length;

		//var tempowait=(((JSON.stringify(heure1).length)*70)+3000);//console.log('tempoWait'+tempowait);console.log();
	///////////////////////////speak()
//console.log("le l:"+L);//callback1(L)
//console.log("longueur"+longueur)
var nom=""
if ( longueur > 0){ 
	//console.log(longueur)
	for ( var i = 1; i < 11 ;i++){//console.log("les nom "+L[i])
		if (L[i]==undefined){break};
		if (L[i]==""){break};
		var nom=nom+L[i]+", "}
	}
	

try{
nom=nom.trim();//console.log("testttttttttttttttttt")
	 objet1 = JSON.parse(data1);//console.log("ob : "+objet1)
  jsonStr1 = JSON.stringify(objet1);//console.log("js "+jsonStr1)
	objet1.cyrano.push(nom);
 data1 = JSON.stringify(objet1); //callback1 (data1);
//console.log(data1)
}catch(err){console.log(err); callback1(rien) //callback({'tts' : ""});return false
}








console.log("on ecris : "+pathname+data1)
fs.writeFile(pathname, data1, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
if (err) throw err;})
callback1(objet1.cyrano)//;callback({'tts' : ""})
//return false




			}
		catch (err) {var nombre3="0"}//console.log("      pas d'antonyme     ");
			
});//fin request


 
}


module.exports = synonyme
//function foo(address, fn){
 // geocoder.geocode( { 'address': address}, function(results, status) {
 //    fn(results[0].geometry.location); 
 // });
//}

