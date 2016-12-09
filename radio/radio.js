

var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;
var text

exports.action = function(data, callback, config,SARAH){


SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('radio web');

console.log("text dans radio js "+JSON.stringify(SARAH.context.scribe.lastReco))
var request = require('request'); var cheerio = require('cheerio'); var exec = require('child_process').exec;
        
           exec("taskkill /f /im VLC.exe")

setTimeout(function(){

//radio=SARAH.context.scribe.FULL_RECO;
      try{
      radio=data.radio.toLowerCase()
            }
      catch(err){radio=JSON.stringify(SARAH.context.scribe.lastReco)}
      radio=radio.replace(new RegExp("\\b" + " " + "\\b","gi"),"")
      //radio=radio.replace(new RegExp("france","gi"),"");
      
      console.log('on recois de cortana dans radio js '+radio)
     
          request('http://fluxradios.blogspot.fr/p/flux-radios-francaise.html', function (error, response, html) {//var $ = cheerio.load(html);
          var $ = cheerio.load(html);
            
          count=0
       
              $('li a').each(function(i, element){
                    var a = $(this);
                 count=count+1
                    var url = a.attr('href'); 
                    a1=a.text().toLowerCase()

                    a1=a1.replace(new RegExp("\\b" + " & " + "\\b","gi")," et ");
                    a1=a1.replace(new RegExp("\\b" + " " + "\\b","gi"),"");
                    a1=a1.replace(new RegExp("france","gi"),"");
                    //if ( ((a.text().toLowerCase()).search 'radio france' >-1) && (count==0) ){
                    //console.log(a1)
                    //console.log(count)
                            if ( (radio.search(new RegExp(a1,"gi"))>-1) && (count!==3) ){
                               
                                //console.log("on aaaa"+a1)
                                count++
                                console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'+a.text())
                                console.log(url)

                                                request(url, function (error, response, html1) {
                                                var $ = cheerio.load(html1);
                                                var url1 = $('table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2) > span:nth-child(1) > span:nth-child(1)').text();console.log('on va '+url1)
                                                     
                                                var exec = require('child_process').exec;
                                              
                                                var proc = '"C:/Program Files/VideoLAN/VLC/vlc.exe "'
                                                        
                                                console.log(proc+url1+" --qt-start-minimized")
                                                var child = exec(proc+url1+" --qt-start-minimized");
                                                })//fin request
callback({'tts' : " "})
                                      return false
                            }//fin if     
               });// fin each
callback({'tts' : " "})
console.log('pas de radio')
      })//fin resquest


             
}, 2000);//fin timeout










}