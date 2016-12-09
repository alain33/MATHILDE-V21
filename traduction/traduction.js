var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH){

 SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak;
 SCRIBE.activePlugin('traduction');

nomchercher=JSON.stringify(SARAH.context.scribe.lastReco);nomchercher=JSON.parse(nomchercher)

rgxp = /traduction de (.+)/i; nomchercher = nomchercher.match(rgxp);
 nomchercher=nomchercher[1]
 //console.log(match[1])
 //nomchercher=data.chercher;
  console.log('traduire : *'+nomchercher+'*')
 reponse=""; fs = require('fs');exec = require('child_process').exec; 
 maConfig = config.modules.scribe; util = require('util'); path = require('path');cheerio = require('../modules/cheerio');



anglaisfrancais= function(nomchercher){

	nomchercher = nomchercher.trim(); nomchercher =nomchercher.toLowerCase()
	nomcherchercomplet='https://translate.google.com/?q='+nomchercher+'&sl=en&tl=fr#en/fr/'+nomchercher

	console.log(nomcherchercomplet)

	b=''; x=0; url=nomcherchercomplet
		
		request({ 'uri' : url, 'headers':{'Accept-Charset': 'utf-8'}, 'encoding':'binary' }, function(error, response, html){//ma fonction...});﻿

			    var $ = cheerio.load(html, { xmlMode: false, ignoreWhitespace: false, lowerCaseTags: false });
						$('div span:nth-child(1)').each(function(i, element){var a = $(this);
							b=b+a.text();x=x+1
								
								if (i==18){
								c=(a.text().toLowerCase().split(' '));d=(nomchercher.toLowerCase().split(' '))

										if (c[0]==d[0]){
											console.log('idemmmmmmmmmmmmmmmmmmmmmm');console.log('alerte  francais anglais');
													francaisanglais(nomchercher)
											callback();return false
										}
							
							console.log('anglais francais'); console.log(i+a.text()) ;ScribeSpeak(a.text())
								callback();return false


										}//fin if
							})//fin each

         });//fin $

} //fin fnct anglaisfrancais

francaisanglais= function(nomchercher){

 nomchercher = nomchercher.trim(); 
 nomcherchercomplet='https://translate.google.com/?q='+nomchercher+'&sl=fr&tl=en#fr/en/'+nomchercher

 console.log(nomcherchercomplet); b=''; x=0

		request(nomcherchercomplet, function (error, response, html) {
    		var $ = cheerio.load(html, { xmlMode: false, ignoreWhitespace: false, lowerCaseTags: false });
					$('div span:nth-child(1)').each(function(i, element){var a = $(this);
						b=b+a.text();x=x+1

							if (i==18){
									c=(a.text().toLowerCase().split(' '));d=(nomchercher.toLowerCase().split(' '))
									console.log(i+a.text()) ;ScribeSpeak(a.text())
									callback();return false
							}//fin if
					})//fin each
         });//fin $

} //fin fnct anglaisfrancais

anglaisfrancais(nomchercher)
}