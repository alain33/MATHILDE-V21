var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;
exports.action = function(data, callback, config, SARAH){
  maConfig = config.modules.scribe; util = require('util');

  SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; SCRIBE.activePlugin('time');

  var date = new Date();

  var text = 'il est ' + date.getHours() + ' heure ';
  if (date.getMinutes() > 0){ 
    text += date.getMinutes();
  }
 
  
  // Callback with TTS
ScribeSpeak(text)
  callback({'tts': ""});
}
