exports.action = function(data, callback, config, SARAH){

   if (!data.dictation){
    return callback({'tts': "Je ne comprends pas"});
  }
  var search = data.dictation;

  var rgxp = search.replace(/Sarah /i," ");
  var rgxp1 = rgxp.replace(/dit /i," ");
  var rgxp2 = rgxp1.replace(/dis /i," ");
  var rgxp3 = rgxp2.replace(/bonjour /i," ");
  var rgxp4 = rgxp3.replace(/à /i," ");
  var rgxp5 = rgxp4.replace(/ a /i," ");
  var rgxp6 = rgxp5.replace(/aux /i,"les ");
  var answer = 'Bonjour' + rgxp6 ;
    callback({'tts' : answer });
}