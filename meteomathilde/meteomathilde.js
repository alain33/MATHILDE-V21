var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH){

  configcortana = config.modules.cortana
nommathilde = configcortana.nommathilde;  


 //ask=data.ask
 maConfig = config.modules.scribe; SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak
 SCRIBE.activePlugin('meteomathilde');
 ask=JSON.stringify(SARAH.context.scribe.lastReco).replace(new RegExp(nommathilde,"gi"),"");ask=JSON.parse(ask);console.log("recu de scribe en 1 "+ask)

	request = require('request');cheerio = require('../modules/cheerio');
		url='https://www.google.fr/search?q='+ask
		console.log('on recherche l url:'+url)
	
	request({ 'uri' : url, 'headers':{'Accept-Charset': 'utf-8'}, 'encoding':'binary' }, function(error, response, html){
			 var $ = cheerio.load(html); resultmeteo=''
 					$('div:nth-child(1)').each(function(i, element){var meteo = $(this);
//console.log(meteo.text())
  						if (i==20){
    						meteo=meteo.text()
    						matchmeto=(meteo.search(new RegExp("\\b" + '%' + "\\b","gi")))
      
      							if (matchmeto==-1){console.log('pas de météo');ScribeSpeak('pas de météo connus');callback();return false}//fin if
        							for (i=0 ; i<matchmeto+1; i++){resultmeteo=resultmeteo+meteo[i]}//fin for

											var leresultmeteo = resultmeteo.replace(/°C/g,'degré , ');
											var leresultmeteo = leresultmeteo.replace(/lun/g,'')
											var leresultmeteo = leresultmeteo.replace(/mar/g,'')
											var leresultmeteo = leresultmeteo.replace(/mer/g,'')
											var leresultmeteo = leresultmeteo.replace(/jeu/g,'')
											var leresultmeteo = leresultmeteo.replace(/ven/g,'')
											var leresultmeteo = leresultmeteo.replace(/sam/g,'')
											var leresultmeteo = leresultmeteo.replace(/dim/g,'')
											var leresultmeteo = leresultmeteo.replace(/:/g,'')
											var leresultmeteo = leresultmeteo.replace(/\./g,'')
											var leresultmeteo = leresultmeteo.replace(/°F/g,'')
											var leresultmeteo = leresultmeteo.replace(/\|/g,'')
											var leresultmeteo = leresultmeteo.replace(/\%/g,' pour cent')
											var leresultmeteo = leresultmeteo.replace(/km\/h/g,' kilomètre heure ,')
											var leresultmeteo = leresultmeteo.replace(/N à/g,' ,NORD , à')
											var leresultmeteo = leresultmeteo.replace(/NE à/g,' ,NORD ESTE , à')
											var leresultmeteo = leresultmeteo.replace(/NO à/g,', NORD OUEST, à')
											var leresultmeteo = leresultmeteo.replace(/S à/g,' ,SUD , à')
											var leresultmeteo = leresultmeteo.replace(/SE à/g,' ,SUD ESTE , à')
											var leresultmeteo = leresultmeteo.replace(/SO à/g,' ,SUD OUEST , à')
											var leresultmeteo = leresultmeteo.replace(/E à/g,' ,ESTE , à')
											var leresultmeteo = leresultmeteo.replace(/O à/g,' ,OUEST , à')
											var leresultmeteo = leresultmeteo.replace(/Vent/g,' ,Vent')
										ScribeSpeak(leresultmeteo,true)
										//SARAH.run('mathildedico', { 'phrase' : leresultmeteo})
										console.log(leresultmeteo)
										callback({'tts' : ""});;return false
  						}//fin if i==20
					})//fin each $
	})//fin request

}